import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "Bireysel Portföy Yönetimi",
  description: "Kişisel hedeflerinize göre tasarlanan, aktif yönetilen bireysel portföy yönetimi hizmeti.",
  alternates: { canonical: "/hizmetler/bireysel-portfoy-yonetimi" },
};

export default function Page() {
  return (
    <ContentPage
      title="Bireysel Portföy Yönetimi"
      desc="Birikimlerinizi kişisel hedeflerinize göre profesyonelce yönetiyoruz."
      pathname="/hizmetler/bireysel-portfoy-yonetimi"
      intro="Risk profilinize, yatırım vadenize ve hedeflerinize göre kişiye özel bir portföy stratejisi oluşturur; aktif yönetim ve düzenli raporlama ile sürecin her adımında yanınızda oluruz."
      cta={{ label: "Yatırımcı Ol", href: "/yatirimci-ol" }}
      sections={[
        {
          heading: "Nasıl Çalışır?",
          body: (
            <ol className="list-decimal space-y-1 pl-5">
              <li>Risk profili ve hedef analizi</li>
              <li>Kişiye özel portföy stratejisinin oluşturulması</li>
              <li>Aktif yönetim ve dinamik varlık dağılımı</li>
              <li>Düzenli performans raporlaması ve gözden geçirme</li>
            </ol>
          ),
        },
        {
          heading: "Kimler İçin Uygun?",
          body: <p>Birikimlerini profesyonel bir ekiple, kişiselleştirilmiş bir strateji çerçevesinde değerlendirmek isteyen nitelikli bireysel yatırımcılar için tasarlanmıştır.</p>,
        },
        {
          heading: "Avantajlar",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Kişiye özel varlık dağılımı</li>
              <li>Aktif risk yönetimi</li>
              <li>Şeffaf ve düzenli raporlama</li>
              <li>Uzman portföy yöneticisi desteği</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
