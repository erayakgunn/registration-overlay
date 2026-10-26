(() => {
  "use strict";

  const DATA = window.ANALYTICS;
  if (!DATA) throw new Error("analytics_data.js yüklenemedi");

  const key = new URLSearchParams(location.search).get("dataset") === "pcct" ? "pcct" : "sep";
  const ds = DATA[key];
  const label = ds.label || key.toUpperCase();

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  document.title = `PhantomX · ${label} · Analiz ve İstatistik`;
  const brand = $("#brandMark");
  if (brand) brand.textContent = label;
  $$(".dataset-link").forEach((a) => a.classList.toggle("active", a.dataset.dataset === key));
  const galleryLink = $("#galleryLink");
  if (galleryLink) galleryLink.href = `index.html?dataset=${key}`;
  const footerLeft = $("#footerLeft");
  if (footerLeft) footerLeft.textContent = `${label} Phantom · ${ds.series.length} seri · ${ds.n_pairs} pair`;

  const fmt = (v, d = 3) => (v == null || !isFinite(v) ? "–" : Number(v).toFixed(d));
  const pct = (v) => `${(v * 100).toFixed(1)}%`;

  function fit(canvas, cssW, cssH) {
    const dpr = window.devicePixelRatio || 1;
    canvas.style.width = cssW + "px";
    canvas.style.height = cssH + "px";
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssW, cssH);
    return ctx;
  }

  function diceColor(v) {
    if (v == null || !isFinite(v)) return "#0a1622";
    const t = Math.max(0, Math.min(1, (v - 0.88) / 0.12));
    const stops = [
      [0.0, [255, 88, 88]],
      [0.5, [255, 190, 105]],
      [1.0, [53, 224, 161]],
    ];
    let lo = stops[0], hi = stops[stops.length - 1];
    for (let i = 0; i < stops.length - 1; i += 1) {
      if (t >= stops[i][0] && t <= stops[i + 1][0]) { lo = stops[i]; hi = stops[i + 1]; break; }
    }
    const f = hi[0] === lo[0] ? 0 : (t - lo[0]) / (hi[0] - lo[0]);
    const c = lo[1].map((v0, i) => Math.round(v0 + (hi[1][i] - v0) * f));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }

  function statCard(labelText, value, caption, accent = false) {
    return `<article class="stat-card${accent ? " stat-accent" : ""}">
      <span class="stat-label">${labelText}</span>
      <strong>${value}</strong>
      <span class="stat-caption">${caption}</span>
    </article>`;
  }

  function summaryValue(organ, comparison) {
    const row = ds.summary.find((r) => r.organ === organ && r.metric === "Dice" && r.comparison === comparison);
    return row ? row.mean : null;
  }

  function renderCards() {
    const sessionsMatch = (ds.meta || "").match(/(\d+)\s+sessions/);
    const sessions = sessionsMatch ? sessionsMatch[1] : "–";
    const aorta = summaryValue("Aorta", "Different sessions");
    const spleen = summaryValue("Spleen", "Different sessions");
    $("#statCards").innerHTML = [
      statCard("Seri / oturum", `${ds.series.length} / ${sessions}`, "pairwise rapor kapsamı"),
      statCard("Pair sayısı", String(ds.n_pairs), "tüm seri çiftleri"),
      statCard("Aorta Dice", fmt(aorta), "farklı oturum ortalaması", true),
      statCard("Spleen Dice", fmt(spleen), "farklı oturum ortalaması"),
    ].join("");
  }

  function renderSummary() {
    const rows = ds.summary.map((r) => `<tr>
      <td>${r.organ}</td><td>${r.metric}</td><td>${r.comparison}</td>
      <td>${r.n}</td><td>${fmt(r.mean, 4)}</td><td>${fmt(r.std, 4)}</td>
      <td>${fmt(r.median, 4)}</td><td>${fmt(r.min, 4)}</td><td>${fmt(r.max, 4)}</td>
    </tr>`).join("");
    $("#summaryTable").innerHTML = `<table class="analytics">
      <thead><tr><th>Organ</th><th>Metrik</th><th>Karşılaştırma</th><th>N</th><th>Ort.</th><th>Std</th><th>Medyan</th><th>Min</th><th>Max</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }

  let histOrgan = "aorta";
  function renderHist() {
    const hist = ds.hist[histOrgan];
    const canvas = $("#histCanvas");
    const width = Math.max(320, canvas.parentElement.clientWidth - 4);
    const height = 300;
    const ctx = fit(canvas, width, height);
    const margin = { left: 62, right: 18, top: 20, bottom: 64 };
    const plotW = width - margin.left - margin.right;
    const plotH = height - margin.top - margin.bottom;
    const counts = hist.counts;
    const edges = hist.edges;
    const maxCount = Math.max(...counts, 1);
    const barW = plotW / counts.length;
    const x0 = edges[0];
    const x1 = edges[edges.length - 1];
    const sx = (v) => margin.left + ((v - x0) / (x1 - x0)) * plotW;
    ctx.font = "10px system-ui, sans-serif";
    ctx.lineWidth = 1;

    // Horizontal grid + y-axis counts.
    for (let g = 0; g <= 4; g += 1) {
      const y = margin.top + (plotH * g) / 4;
      ctx.strokeStyle = "rgba(154,178,206,0.16)";
      ctx.beginPath(); ctx.moveTo(margin.left, y); ctx.lineTo(width - margin.right, y); ctx.stroke();
      ctx.fillStyle = "rgba(154,178,206,0.75)";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(String(Math.round(maxCount * (1 - g / 4))), margin.left - 10, y);
    }

    // Bars.
    counts.forEach((count, i) => {
      const h = (count / maxCount) * plotH;
      const x = margin.left + i * barW + 1;
      ctx.fillStyle = diceColor((edges[i] + edges[i + 1]) / 2);
      ctx.fillRect(x, margin.top + plotH - h, Math.max(1, barW - 2), h);
    });

    // X axis line.
    ctx.strokeStyle = "rgba(154,178,206,0.5)";
    ctx.beginPath();
    ctx.moveTo(margin.left, margin.top + plotH);
    ctx.lineTo(width - margin.right, margin.top + plotH);
    ctx.stroke();

    // X ticks with readable labels.
    const ticks = 6;
    ctx.textBaseline = "top";
    for (let t = 0; t < ticks; t += 1) {
      const v = x0 + ((x1 - x0) * t) / (ticks - 1);
      const x = sx(v);
      ctx.strokeStyle = "rgba(154,178,206,0.5)";
      ctx.beginPath(); ctx.moveTo(x, margin.top + plotH); ctx.lineTo(x, margin.top + plotH + 5); ctx.stroke();
      ctx.fillStyle = "rgba(154,178,206,0.85)";
      ctx.textAlign = t === 0 ? "left" : t === ticks - 1 ? "right" : "center";
      ctx.fillText(fmt(v, 3), x, margin.top + plotH + 12);
    }

    // Mean marker.
    const total = counts.reduce((a, b) => a + b, 0) || 1;
    const mean = counts.reduce((acc, c, i) => acc + (c * (edges[i] + edges[i + 1])) / 2, 0) / total;
    const mx = sx(mean);
    ctx.strokeStyle = "rgba(53,224,161,0.9)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(mx, margin.top); ctx.lineTo(mx, margin.top + plotH); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#35e0a1";
    ctx.textAlign = mx > width / 2 ? "right" : "left";
    ctx.textBaseline = "top";
    ctx.fillText(`ort. ${fmt(mean, 3)}`, mx + (mx > width / 2 ? -6 : 6), margin.top + 2);

    // Axis title.
    ctx.fillStyle = "rgba(154,178,206,0.8)";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Dice", margin.left + plotW / 2, height - 4);

    $("#histCaption").textContent = `${histOrgan === "aorta" ? "Aorta" : "Spleen"} · ${ds.n_pairs} pair · aralık ${fmt(x0, 3)}–${fmt(x1, 3)} · ortalama ${fmt(mean, 3)} · X: Dice, Y: pair sayısı`;
  }

  let heatOrgan = "aorta";
  let heatMetric = "dice";

  function gainColor(v) {
    if (v == null || !isFinite(v)) return "#0a1622";
    if (v < -0.001) return "#8a3b3b";
    if (v <= 0.001) return "#26323f";
    const t = Math.max(0, Math.min(1, v / 1.0));
    const lo = [255, 190, 105];
    const hi = [53, 224, 161];
    const c = lo.map((v0, i) => Math.round(v0 + (hi[i] - v0) * t));
    return `rgb(${c[0]},${c[1]},${c[2]})`;
  }

  function renderHeat() {
    const isDice = heatMetric === "dice";
    const matrix = isDice ? ds.dice[heatOrgan] : ds.gain[heatOrgan];
    const n = matrix.length;
    const cell = n > 80 ? 7 : 8;
    const canvas = $("#heatCanvas");
    const size = n * cell;
    const ctx = fit(canvas, size, size);
    const colorOf = isDice ? diceColor : gainColor;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const v = matrix[i][j];
        ctx.fillStyle = i === j ? "#0a1622" : colorOf(v);
        ctx.fillRect(j * cell, i * cell, cell - 0.5, cell - 0.5);
      }
    }
    const organLabel = heatOrgan === "aorta" ? "Aorta" : "Spleen";
    $("#heatTitle").textContent = isDice ? "Dice ısı haritası" : "Kazanç ısı haritası";
    $("#legendMin").textContent = isDice ? "0.88 · düşük" : "0 · değişim yok";
    $("#legendMax").textContent = isDice ? "1.00 · yüksek" : "1.00 · yüksek kazanç";
    $("#legendGradient").style.background = isDice
      ? "linear-gradient(90deg, #ff5858, #ffbe69, #35e0a1)"
      : "linear-gradient(90deg, #26323f, #ffbe69, #35e0a1)";
    $("#heatCaption").textContent = `${organLabel} · ${n}×${n} seri · hücre üzerine gelince çift bilgisi.`;
    $("#heatExplain").innerHTML = isDice
      ? "<strong>Bu harita mutlak Dice'ı gösterir, kazanç değil.</strong> Her hücre, satır ve sütundaki iki serinin hizalama sonrası örtüşmesidir (diyagonal = serinin kendisi). Renk ölçeği sabittir: kırmızı ≈0.88 ve altı, yeşil ≈0.99–1.00. Zaten yüksek Dice'lı bir çift, 'iyileşme yok' diye kırmızı görünmez; rengi doğrudan Dice değerinden gelir. Kazanç için üstteki <em>Kazanç</em> sekmesine geçin."
      : "<strong>Kazanç = registration sonrası Dice − öncesi Dice.</strong> Yeşil = Dice arttı, koyu = değişim yok (aynı oturum çiftleri), kırmızı = azaldı. Farklı oturum çiftlerinde rigid/landmark registration'ın katkısını gösterir.";

    const tip = $("#heatTip");
    canvas.onmousemove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const j = Math.floor((event.clientX - rect.left) / cell);
      const i = Math.floor((event.clientY - rect.top) / cell);
      if (i < 0 || j < 0 || i >= n || j >= n || i === j) { tip.style.opacity = "0"; return; }
      const v = matrix[i][j];
      tip.textContent = `${ds.series[i]} ↔ ${ds.series[j]} · ${isDice ? "Dice" : "Kazanç"} ${fmt(v, 4)}`;
      tip.style.left = `${event.clientX + 12}px`;
      tip.style.top = `${event.clientY + 12}px`;
      tip.style.opacity = "1";
    };
    canvas.onmouseleave = () => { tip.style.opacity = "0"; };
  }

  function renderDates() {
    const rows = ds.date_summary
      .filter((r) => r.a !== r.b)
      .map((r) => ({ ...r, gain: ((r.aorta_gain || 0) + (r.spleen_gain || 0)) / 2 }))
      .sort((a, b) => b.gain - a.gain)
      .slice(0, 16);
    const canvas = $("#dateCanvas");
    const width = Math.max(360, canvas.parentElement.clientWidth - 4);
    const rowH = 24;
    const height = rows.length * rowH + 40;
    const ctx = fit(canvas, width, height);
    const margin = { left: 128, right: 60, top: 12, bottom: 20 };
    const plotW = width - margin.left - margin.right;
    const values = rows.map((r) => r.gain);
    const minV = Math.min(...values, 0);
    const maxV = Math.max(...values, 0.001);
    const span = maxV - minV || 1;
    rows.forEach((r, i) => {
      const y = margin.top + i * rowH;
      const w = ((r.gain - minV) / span) * plotW;
      ctx.fillStyle = "rgba(154,178,206,0.9)";
      ctx.font = "11px system-ui, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(`${r.a}→${r.b}`, margin.left - 8, y + 15);
      ctx.fillStyle = diceColor(0.88 + (r.gain - minV) / span * 0.12);
      ctx.fillRect(margin.left, y + 4, Math.max(2, w), rowH - 9);
      ctx.fillStyle = "rgba(235,245,255,0.9)";
      ctx.textAlign = "left";
      ctx.fillText(fmt(r.gain, 4), margin.left + w + 8, y + 15);
    });
  }

  function renderDiag() {
    const rows = ds.diagnostics.map((d) => {
      const sev = d.severity || (Math.min(d.aorta, d.spleen) < 0.90 ? "high" : "medium");
      return `<tr>
        <td>${d.a}</td><td>${d.b}</td><td>${d.same}</td>
        <td>${fmt(d.aorta, 4)}</td><td>${fmt(d.spleen, 4)}</td>
        <td>${fmt(d.aorta_c, 2)}</td><td>${fmt(d.spleen_c, 2)}</td>
        <td><span class="tag ${sev}">${sev}</span></td>
      </tr>`;
    }).join("");
    $("#diagTable").innerHTML = `<table class="analytics">
      <thead><tr><th>Seri A</th><th>Seri B</th><th>Aynı oturum</th><th>Aorta Dice</th><th>Spleen Dice</th><th>Aorta c. (mm)</th><th>Spleen c. (mm)</th><th>Şiddet</th></tr></thead>
      <tbody>${rows}</tbody></table>`;
  }

  function bindToggle(selector, setter, render) {
    $(selector).addEventListener("click", (event) => {
      const button = event.target.closest("button[data-organ]");
      if (!button) return;
      $$(`${selector} button`).forEach((b) => b.classList.toggle("active", b === button));
      setter(button.dataset.organ);
      render();
    });
  }

  bindToggle("#histOrgan", (v) => { histOrgan = v; }, renderHist);
  bindToggle("#heatOrgan", (v) => { heatOrgan = v; }, renderHeat);
  $("#heatMetric").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-metric]");
    if (!button) return;
    $$("#heatMetric button").forEach((b) => b.classList.toggle("active", b === button));
    heatMetric = button.dataset.metric;
    renderHeat();
  });

  renderCards();
  renderSummary();
  renderHist();
  renderHeat();
  renderDates();
  renderDiag();
  window.addEventListener("resize", () => { renderHist(); renderDates(); });
})();
