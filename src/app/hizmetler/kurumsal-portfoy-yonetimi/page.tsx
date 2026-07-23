import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "Kurumsal Portföy Yönetimi",
  description: "Şirketler, vakıflar ve emeklilik fonları için kurumsal portföy yönetimi çözümleri.",
  alternates: { canonical: "/hizmetler/kurumsal-portfoy-yonetimi" },
};

export default function Page() {
  return (
    <ContentPage
      title="Kurumsal Portföy Yönetimi"
      desc="Şirket, vakıf ve emeklilik fonları için kurumsal çözümler."
      pathname="/hizmetler/kurumsal-portfoy-yonetimi"
      intro="Kurumsal yatırımcıların nakit, rezerv ve uzun vadeli fonlarını; kurumun yükümlülük yapısına, likidite ihtiyacına ve risk politikalarına uygun biçimde yönetiyoruz."
      cta={{ label: "Kurumsal Görüşme Talep Et", href: "/iletisim" }}
      sections={[
        {
          heading: "Kimlere Hizmet Veriyoruz?",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Şirketler ve holdingler (kurumsal nakit/rezerv yönetimi)</li>
              <li>Vakıf ve dernekler</li>
              <li>Emeklilik ve yardım sandıkları</li>
              <li>Aile ofisleri</li>
            </ul>
          ),
        },
        {
          heading: "Yaklaşımımız",
          body: <p>Kurumunuzun yatırım politikası beyanı (IPS) doğrultusunda özelleştirilmiş mandalar oluşturur; likidite, getiri ve risk hedeflerini dengeleyen çözümler sunarız.</p>,
        },
        {
          heading: "Raporlama ve Şeffaflık",
          body: <p>Kuruma özel periyodik raporlama, bağımsız denetim ve mevzuata tam uyum ile süreç boyunca şeffaflık sağlanır.</p>,
        },
      ]}
    />
  );
}
