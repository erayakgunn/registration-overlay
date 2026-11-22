(() => {
  "use strict";

  const data = window.CASES;
  if (!data) throw new Error("data.js yüklenemedi");

  const ORGAN_LABEL = {
    aorta: "Aorta",
    spleen: "Dalak",
    kidney_right: "Böbrek sağ",
    kidney_left: "Böbrek sol",
  };
  const ORGAN_SHORT = { aorta: "A", spleen: "S", kidney_right: "BR", kidney_left: "BL" };
  const PLANE_LABEL = { axial: "Aksiyel", coronal: "Koronal" };
  const state = {
    view: "gallery",
    caseId: data.cases[0].id,
    organ: "aorta",
    plane: "axial",
    sliceMode: "all",
    sliceIndex: 1,
    allIndex: 0,
    mode: (data.beforeLabel || "").toLowerCase().includes("identity") ? "slider" : "four",
    split: 50,
    galleryQuery: "",
    gallerySort: "date",
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  const refs = {
    fixedRef: $("#fixedRef"),
    statGain: $("#statGain"),
    statGainCaption: $("#statGainCaption"),
    statLow: $("#statLow"),
    statLowCaption: $("#statLowCaption"),
    statCount: $("#statCount"),
    galleryView: $("#galleryView"),
    stats: $(".stats"),
    galleryTotal: $("#galleryTotal"),
    galleryGrid: $("#galleryGrid"),
    galleryCount: $("#galleryCount"),
    galleryFilterNote: $("#galleryFilterNote"),
    gallerySearch: $("#gallerySearch"),
    gallerySort: $("#gallerySort"),
    galleryEmpty: $("#galleryEmpty"),
    detailView: $("#detailView"),
    detailCurrent: $("#detailCurrent"),
    backToGallery: $("#backToGallery"),
    caseTabs: $("#caseTabs"),
    caseTitle: $("#caseTitle"),
    caseSeries: $("#caseSeries"),
    caseTags: $("#caseTags"),
    caseNote: $("#caseNote"),
    organTabs: $("#organTabs"),
    planeTabs: $("#planeTabs"),
    planeHint: $("#planeHint"),
    sliceTabs: $("#sliceTabs"),
    sliceModeRow: $("#sliceModeRow"),
    sliceModeToggle: $("#sliceModeToggle"),
    allSliceControl: $("#allSliceControl"),
    allSliceRange: $("#allSliceRange"),
    allSliceLabel: $("#allSliceLabel"),
    allSliceCount: $("#allSliceCount"),
    allSliceMin: $("#allSliceMin"),
    allSliceMax: $("#allSliceMax"),
    viewEyebrow: $("#viewEyebrow"),
    viewLabel: $("#viewLabel"),
    viewMeta: $("#viewMeta"),
    compare: $("#compare"),
    afterPane: $("#afterPane"),
    compareDivider: $("#compareDivider"),
  imgBefore: $("#imgBefore"),
  imgAfter: $("#imgAfter"),
  imgRaw: $("#imgRaw"),
  imgIdentity: $("#imgIdentity"),
  tagBefore: $("#tagBefore"),
  tagAfter: $("#tagAfter"),
  tagIdentity: $("#tagIdentity"),
    splitRange: $("#splitRange"),
    sliderRow: $("#sliderRow"),
    modeToggle: $("#modeToggle"),
    metricRows: $("#metricRows"),
    methodText: $("#methodText"),
    insightText: $("#insightText"),
    limitText: $("#limitText"),
    caveatText: $("#caveatText"),
    caveatCard: $("#caveatCard"),
    printButton: $("#printButton"),
  };

  const getCase = () => data.cases.find((item) => item.id === state.caseId) ?? data.cases[0];
  const fixedDay = data.fixed.split("_")[0];
  const isSameDay = (item) => item.day === fixedDay;
  const displayTag = (item) => (
    !item.featured && !item.qc && isSameDay(item) ? "Aynı gün" : item.tag
  );
  const displayTone = (item) => (
    !item.featured && !item.qc && isSameDay(item) ? "sky" : item.tone
  );
  const getOrganViews = () => {
    const item = getCase();
    return item.views[state.organ] ?? item.views.aorta;
  };
  const hasAllSlices = () => (getOrganViews().all?.length ?? 0) > 1;
  const isAllMode = () => state.plane === "axial" && state.sliceMode === "all" && hasAllSlices();
  const getViewList = () => {
    const views = getOrganViews();
    if (isAllMode()) return views.all;
    const planeList = views[state.plane]; return (planeList && planeList.length) ? planeList : views.axial;
  };
  const activeIndex = () => {
    const list = getViewList();
    const index = isAllMode() ? state.allIndex : state.sliceIndex;
    return Math.max(0, Math.min(index, list.length - 1));
  };
  const currentView = () => {
    const list = getViewList();
    return list[activeIndex()] ?? list[0];
  };
  const middleAllIndex = () => {
    const all = getOrganViews().all ?? getOrganViews().axial;
    return Math.floor((all.length - 1) / 2);
  };
  const resetSlicePositions = () => {
    state.sliceIndex = state.plane === "coronal" ? 0 : 1;
    state.allIndex = middleAllIndex();
  };

  function scoreTone(item) {
    return item.qc ? "amber" : item.tone;
  }

  function pct(value) {
    return Math.max(0, Math.min(100, value * 100));
  }

  function formatScore(value) {
    return Number(value).toFixed(3);
  }

  function formatDelta(value) {
    const sign = value >= 0 ? "+" : "−";
    return `${sign}${Math.abs(value).toFixed(3)}`;
  }

  function renderStats() {
    let best = { delta: -Infinity, organ: "aorta", item: null };
    let low = { after: Infinity, organ: "aorta", item: null };
    data.cases.filter((item) => !item.qc).forEach((item) => {
      Object.keys(ORGAN_LABEL).forEach((organ) => {
        const scores = item.scores?.[organ];
        if (!scores) return;
        const delta = scores.after - scores.before;
        if (delta > best.delta) best = { delta, organ, item };
        if (scores.after < low.after) low = { after: scores.after, organ, item };
      });
    });
    refs.statGain.textContent = `+${best.delta.toFixed(3)}`;
    refs.statGainCaption.textContent = `${ORGAN_LABEL[best.organ]} · ${best.item.series}`;
    refs.statLow.textContent = formatScore(low.after);
    refs.statLowCaption.textContent = `${ORGAN_LABEL[low.organ]} · ${low.item.series}`;
    refs.statCount.textContent = String(data.cases.length);
    refs.galleryTotal.textContent = String(data.cases.length);
    refs.fixedRef.textContent = data.fixed;
  }

  function renderArtifacts() {
    const panel = document.getElementById("artifactPanel");
    const list = document.getElementById("artifactList");
    const count = document.getElementById("artifactCount");
    const breakdown = document.getElementById("artifactBreakdown");
    if (!panel || !list || !count || !breakdown || !window.DATASETS) return;
    const labels = { sep: "SEP", pcct: "PCCT", zurich: "Zürich" };
    const current = new URLSearchParams(location.search).get("dataset") || "sep";
    const rows = [];
    Object.entries(window.DATASETS).forEach(([key, dataset]) => {
      (dataset.cases || []).forEach((item) => {
        if (!item.artifact && !item.segFailure) return;
        const info = item.artifact || item.segFailure;
        rows.push({
          key,
          label: labels[key] || key.toUpperCase(),
          id: item.id,
          series: item.series,
          summary: info.summary,
          kind: item.segFailure ? "failure" : "island",
          order: item.order ?? 0,
        });
      });
    });
    rows.sort((a, b) => a.key.localeCompare(b.key) || a.order - b.order);
    const islands = rows.filter((row) => row.kind === "island").length;
    const failures = rows.filter((row) => row.kind === "failure").length;
    count.textContent = String(rows.length);
    breakdown.textContent = `${islands} adacık + ${failures} hata`;
    panel.hidden = rows.length === 0;
    list.innerHTML = rows.map((row) => `
      <div class="artifact-row ${row.kind}" data-case-id="${row.id}" data-dataset="${row.key}">
        <a class="artifact-ds" href="?dataset=${row.key}">${row.label}</a>
        <span class="artifact-case">${row.series}</span>
        <span class="artifact-summary">${row.summary}</span>
        <span class="artifact-kind">${row.kind === "failure" ? "SEG HATASI" : "ADACIK"}</span>
      </div>
    `).join("");
    list.querySelectorAll(".artifact-row").forEach((row) => {
      row.addEventListener("click", (event) => {
        if (event.target.closest(".artifact-ds")) return;
        const key = row.dataset.dataset;
        if (key === current) {
          openCase(row.dataset.caseId);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          location.href = `?dataset=${key}`;
        }
      });
    });
  }

  function renderCaseTabs() {
    refs.caseTabs.innerHTML = "";
    const featured = data.cases.filter((item) => item.featured);
    const selected = getCase();
    const items = selected.featured ? featured : [selected, ...featured];
    items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "case-tab";
      const flagged = Boolean(item.artifact || item.segFailure);
      const badge = item.segFailure
        ? "SEG HATASI"
        : item.artifact ? "SEG ADACIK" : displayTag(item);
      button.dataset.caseId = item.id;
      button.dataset.tone = flagged ? "amber" : item.tone;
      button.innerHTML = `
        <div class="tab-kicker">
          <span class="tab-title">${item.title}</span>
          <span class="tab-badge">${badge}</span>
        </div>
        <div class="tab-series">${item.series} · ${data.fixed}</div>
        <span class="tab-bar"></span>
      `;
      button.addEventListener("click", () => {
        if (state.caseId === item.id) return;
        state.caseId = item.id;
        state.organ = "aorta";
        state.plane = "axial";
        state.sliceMode = hasAllSlices() ? "all" : "samples";
        resetSlicePositions();
        render();
      });
      refs.caseTabs.appendChild(button);
    });
  }

  function galleryCases() {
    const query = state.galleryQuery.trim().toLowerCase();
    let items = data.cases.filter((item) => {
      if (!query) return true;
      return [item.series, item.day, String(item.take), item.title, item.tag, displayTag(item)]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
    const averageGain = (item) => {
      const values = Object.values(item.scores || {});
      const total = values.reduce((sum, s) => sum + (s.after - s.before), 0);
      return total / Math.max(1, values.length);
    };
    const minFinal = (item) => Math.min(
      ...Object.values(item.scores || {}).map((s) => s.after)
    );
    const finalOf = (item, organ) => item.scores?.[organ]?.after ?? -Infinity;
    const sorters = {
      date: (a, b) => a.order - b.order,
      gain: (a, b) => averageGain(b) - averageGain(a),
      aortaFinal: (a, b) => finalOf(b, "aorta") - finalOf(a, "aorta"),
      spleenFinal: (a, b) => finalOf(b, "spleen") - finalOf(a, "spleen"),
      kidneyRightFinal: (a, b) => finalOf(b, "kidney_right") - finalOf(a, "kidney_right"),
      kidneyLeftFinal: (a, b) => finalOf(b, "kidney_left") - finalOf(a, "kidney_left"),
      low: (a, b) => minFinal(a) - minFinal(b),
    };
    return items.sort(sorters[state.gallerySort] ?? sorters.date);
  }

  function renderGallery() {
    const items = galleryCases();
    const total = data.cases.length;
    refs.galleryGrid.innerHTML = items.map((item) => {
      const scoreRows = Object.keys(ORGAN_LABEL).map((organ) => {
        const score = item.scores?.[organ];
        if (!score) return "";
        const short = ORGAN_SHORT[organ] || organ[0].toUpperCase();
        return `
            <div class="take-score">
              <span>${short}</span><b>${formatScore(score.before)}</b><i>→</i><b>${formatScore(score.after)}</b>
              <em class="${score.after >= score.before ? "pos" : "neg"}">${formatDelta(score.after - score.before)}</em>
            </div>`;
      }).join("");
      return `
        <button class="take-card${item.featured ? " featured" : ""}${item.qc ? " qc" : ""}" type="button"
                data-case-id="${item.id}" aria-label="${item.series} detayını aç">
          <div class="take-head">
            <div class="take-id">
              <span class="take-series">${item.series}</span>
              <span class="take-date">${item.day} · take ${item.take}${item.qc ? " · QC" : ""}</span>
            </div>
            ${item.artifact || item.segFailure
              ? `<span class="take-tag" data-tone="amber" title="${(item.artifact || item.segFailure).summary.replace(/"/g, "&quot;")}">${item.segFailure ? "SEG HATASI" : "SEG ADACIK"}</span>`
              : `<span class="take-tag" data-tone="${displayTone(item)}">${displayTag(item)}</span>`}
          </div>
          <div class="take-composite">
            <img src="${item.gallery}" alt="${item.series} · Aorta / Dalak / Böbrek önce-sonra">
          </div>
          <div class="take-scores">
            ${scoreRows}
          </div>
        </button>
      `;
    }).join("");
    refs.galleryCount.textContent = `${items.length} / ${total} take`;
    refs.galleryFilterNote.textContent = state.galleryQuery
      ? `Arama: “${state.galleryQuery}”`
      : state.gallerySort === "date" ? "Tümü gösteriliyor" : "Sıralı görünüm";
    refs.galleryEmpty.hidden = items.length > 0;
    refs.galleryEmpty.textContent = "Bu aramaya uyan take yok.";
  }

  function openCase(caseId) {
    state.view = "detail";
    state.caseId = caseId;
    state.organ = "aorta";
    state.plane = "axial";
    state.sliceMode = hasAllSlices() ? "all" : "samples";
    resetSlicePositions();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showGallery() {
    state.view = "gallery";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderSidebar() {
    const item = getCase();
    refs.caseTitle.textContent = item.title;
    refs.caseSeries.textContent = `${item.series} → ${data.fixed}`;
    const artifact = item.artifact || item.segFailure;
    refs.caseNote.textContent = artifact
      ? `${item.note} ⚠ ${artifact.summary}`
      : item.note;
    refs.caseTags.innerHTML = `
      <span class="pill tone">${displayTag(item)}</span>
      <span class="pill">${Object.values(ORGAN_LABEL).join(" + ")}</span>
      <span class="pill">fixed ${data.fixed}</span>
      ${item.artifact ? `<span class="pill artifact-pill">⚠ Seg adacık</span>` : ""}
      ${item.segFailure ? `<span class="pill failure-pill">⚠ Seg hatası</span>` : ""}
    `;

    refs.organTabs.innerHTML = "";
    const available = Object.keys(item.views || {});
    if (available.length && !available.includes(state.organ)) {
      state.organ = available[0];
    }
    Object.entries(ORGAN_LABEL)
      .filter(([organ]) => item.views?.[organ])
      .forEach(([organ, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.className = organ === state.organ ? "active" : "";
      button.setAttribute("aria-selected", String(organ === state.organ));
      button.addEventListener("click", () => {
        state.organ = organ;
        resetSlicePositions();
        render();
      });
      refs.organTabs.appendChild(button);
    });

    refs.planeTabs.innerHTML = "";
    Object.entries(PLANE_LABEL).filter(([plane]) => (item.views?.[state.organ]?.[plane]?.length ?? 0) > 0).forEach(([plane, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.className = plane === state.plane ? "active" : "";
      button.setAttribute("aria-selected", String(plane === state.plane));
      button.addEventListener("click", () => {
        state.plane = plane;
        resetSlicePositions();
        render();
      });
      refs.planeTabs.appendChild(button);
    });

    const organViews = getOrganViews();
    const allViews = organViews.all ?? [];
    const showSliceMode = state.plane === "axial" && allViews.length > 1;
    const views = getViewList();

    refs.sliceModeRow.hidden = !showSliceMode;
    $$("#sliceModeToggle button").forEach((button) => {
      button.classList.toggle("active", button.dataset.sliceMode === state.sliceMode);
    });

    refs.sliceTabs.innerHTML = "";
    refs.sliceTabs.hidden = isAllMode();
    refs.allSliceControl.hidden = !isAllMode();

    if (isAllMode()) {
      const index = activeIndex();
      refs.planeHint.textContent = `${allViews.length} aksiyel kesit · tümü`;
      refs.allSliceRange.max = String(allViews.length - 1);
      refs.allSliceRange.value = String(index);
      refs.allSliceLabel.textContent = allViews[index].label;
      refs.allSliceCount.textContent = `${allViews.length} kesit`;
      refs.allSliceMin.textContent = allViews[0].label;
      refs.allSliceMax.textContent = allViews[allViews.length - 1].label;
    } else {
      refs.planeHint.textContent = state.plane === "coronal"
        ? "1 koronal kesit"
        : `${views.length} örnek aksiyel kesit`;
      views.forEach((view, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `slice-button${index === state.sliceIndex ? " active" : ""}`;
        button.innerHTML = `<span>${view.label}</span><span class="slice-index">kesit ${index + 1}</span>`;
        button.addEventListener("click", () => {
          state.sliceIndex = index;
          render();
        });
        refs.sliceTabs.appendChild(button);
      });
    }
  }

  function renderViewer() {
    const item = getCase();
    const list = getViewList();
    const index = activeIndex();
    const view = list[index] ?? list[0];
    const organLabel = ORGAN_LABEL[state.organ];
    refs.viewEyebrow.textContent = state.mode === "four"
      ? "Ham / identity / centroid / rigid"
      : isAllMode()
        ? "Tüm kesitler"
        : state.mode === "side" ? "Yan yana" : "Önce / sonra";
    refs.viewLabel.textContent = `${organLabel} · ${PLANE_LABEL[state.plane].toLowerCase()} · ${view.label}`;
    refs.viewMeta.textContent = `${data.fixed} fixed · ${item.series} moving`;
    refs.imgBefore.src = view.before;
    refs.imgAfter.src = view.after;
    refs.imgRaw.src = view.raw || view.before;
    if (refs.imgIdentity) refs.imgIdentity.src = view.identity || view.raw || view.before;
    const isIdentityBefore = (data.beforeLabel || "").toLowerCase().includes("identity");
    if (refs.tagBefore) refs.tagBefore.textContent = `ÖNCE · ${isIdentityBefore ? "identity" : "centroid"}`;
    if (refs.tagIdentity) refs.tagIdentity.textContent = "IDENTITY · çakıştırma öncesi";
    if (refs.tagAfter) refs.tagAfter.textContent = `SONRA · ${(data.afterLabel || "").toLowerCase().includes("registered") ? "registered" : "rigid"}`;
    refs.imgBefore.alt = `${item.series} · ${organLabel} · ${view.label} · önce`;
    refs.imgAfter.alt = `${item.series} · ${organLabel} · ${view.label} · sonra`;
    if (refs.imgIdentity) refs.imgIdentity.alt = `${item.series} · ${organLabel} · ${view.label} · identity`;

    if (isAllMode()) {
      refs.allSliceRange.value = String(index);
      refs.allSliceLabel.textContent = view.label;
    }

    // Preload neighboring slices so scrubbing through the full stack stays smooth.
    [index - 1, index, index + 1]
      .filter((i) => i >= 0 && i < list.length)
      .forEach((i) => {
        [list[i].before, list[i].after].forEach((src) => {
          const img = new Image();
          img.src = src;
        });
      });

    $$(".case-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.caseId === state.caseId);
    });
    $$("#organTabs button").forEach((button) => {
      button.classList.toggle("active", button.textContent === organLabel);
    });
    $$("#planeTabs button").forEach((button) => {
      button.classList.toggle("active", button.textContent === PLANE_LABEL[state.plane]);
    });
    $$(".slice-button").forEach((button, index) => {
      button.classList.toggle("active", index === state.sliceIndex);
    });
    $$("#modeToggle button").forEach((button) => {
      button.classList.toggle("active", button.dataset.mode === state.mode);
    });

    refs.compare.classList.toggle("slider", state.mode === "slider");
    refs.compare.classList.toggle("side", state.mode === "side");
    refs.compare.classList.toggle("three", state.mode === "three");
    refs.compare.classList.toggle("four", state.mode === "four");
    refs.compareDivider.style.display = state.mode === "slider" ? "" : "none";
    refs.splitRange.disabled = state.mode !== "slider";
    refs.sliderRow.style.display = state.mode === "slider" ? "" : "none";
  }

  function averageGainOf(item) {
    const values = Object.values(item.scores || {});
    const total = values.reduce((sum, s) => sum + (s.after - s.before), 0);
    return total / Math.max(1, values.length);
  }

  function limitingOrgan(item) {
    const organs = Object.entries(item.scores || {});
    if (!organs.length) return "aorta";
    return organs.reduce((a, b) => (b[1].after < a[1].after) ? b : a)[0];
  }

  function afterPrefix(item) {
    return item.registration?.method === "identity" ? "Aynı geometri" : "Rigid sonrası";
  }

  function residualSentence(item, organ) {
    const residual = item.residual?.[organ];
    if (!residual) return "";
    return `${afterPrefix(item)}: ${ORGAN_LABEL[organ]} centroid farkı ${residual.centroid.toFixed(2)} mm, `
      + `HD95 ${residual.hd95.toFixed(2)} mm, ASSD ${residual.assd.toFixed(2)} mm` + (residual.mssd != null ? `, MSSD ${residual.mssd.toFixed(2)} mm` : "") + (residual.nsd != null ? `, NSD@1mm ${residual.nsd.toFixed(3)}` : "") + ".";
  }

  function explainLimit(item) {
    const organ = limitingOrgan(item);
    const label = ORGAN_LABEL[organ];
    const final = item.scores[organ].after;
    const gain = averageGainOf(item);
    const residual = item.residual?.[organ];
    const residualText = residualSentence(item, organ);
    const stem = `Sınırlayan organ ${label}; final Dice ${formatScore(final)}.`;

    if (item.qc) {
      if (item.qcReason === "recon_grid_anomaly") {
        return `${stem} Bu pair recon grid anomalisi nedeniyle QC dışı. ${residualText} `
          + "Global hizalama hâlâ belirgin şekilde bozuk; farklı recon geometrisi/interpolasyon da hesaba giriyor. "
          + "Rigid’in tek başına bunu kapatması beklenmez; önce recon ve segmentasyon doğrulanmalı.";
      }
      if (item.qcReason === "low_label_artifact") {
        return `${stem} Bu take düşük label artifact’i taşıyor; ${label.toLowerCase()} kontur sınırı güvenilir değil. `
          + "Dice’daki düşüklük gerçek anatomik uyumsuzluktan çok segmentasyon artifact’ini yansıtıyor. "
          + "Daha yüksek Dice için registration değil, segmentasyon düzeltmesi gerekir.";
      }
      return `${stem} Bu take QC işaretli (${item.qcReason}); Dice yorumu temkinli yapılmalı. `
        + "Düşük değer registration’dan çok segmentasyon/recon kaynaklı olabilir.";
    }

    if (item.inWorkbook === false) {
      return `${stem} ${residualText} Bu take workbook dışı bırakılmış; yani protokol dışı bir örnek. `
        + "Global hizalama iyi olsa da kalan fark boundary/şekil kaynaklı ve bu değerlendirme yalnızca rigid sonucu gösteriyor.";
    }

    if (isSameDay(item)) {
      const extra = Math.abs(gain) < 0.005
        ? "rigid’in ek global katkısı yok."
        : "rigid’in ek global katkısı sınırlı.";
      return `${stem} ${residualText} Aynı fixed günü: global geometri zaten çok yakın; ${extra} `
        + "Kalan fark ağırlıklı olarak segmentasyon/partial volume kaynaklı. "
        + "Daha yüksek Dice için yeni bir rigid denemesi değil, segmentasyon sınırının düzeltilmesi gerekir.";
    }

    if (item.id === "low") {
      return `${stem} ${residualText} 0731 cohort’u boundary/shape outlier: centroid farkı küçük olsa da `
        + "Aorta/Spleen konturlarında lokal şekil farkı kalıyor. Rigid yalnızca öteleme+dönme yaptığı için "
        + "bu kısmı düzeltemez; daha yüksek Dice için deformable registration veya segmentasyon düzeltmesi gerekir.";
    }

    const globalAligned = residual ? residual.centroid <= 1 && residual.hd95 <= 1.5 : true;
    if (globalAligned) {
      return `${stem} ${residualText} Centroid farkı 1 mm altında; yani kontur global olarak oturmuş. `
        + `Kalan problem görüntüde global kayma değil, ${label.toLowerCase()} kenarındaki şekil/segmentasyon farkı. `
        + (organ === "aorta"
          ? "Aorta küçük ve kıvrımlı olduğu için aynı mm kenar hatası Dice’ı Spleen’den daha çok düşürür. "
          : "")
        + "Rigid sadece global hizalamayı düzeltir; lokal şekil farkını kapatamaz. "
        + "Daha yüksek Dice için deformable registration veya segmentasyon düzeltmesi gerekir.";
    }

    return `${stem} ${residualText} Global hizalama 1 mm üzerinde kalmış; bu nedenle Dice’ı sınırlayan şey yalnızca kenar değil, `
      + "kalan centroid/rotasyon farkı da olabilir. Bu vakada önce transform ve segmentasyon QC’si kontrol edilmeli; "
      + "rigid’in tek başına yeterli olması beklenmez.";
  }

  function renderMetrics() {
    const item = getCase();
    refs.methodText.textContent = item.method;
    refs.metricRows.innerHTML = "";
    Object.keys(ORGAN_LABEL).forEach((organ) => {
      const scores = item.scores?.[organ];
      if (!scores) return;
      const delta = scores.after - scores.before;
      const residual = item.residual?.[organ];
      const row = document.createElement("div");
      row.className = `metric-row${organ === state.organ ? " active" : ""}`;
      row.dataset.tone = scoreTone(item);
      row.innerHTML = `
        <div class="metric-top">
          <span class="metric-name">${ORGAN_LABEL[organ]}</span>
          <span class="metric-delta">${formatDelta(delta)}</span>
        </div>
        <div class="metric-values">
          <span class="metric-before">${formatScore(scores.before)}</span>
          <span class="metric-arrow">→</span>
          <span class="metric-after">${formatScore(scores.after)}</span>
        </div>
        <div class="metric-bar" aria-hidden="true">
          <span class="metric-bar-fill" style="width:${pct(scores.after)}%"></span>
          <span class="metric-before-marker" style="left:${pct(scores.before)}%"></span>
        </div>
        <div class="metric-axis"><span>0.00</span><span>1.00</span></div>
        ${residual ? `<div class="metric-residual">${afterPrefix(item)}: centroid ${residual.centroid.toFixed(2)} mm${residual.assd != null ? ` · ASSD ${residual.assd.toFixed(2)}` : ""}${residual.mssd != null ? ` · MSSD ${residual.mssd.toFixed(2)}` : ""}${residual.hd95 != null ? ` · HD95 ${residual.hd95.toFixed(2)}` : ""}${residual.nsd != null ? ` · NSD@1mm ${residual.nsd.toFixed(3)}` : ""}${residual.cldice != null ? ` · clDice ${residual.cldice.toFixed(3)}` : ""}</div>` : ""}
      `;
      refs.metricRows.appendChild(row);
    });

    const scoresList = Object.values(item.scores || {});
    const deltas = scoresList.map((s) => s.after - s.before);
    const averageGain = deltas.reduce((sum, d) => sum + d, 0) / Math.max(1, deltas.length);
    const minFinal = Math.min(...scoresList.map((s) => s.after));
    const noChange = deltas.every((d) => Math.abs(d) < 0.001);
    const isLow = item.qc || minFinal < 0.93 || (averageGain < 0.015 && !noChange);
    refs.insightText.textContent = item.qc
      ? `QC işaretli take (${item.qcReason}); metrikler ve overlay yine de gösteriliyor, yorumda dikkat.`
      : noChange
        ? "Aynı fixed günü / aynı geometri: centroid baseline ile rigid sonuç aynı; konturlar değişmiyor."
        : averageGain > 0.08
          ? "Belirgin kazanç: centroid kayması rigid ile büyük ölçüde düzeliyor; organların tamamında örtüşme artıyor."
          : averageGain > 0.03
            ? "Orta düzey kazanç: rigid konturları toparlıyor; organdaki kalan fark şekil/boundary kaynaklı."
            : "Kazanç sınırlı: centroid zaten yakın. Kalan açık boundary/shape farkı; rigid ile daha fazlası gelmiyor.";
    refs.caveatText.textContent = item.qc
      ? `QC: ${item.qcReason}. Bu take workbook yorumunda ayrıca ele alınmalı; overlay yalnızca görsel kontrol içindir.`
      : !item.inWorkbook
        ? "Workbook dışı bırakılan take; kayıt yine de karşılaştırma için gösteriliyor."
        : item.id === "low"
          ? "0731 cohort’u boundary/shape outlier. Deformable veya segmentation düzeltmesi ayrı bir yöntem; bu değerlendirme rigid sonucu gösterir."
          : "Önce: centroid translation baseline. Sonra: üretim rigid transformu. Amaç rigid’in katkısını görünür kılmak.";
    refs.limitText.textContent = explainLimit(item);
    refs.caveatCard.style.borderColor = isLow ? "rgba(255, 190, 105, 0.18)" : "";
  }

  function setSplit(value) {
    state.split = Math.max(0, Math.min(100, Number(value)));
    refs.compare.style.setProperty("--split", `${state.split}%`);
    refs.splitRange.value = String(Math.round(state.split));
  }

  function render() {
    refs.galleryView.hidden = state.view !== "gallery";
    refs.detailView.hidden = state.view !== "detail";
    refs.stats.hidden = state.view === "detail";

    if (state.view === "gallery") {
      renderGallery();
      return;
    }

    const organViews = getOrganViews();
    const allViews = organViews.all ?? organViews.axial;
    state.sliceIndex = Math.max(0, Math.min(state.sliceIndex, organViews.axial.length - 1));
    state.allIndex = Math.max(0, Math.min(state.allIndex, allViews.length - 1));
    refs.detailCurrent.textContent = `${getCase().series} · fixed ${data.fixed}`;
    renderCaseTabs();
    renderSidebar();
    renderViewer();
    renderMetrics();
    setSplit(state.split);
  }

  refs.gallerySearch.addEventListener("input", (event) => {
    state.galleryQuery = event.target.value;
    renderGallery();
  });

  refs.gallerySort.addEventListener("change", (event) => {
    state.gallerySort = event.target.value;
    renderGallery();
  });

  refs.galleryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".take-card");
    if (card) openCase(card.dataset.caseId);
  });

  refs.backToGallery.addEventListener("click", showGallery);

  refs.modeToggle.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) return;
    state.mode = button.dataset.mode;
    renderViewer();
    setSplit(state.split);
  });

  refs.sliceModeToggle.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-slice-mode]");
    if (!button || state.plane !== "axial") return;
    state.sliceMode = button.dataset.sliceMode;
    if (state.sliceMode === "all") state.allIndex = middleAllIndex();
    render();
  });

  refs.allSliceRange.addEventListener("input", (event) => {
    state.allIndex = Number(event.target.value);
    renderViewer();
  });

  refs.splitRange.addEventListener("input", (event) => setSplit(event.target.value));

  let dragging = false;
  function updateFromPointer(event) {
    const rect = refs.compare.getBoundingClientRect();
    const value = ((event.clientX - rect.left) / rect.width) * 100;
    setSplit(value);
  }

  refs.compare.addEventListener("pointerdown", (event) => {
    if (state.mode !== "slider") return;
    dragging = true;
    refs.compare.setPointerCapture?.(event.pointerId);
    updateFromPointer(event);
  });
  refs.compare.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    updateFromPointer(event);
  });
  refs.compare.addEventListener("pointerup", () => { dragging = false; });
  refs.compare.addEventListener("pointercancel", () => { dragging = false; });

  document.addEventListener("keydown", (event) => {
    if (state.view !== "detail") return;
    if (event.target.closest("input, textarea, button")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      const views = getViewList();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      const key = isAllMode() ? "allIndex" : "sliceIndex";
      state[key] = Math.max(0, Math.min(views.length - 1, state[key] + delta));
      render();
      event.preventDefault();
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      const organs = Object.keys(ORGAN_LABEL);
      const position = organs.indexOf(state.organ);
      state.organ = organs[(position + 1) % organs.length];
      resetSlicePositions();
      render();
      event.preventDefault();
    }
  });

  refs.printButton.addEventListener("click", () => window.print());

  state.allIndex = middleAllIndex();
  renderStats();
  renderArtifacts();
  renderCaseTabs();
  render();
})();
