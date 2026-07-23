// Site içi arama indeksi — /arama sayfası ve header arama kutusu bunu kullanır.
// Rapor "Site içi arama sonuçları filtrelenebilir olmalı (fon adı, doküman türü, tarih)".

import { funds } from "./funds/funds";

export type SearchDocType = "Sayfa" | "Fon" | "Doküman" | "Blog" | "SSS";

export type SearchEntry = {
  title: string;
  href: string;
  type: SearchDocType;
  description: string;
  keywords?: string;
  date?: string;
};

const pages: SearchEntry[] = [
  { title: "Ana Sayfa", href: "/", type: "Sayfa", description: "Vega Portföy kurumsal ana sayfa" },
  { title: "Hakkımızda", href: "/hakkimizda", type: "Sayfa", description: "Vega Portföy hakkında" },
  { title: "Kurumsal", href: "/hakkimizda/kurumsal", type: "Sayfa", description: "Kurumsal bilgiler" },
  { title: "Misyon & Vizyon", href: "/hakkimizda/misyon-vizyon", type: "Sayfa", description: "Değerlerimiz ve hedeflerimiz" },
  { title: "Ortaklık Yapısı", href: "/hakkimizda/ortaklik-yapisi", type: "Sayfa", description: "Sermaye ve pay yapısı" },
  { title: "Yönetim Kurulu", href: "/hakkimizda/yonetim-kurulu", type: "Sayfa", description: "Yönetim ekibimiz" },
  { title: "Uyum ve Etik Politikaları", href: "/hakkimizda/uyum-ve-etik", type: "Sayfa", description: "İç kontrol, uyum ve etik" },
  { title: "Kariyer", href: "/hakkimizda/kariyer", type: "Sayfa", description: "Açık pozisyonlar ve başvuru" },
  { title: "Hizmetler", href: "/hizmetler", type: "Sayfa", description: "Portföy yönetim hizmetleri" },
  { title: "Bireysel Portföy Yönetimi", href: "/hizmetler/bireysel-portfoy-yonetimi", type: "Sayfa", description: "Kişiye özel portföy yönetimi" },
  { title: "Kurumsal Portföy Yönetimi", href: "/hizmetler/kurumsal-portfoy-yonetimi", type: "Sayfa", description: "Şirket, vakıf ve emeklilik fonları" },
  { title: "Alternatif Yatırımlar", href: "/hizmetler/alternatif-yatirimlar", type: "Sayfa", description: "Serbest fon ve alternatif ürünler" },
  { title: "Fonlar", href: "/fonlar", type: "Sayfa", description: "Tüm fonlar ve canlı fiyatlar" },
  { title: "Fon Karşılaştırma", href: "/fonlar/karsilastir", type: "Sayfa", description: "Fonları yan yana karşılaştırın" },
  { title: "Performans Raporları", href: "/fonlar/performans-raporlari", type: "Sayfa", description: "Tüm fonların toplu performansı" },
  { title: "Bültenler & Analiz", href: "/bultenler", type: "Sayfa", description: "Günlük, haftalık, aylık bültenler" },
  { title: "Veri Takvimi", href: "/bultenler/veri-takvimi", type: "Sayfa", description: "Ekonomik veri takvimi" },
  { title: "Yatırımcı Rehberi", href: "/yatirimci-rehberi", type: "Sayfa", description: "Nasıl yatırım yaparım?" },
  { title: "Sık Sorulan Sorular", href: "/sss", type: "SSS", description: "Fon alım/satım, vergi, minimum tutar" },
  { title: "ESG / Sürdürülebilirlik", href: "/kurumsal/esg-surdurulebilirlik", type: "Sayfa", description: "Sürdürülebilirlik yaklaşımımız" },
  { title: "Basın Odası", href: "/kurumsal/basin-odasi", type: "Sayfa", description: "Kurumsal haberler ve medya kiti" },
  { title: "Duyurular", href: "/kurumsal/duyurular", type: "Sayfa", description: "Şirket ve fon duyuruları" },
  { title: "İletişim", href: "/iletisim", type: "Sayfa", description: "Bize ulaşın" },
  { title: "Yatırımcı Ol", href: "/yatirimci-ol", type: "Sayfa", description: "Başvuru sihirbazı" },
];

const blog: SearchEntry[] = [
  { title: "Piyasa Analizleri", href: "/blog/piyasa-analizleri", type: "Blog", description: "Haftalık piyasa değerlendirmeleri", date: "22.07.2026" },
  { title: "Ekonomi Köşesi", href: "/blog/ekonomi-kosesi", type: "Blog", description: "Makroekonomik yorumlar", date: "21.07.2026" },
];

const fundEntries: SearchEntry[] = funds.flatMap((f) => [
  {
    title: f.name,
    href: `/fonlar/${f.slug}`,
    type: "Fon" as const,
    description: f.summary,
    keywords: `${f.code} ${f.type} ${f.strategy}`,
  },
  ...Object.values(f.docs)
    .flat()
    .map((d) => ({
      title: `${f.shortName} — ${d.label}`,
      href: `/fonlar/${f.slug}`,
      type: "Doküman" as const,
      description: `${d.type} · ${f.shortName}`,
      date: d.date,
    })),
]);

export const searchIndex: SearchEntry[] = [...pages, ...blog, ...fundEntries];

export const searchTypes: SearchDocType[] = ["Sayfa", "Fon", "Doküman", "Blog", "SSS"];

export function searchSite(query: string, type?: SearchDocType | "Tümü"): SearchEntry[] {
  const q = query.trim().toLocaleLowerCase("tr");
  let results = searchIndex;
  if (type && type !== "Tümü") results = results.filter((e) => e.type === type);
  if (!q) return type && type !== "Tümü" ? results : [];
  return results.filter((e) =>
    [e.title, e.description, e.keywords, e.type]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("tr")
      .includes(q),
  );
}
