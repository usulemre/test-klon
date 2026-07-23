import type { ContentSection } from "@/components/ui/ContentPage";

export type LegalDoc = {
  slug: string;
  title: string;
  desc: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

// Yasal doküman içerikleri — temsili metinler.
export const legalDocs: Record<string, LegalDoc> = {
  "kvkk-politikasi": {
    slug: "kvkk-politikasi",
    title: "KVKK Politikası",
    desc: "Kişisel Verilerin Korunması Politikası",
    intro: "Test Klon Portföy Yönetimi A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin güvenliğine önem veriyoruz.",
    sections: [
      { heading: "Veri Sorumlusu", body: "Kişisel verileriniz, veri sorumlusu sıfatıyla Test Klon Portföy Yönetimi A.Ş. tarafından işlenmektedir." },
      { heading: "İşlenen Veriler ve Amaçlar", body: "Kimlik, iletişim ve finansal verileriniz; hizmet sunumu, mevzuata uyum ve iletişim amaçlarıyla işlenir." },
      { heading: "Haklarınız", body: "KVKK'nın 11. maddesi kapsamında verilerinize erişim, düzeltme, silme ve işlemeye itiraz haklarına sahipsiniz." },
    ],
  },
  "cerez-politikasi": {
    slug: "cerez-politikasi",
    title: "Çerez Politikası ve Yönetimi",
    desc: "Web sitemizde kullanılan çerezler hakkında",
    intro: "Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.",
    sections: [
      { heading: "Çerez Nedir?", body: "Çerezler, ziyaret ettiğiniz web sitesi tarafından cihazınıza kaydedilen küçük metin dosyalarıdır." },
      { heading: "Kullandığımız Çerezler", body: "Zorunlu, performans ve tercih çerezleri kullanılmaktadır. Zorunlu çerezler sitenin çalışması için gereklidir." },
      { heading: "Çerez Yönetimi", body: "Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz. Bazı çerezlerin devre dışı bırakılması site işlevselliğini etkileyebilir." },
    ],
  },
  "kullanim-kosullari": {
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları",
    desc: "Web sitesi kullanım şartları",
    intro: "Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.",
    sections: [
      { heading: "Genel", body: "Site içeriği yalnızca bilgilendirme amaçlıdır ve yatırım danışmanlığı teşkil etmez." },
      { heading: "Fikri Mülkiyet", body: "Sitedeki tüm içerik, marka ve görseller Test Klon Portföy'e aittir ve izinsiz kullanılamaz." },
      { heading: "Sorumluluğun Sınırlandırılması", body: "Sitede yer alan bilgilerin güncelliği ve doğruluğu için azami özen gösterilse de, yatırım kararlarının sorumluluğu yatırımcıya aittir." },
    ],
  },
  "aydinlatma-metni": {
    slug: "aydinlatma-metni",
    title: "Aydınlatma Metni",
    desc: "KVKK Aydınlatma Metni",
    intro: "6698 sayılı Kanun'un 10. maddesi kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metnidir.",
    sections: [
      { heading: "Amaç", body: "Kişisel verilerinizin hangi amaçlarla işlendiği konusunda sizi bilgilendirmektir." },
      { heading: "Aktarım", body: "Verileriniz yalnızca yasal yükümlülükler ve hizmet gereklilikleri çerçevesinde yetkili kurum ve kuruluşlara aktarılabilir." },
      { heading: "İletişim", body: "Talepleriniz için kvkk@testklonportfoy.com adresinden bize ulaşabilirsiniz." },
    ],
  },
  "risk-bildirim-formu": {
    slug: "risk-bildirim-formu",
    title: "Risk Bildirim Formu",
    desc: "Genel yatırım riski bildirimi",
    intro: "Sermaye piyasası araçlarına yapılan yatırımlar risk içerir. Bu form, genel yatırım risklerine ilişkin bilgilendirme amaçlıdır.",
    sections: [
      { heading: "Piyasa Riski", body: "Yatırım araçlarının değeri piyasa koşullarına bağlı olarak artabilir veya azalabilir; anaparanın tamamı riske girebilir." },
      { heading: "Likidite Riski", body: "Bazı yatırım araçları istenen zamanda ve fiyatta nakde çevrilemeyebilir." },
      { heading: "Geçmiş Performans", body: "Geçmiş dönem getirileri gelecek dönem getirileri için garanti teşkil etmez." },
    ],
  },
};

export const legalSlugs = Object.keys(legalDocs);

export function toContentSections(doc: LegalDoc): ContentSection[] {
  return doc.sections.map((s) => ({ heading: s.heading, body: <p>{s.body}</p> }));
}
