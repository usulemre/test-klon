import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "ESG / Sürdürülebilirlik",
  description: "Test Klon Portföy'ün çevresel, sosyal ve yönetişim (ESG) yaklaşımı ve sürdürülebilir yatırım politikası.",
  alternates: { canonical: "/kurumsal/esg-surdurulebilirlik" },
};

export default function Page() {
  return (
    <ContentPage
      title="ESG / Sürdürülebilirlik"
      desc="Sorumlu yatırım yaklaşımımız."
      pathname="/kurumsal/esg-surdurulebilirlik"
      intro="Çevresel, sosyal ve yönetişim (ESG) faktörlerini yatırım süreçlerimizin ayrılmaz bir parçası olarak görüyor; uzun vadeli değer yaratımını sürdürülebilirlik ilkeleriyle birlikte ele alıyoruz."
      cta={{ label: "Sürdürülebilirlik Ekibine Ulaşın", href: "/iletisim" }}
      sections={[
        {
          heading: "Çevresel (E)",
          body: <p>Karbon ayak izi yüksek sektörlere yönelik ihtiyatlı yaklaşım ve çevresel risklerin yatırım analizine entegrasyonu.</p>,
        },
        {
          heading: "Sosyal (S)",
          body: <p>İnsan hakları, çalışan hakları ve toplumsal etki gözetilerek yapılan yatırım değerlendirmeleri.</p>,
        },
        {
          heading: "Yönetişim (G)",
          body: <p>Şeffaf kurumsal yönetim, hissedar hakları ve etik iş uygulamalarına öncelik.</p>,
        },
        {
          heading: "Sürdürülebilirlik Raporlaması",
          body: <p>2026 itibarıyla düzenleyici beklentilere uygun olarak periyodik ESG raporlaması yayımlamayı hedefliyoruz.</p>,
        },
      ]}
    />
  );
}
