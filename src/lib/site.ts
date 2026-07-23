// Test Klon Portföy — merkezi site yapılandırması.
// Rapor §5 (URL yapısı) ve §6 (menü) ile birebir uyumlu. Header, Footer,
// MegaMenu, sitemap.ts ve arama indeksinin tek kaynağı.

export const site = {
  name: "Test Klon Portföy",
  legalName: "Test Klon Portföy Yönetimi A.Ş.",
  domain: "testklonportfoy.com",
  url: "https://testklonportfoy.com",
  description:
    "Test Klon Portföy Yönetimi A.Ş. — serbest fonlar, bireysel ve kurumsal portföy yönetimi ile alternatif yatırım çözümleri.",
  phone: "+90 212 000 00 00",
  email: "info@testklonportfoy.com",
  address: "Seba Office Boulevard, Sarıyer / İstanbul",
  hours: "Hafta içi 09:00 – 18:00",
  founded: 2011,
  social: {
    linkedin: "https://www.linkedin.com/company/testklonportfoy",
    x: "https://x.com/testklonportfoy",
    instagram: "https://instagram.com/testklonportfoy",
    facebook: "https://facebook.com/testklonportfoy",
  },
  regulators: [
    { label: "SPK", href: "https://www.spk.gov.tr" },
    { label: "BIST", href: "https://www.borsaistanbul.com" },
    { label: "MKK", href: "https://www.mkk.com.tr" },
  ],
} as const;

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[]; mega?: boolean };

// Ana (desktop) menü — rapor §6
export const mainNav: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
    children: [
      { label: "Kurumsal", href: "/hakkimizda/kurumsal", desc: "Test Klon Portföy'ü tanıyın" },
      { label: "Misyon & Vizyon", href: "/hakkimizda/misyon-vizyon", desc: "Değerlerimiz ve hedeflerimiz" },
      { label: "Ortaklık Yapısı", href: "/hakkimizda/ortaklik-yapisi", desc: "Sermaye ve pay yapısı" },
      { label: "Yönetim Kurulu", href: "/hakkimizda/yonetim-kurulu", desc: "Yönetim ekibimiz" },
      { label: "Uyum ve Etik Politikaları", href: "/hakkimizda/uyum-ve-etik", desc: "İç kontrol, uyum, etik ilkeler" },
      { label: "Kariyer", href: "/hakkimizda/kariyer", desc: "Ekibimize katılın" },
    ],
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Bireysel Portföy Yönetimi", href: "/hizmetler/bireysel-portfoy-yonetimi", desc: "Kişiye özel portföy stratejileri" },
      { label: "Kurumsal Portföy Yönetimi", href: "/hizmetler/kurumsal-portfoy-yonetimi", desc: "Şirket, vakıf ve emeklilik fonları" },
      { label: "Alternatif Yatırımlar", href: "/hizmetler/alternatif-yatirimlar", desc: "Serbest fon ve alternatif ürünler" },
    ],
  },
  // Fonlar — mega menü (bileşen özel olarak render eder)
  { label: "Fonlar", href: "/fonlar", mega: true },
  {
    label: "Bültenler & Analiz",
    href: "/bultenler",
    children: [
      { label: "Günlük / Haftalık / Aylık Bültenler", href: "/bultenler/gunluk-haftalik-aylik" },
      { label: "Fon Bültenleri", href: "/bultenler/fon-bultenleri" },
      { label: "Veri Takvimi", href: "/bultenler/veri-takvimi" },
      { label: "Ekonomi Köşesi", href: "/blog/ekonomi-kosesi" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Piyasa Analizleri", href: "/blog/piyasa-analizleri" },
      { label: "Ekonomi Köşesi", href: "/blog/ekonomi-kosesi" },
    ],
  },
  { label: "İletişim", href: "/iletisim" },
];

// Footer sütunları — rapor "Footer (Genişletilmiş)"
export const footerNav: { title: string; links: NavChild[] }[] = [
  {
    title: "Kurumsal",
    links: [
      { label: "Kurumsal", href: "/hakkimizda/kurumsal" },
      { label: "Yönetim Kurulu", href: "/hakkimizda/yonetim-kurulu" },
      { label: "Kariyer", href: "/hakkimizda/kariyer" },
      { label: "Uyum ve Etik", href: "/hakkimizda/uyum-ve-etik" },
      { label: "ESG / Sürdürülebilirlik", href: "/kurumsal/esg-surdurulebilirlik" },
      { label: "Duyurular", href: "/kurumsal/duyurular" },
      { label: "Basın Odası", href: "/kurumsal/basin-odasi" },
    ],
  },
  {
    title: "Hizmetler",
    links: [
      { label: "Bireysel Portföy Yönetimi", href: "/hizmetler/bireysel-portfoy-yonetimi" },
      { label: "Kurumsal Portföy Yönetimi", href: "/hizmetler/kurumsal-portfoy-yonetimi" },
      { label: "Alternatif Yatırımlar", href: "/hizmetler/alternatif-yatirimlar" },
      { label: "Yatırımcı Rehberi", href: "/yatirimci-rehberi" },
      { label: "Sık Sorulan Sorular", href: "/sss" },
    ],
  },
  {
    title: "Fonlar",
    links: [
      { label: "Anka Serbest Fon", href: "/fonlar/anka-serbest-fon" },
      { label: "Mavi Serbest Fon", href: "/fonlar/mavi-serbest-fon" },
      { label: "Parla Serbest Fon", href: "/fonlar/parla-serbest-fon" },
      { label: "Salur Hisse Senedi Fon", href: "/fonlar/salur-hisse-senedi-fon" },
      { label: "Fon Karşılaştırma", href: "/fonlar/karsilastir" },
      { label: "Performans Raporları", href: "/fonlar/performans-raporlari" },
    ],
  },
  {
    title: "Yasal Dokümanlar",
    links: [
      { label: "KVKK Politikası", href: "/yasal/kvkk-politikasi" },
      { label: "Çerez Politikası ve Yönetimi", href: "/yasal/cerez-politikasi" },
      { label: "Aydınlatma Metni", href: "/yasal/aydinlatma-metni" },
      { label: "Risk Bildirim Formu", href: "/yasal/risk-bildirim-formu" },
      { label: "Kullanım Koşulları", href: "/yasal/kullanim-kosullari" },
    ],
  },
  {
    title: "Keşfet",
    links: [
      { label: "İletişim", href: "/iletisim" },
      { label: "Site Haritası", href: "/site-haritasi" },
      { label: "Veri Takvimi", href: "/bultenler/veri-takvimi" },
      { label: "Piyasa Analizleri", href: "/blog/piyasa-analizleri" },
    ],
  },
];

