# mAs Overlay Gallery

Aynı fixed referansa (20260805 100 mAs take1) kaydedilmiş PCCT ve SEP mAs
serileri için 4 organlı görsel arayüz.

## Açma

```powershell
.\SERVE.ps1
```

Sonra tarayıcıda:

- PCCT: http://127.0.0.1:8765/?dataset=pcct_mas
- SEP:  http://127.0.0.1:8765/?dataset=sep_mas

`file://` ile açmayın; tarayıcı yerel dosya isteklerini engelleyebilir.

## Ne gösterir?

- **4 organ:** aorta, dalak, sağ böbrek, sol böbrek.
- **4 durum:** HAM (işlenmemiş hareketli CT) | IDENTITY (yalnız yeniden
  örnekleme) | CENTROID (öteleme sonrası) | RIGID (kemik/landmark sonrası).
- **4 görünüm:** 3 aksiyel kesit + 1 koronal kesit.
- Sağ panelde seçili vaka için Dice, ASSD, MSSD, HD95, NSD@1mm, clDice;
  sınırlayan organ ve centroid farkı.
- **Kapsam:** PCCT 175 vaka, SEP 162 vaka (1 mm, 50/100/200/300 mAs).
- **QC:** amber işaretli kartlar kayıt QC'den geçemedi (medyan Dice <0.85 veya
  maksimum centroid residual >5 mm). Örn. 20260601 300 her iki sette de
  aykırı; PCCT'te 20260622 100 take3, SEP'te 20260731 s80. Bu vakalar
  gizlenmez, uyarıyla gösterilir.

## Notlar

- Kartlardaki 4×4 mozaik: satırlar organ, sütunlar HAM | IDENTITY | CENTROID | RIGID.
- Tüm görseller registration çıktısından otomatik üretilir; manuel düzenleme yoktur.
- PCCT ve SEP sayısal olarak pooled edilmez; iki ayrı sekmedir.
- Böbrekler sağ/sol ayrıdır; analiz 1 mm üzerindedir.
