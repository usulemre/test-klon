# Rakip Analizi — Portföy Yönetimi / Serbest Fon Sitesi

> Hazırlanma tarihi: 24.07.2026
> Kapsam: Türk portföy yönetim şirketleri ve fon karşılaştırma platformlarının web/ürün benchmark'ı; bu projeye (SPK lisanslı bağımsız portföy yönetim şirketi, serbest fonlar) yönelik çıkarımlar.

## 1. Pazar bağlamı (2026)

- Türkiye'de menkul kıymet + alternatif yatırım fonlarında yönetilen büyüklük **13,8 trilyon TL**'yi aştı; **serbest fonlar toplam pazarın ~%65'i** — yani projenin odaklandığı segment pazarın en büyüğü.
- **Ak Portföy** ~460 milyar TL ile açık ara lider (kurumsal/banka bağlı).
- **İstanbul Portföy** "en büyük yerli bağımsız" konumlanmasıyla, bu projedeki kurgusal şirkete **en yakın rakip profili** (bağımsız, SPK lisanslı).

## 2. Rakip haritası

| Grup | Örnek | Konumlanma |
|---|---|---|
| Banka/kurumsal bağlı | İş Portföy, Ak Portföy, Garanti, Yapı Kredi | Dağıtım gücü, geniş fon yelpazesi |
| **Bağımsız** (bu projenin grubu) | **İstanbul Portföy**, Hedef, Ata | Bağımsızlık + nitelikli yatırımcı vurgusu |
| Veri/karşılaştırma platformları | TEFAS, Fintables, tefasfon | Fon karşılaştırma, analiz araçları |

## 3. En kritik bulgu — fiyat sunumu

İncelenen hiçbir rakip (İş, Ak, İstanbul Portföy) fon fiyatını **canlı/gerçek zamanlı** göstermiyor. Hepsi **dönemsel getiri** (1 Ay / 1 Yıl / YBB) + risk 1-7 gösteriyor. Karşılaştırma platformları bile günlük/tarihli veri sunuyor.

**Çıkarım:** Projede yapılan "fon fiyatlarını canlıdan günlüğe çevirme" değişikliği tüm sektörle birebir uyumlu. Fon pay fiyatı her iş günü, bir önceki günün sonuçlarına göre belirlenir; canlı gösterim yanıltıcıydı ve düzeltildi.

## 4. Site-bazlı benchmark

| Özellik | İş Portföy | Ak Portföy | İstanbul Portföy | Bu proje |
|---|:-:|:-:|:-:|:-:|
| Mega menü | ✓ | ✓ | ✓ | ✓ |
| Fon kartı (kod, getiri, risk) | ✓ | ✓ | ✓ | ✓ |
| **Günlük** fiyat + tarih | ✓ | ✓ | ✓ | ✓ (yeni) |
| Fon karşılaştırma | ✓ | ✓ | – | ✓ |
| Doküman/uyum sekmeleri (KAP, izahname, denetim) | ✓ | ✓ | ✓ | ✓ |
| Canlı BIST ticker/pano | – | – | – | ✓ (bu projede fazladan) |
| **"Fon Satın Al / nereden alınır"** | ✓ | ✓ | ✓ | ✗ eksik |
| **Fon önerisi / robo-danışman** | – | ✓ | – | kısmi (sihirbaz) |
| **Getiri hesaplayıcı** | – | ✓ | – | ✗ |
| **Yatırımcı girişi** | – | – | ✓ | ✗ |
| **Dolandırıcılık/güvenlik uyarısı** | ✓ | ✓ | ✓ (güçlü) | ✗ |
| TR/EN dil | ✓ | ✓ | ✓ | ✗ |
| AUM + yatırımcı sayısı vitrini | ✓ | ✓ | ✓ (137 Mlr, 24.000+) | ✓ |

## 5. Projenin durumu — güçlü ve zayıf yönler

**Güçlü (rakiplerle eşit ya da üstün):**

- Mega menü, fon kartları, doküman sekmeli fon detayı, karşılaştırma, AUM/yatırımcı istatistiği → sektör standardını karşılıyor.
- **Canlı BIST panosu + ticker** rakiplerde yok → modern/dinamik farklılaşma. *Dikkat:* bu daha çok aracı kurum/veri platformu öğesidir; portföy şirketlerinde görülmez. Fon fiyatından net ayrıldığı için "off-brand" riski azaldı, farklılaştırıcı olarak kalabilir.

**Belirgin boşluklar (rakiplerde var, projede yok):**

1. **"Fon nasıl/nereden alınır" akışı** — İş & Ak & İstanbul Portföy'ün hepsinde net "Fon Satın Al" (TEFAS/dağıtıcı) yolu var. Projede "Yatırımcı Ol" var ama satın alma/TEFAS köprüsü yok. En büyük dönüşüm boşluğu.
2. **Dolandırıcılık/güvenlik uyarısı** — bağımsız şirketlerde (İstanbul Portföy) baskın bir güven sinyali. Projede yok.
3. **Getiri hesaplayıcı** ve **fon önerisi motoru** (Ak Portföy) — etkileşimli araçlar.
4. **Yatırımcı girişi** (portal) — İstanbul Portföy'de var.
5. **TR/EN** dil desteği.

## 6. Önerilen yol haritası (öncelik sırasıyla)

**Yüksek etki / düşük efor**

- **"Fon Satın Al" CTA + akışı** — fon detayına ve karta ekle; TEFAS + dağıtıcı kurum yönlendirmesi. (En kritik boşluk.)
- **Güvenlik/dolandırıcılık uyarı şeridi** — footer veya özel sayfa. Bağımsız konumlanmada güven için şart.

**Orta**

- **Getiri hesaplayıcı** (tutar × dönem → tahmini getiri) — Ak Portföy'deki gibi etkileşimli araç.
- Mevcut **yatırımcı sihirbazını "fon önerisi motoru"na** dönüştür (risk profili → fon eşleştirme).
- Karşılaştırma sayfasına **Sharpe / standart sapma / max drawdown** gibi metrikler ekle (platform benchmark'ı).

**Uzun vade / stratejik**

- **TR/EN** dil desteği (kurumsal/yabancı yatırımcı algısı).
- **Yatırımcı girişi / portal**.
- Canlı BIST panosunu koru ama "bağımsız portföy uzmanı" kimliğiyle çelişmemesi için fon performansı öne, piyasa panosu ikincil kalsın.

## Kaynaklar

- İş Portföy — Serbest Fonlar: https://www.isportfoy.com.tr/turlerine-gore/serbest-fonlar
- Ak Portföy — Ana sayfa & "Türkiye'nin en büyüğü": https://www.akportfoy.com.tr/
- İstanbul Portföy Yönetimi: https://www.istanbulportfoy.com/
- EKOTÜRK — Yatırım fonları pazarı 2026: https://www.ekoturk.com/haberler/turkiyede-yatirim-fonlari-pazari-2026nin-ilk-aylarinda-guclu-buyumesini-surdurdu/
- Fintables — Fon Karşılaştırma: https://fintables.com/fon-karsilastirma
- tefasfon.com: https://tefasfon.com/