// Breadcrumb ve rota başlıkları için slug → etiket eşlemesi
export const segmentLabels: Record<string, string> = {
  hakkimizda: "Hakkımızda",
  kurumsal: "Kurumsal",
  "misyon-vizyon": "Misyon & Vizyon",
  "ortaklik-yapisi": "Ortaklık Yapısı",
  "yonetim-kurulu": "Yönetim Kurulu",
  "uyum-ve-etik": "Uyum ve Etik Politikaları",
  kariyer: "Kariyer",
  hizmetler: "Hizmetler",
  "bireysel-portfoy-yonetimi": "Bireysel Portföy Yönetimi",
  "kurumsal-portfoy-yonetimi": "Kurumsal Portföy Yönetimi",
  "alternatif-yatirimlar": "Alternatif Yatırımlar",
  fonlar: "Fonlar",
  "anka-serbest-fon": "Anka Serbest Fon",
  "mavi-serbest-fon": "Mavi Serbest Fon",
  "parla-serbest-fon": "Parla Serbest Fon",
  "salur-hisse-senedi-fon": "Salur Hisse Senedi Fon",
  karsilastir: "Fon Karşılaştırma",
  "performans-raporlari": "Performans Raporları",
  bultenler: "Bültenler & Analiz",
  "gunluk-haftalik-aylik": "Günlük / Haftalık / Aylık Bültenler",
  "fon-bultenleri": "Fon Bültenleri",
  "veri-takvimi": "Veri Takvimi",
  blog: "Blog",
  "piyasa-analizleri": "Piyasa Analizleri",
  "ekonomi-kosesi": "Ekonomi Köşesi",
  "yatirimci-rehberi": "Yatırımcı Rehberi",
  sss: "Sık Sorulan Sorular",
  duyurular: "Duyurular",
  "basin-odasi": "Basın Odası",
  "esg-surdurulebilirlik": "ESG / Sürdürülebilirlik",
  iletisim: "İletişim",
  yasal: "Yasal",
  "kvkk-politikasi": "KVKK Politikası",
  "cerez-politikasi": "Çerez Politikası ve Yönetimi",
  "kullanim-kosullari": "Kullanım Koşulları",
  "aydinlatma-metni": "Aydınlatma Metni",
  "risk-bildirim-formu": "Risk Bildirim Formu",
  arama: "Arama",
  "site-haritasi": "Site Haritası",
  "yatirimci-ol": "Yatırımcı Ol",
};

// sitemap.ts ve /site-haritasi için tüm statik rotalar
export const allRoutes: string[] = [
  "/",
  "/hakkimizda",
  "/hakkimizda/kurumsal",
  "/hakkimizda/misyon-vizyon",
  "/hakkimizda/ortaklik-yapisi",
  "/hakkimizda/yonetim-kurulu",
  "/hakkimizda/uyum-ve-etik",
  "/hakkimizda/kariyer",
  "/hizmetler",
  "/hizmetler/bireysel-portfoy-yonetimi",
  "/hizmetler/kurumsal-portfoy-yonetimi",
  "/hizmetler/alternatif-yatirimlar",
  "/fonlar",
  "/fonlar/anka-serbest-fon",
  "/fonlar/mavi-serbest-fon",
  "/fonlar/parla-serbest-fon",
  "/fonlar/salur-hisse-senedi-fon",
  "/fonlar/karsilastir",
  "/fonlar/performans-raporlari",
  "/bultenler",
  "/bultenler/gunluk-haftalik-aylik",
  "/bultenler/fon-bultenleri",
  "/bultenler/veri-takvimi",
  "/blog",
  "/blog/piyasa-analizleri",
  "/blog/ekonomi-kosesi",
  "/yatirimci-rehberi",
  "/sss",
  "/kurumsal/duyurular",
  "/kurumsal/basin-odasi",
  "/kurumsal/esg-surdurulebilirlik",
  "/iletisim",
  "/yatirimci-ol",
  "/yasal/kvkk-politikasi",
  "/yasal/cerez-politikasi",
  "/yasal/kullanim-kosullari",
  "/yasal/aydinlatma-metni",
  "/yasal/risk-bildirim-formu",
  "/arama",
  "/site-haritasi",
];
