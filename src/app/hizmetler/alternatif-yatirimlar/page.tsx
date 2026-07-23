import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "Alternatif Yatırımlar",
  description: "Serbest fonlar ve alternatif enstrümanlarla çeşitlendirilmiş getiri stratejileri.",
  alternates: { canonical: "/hizmetler/alternatif-yatirimlar" },
};

export default function Page() {
  return (
    <ContentPage
      title="Alternatif Yatırımlar"
      desc="Geleneksel varlık sınıflarının ötesinde çeşitlendirme."
      pathname="/hizmetler/alternatif-yatirimlar"
      intro="Serbest (hedge) fonlar ve alternatif enstrümanlar aracılığıyla, geleneksel hisse/tahvil portföylerine düşük korelasyonlu getiri kaynakları ekleyerek portföy çeşitlendirmesi sağlıyoruz."
      cta={{ label: "Fonlarımızı İnceleyin", href: "/fonlar" }}
      sections={[
        {
          heading: "Serbest Fonlar",
          body: <p>Nitelikli yatırımcılara yönelik serbest fonlarımız, esnek yatırım stratejileriyle farklı piyasa koşullarında getiri fırsatlarını değerlendirir.</p>,
        },
        {
          heading: "Çeşitlendirme Avantajı",
          body: <p>Alternatif yatırımlar, portföyün genel oynaklığını azaltmaya ve risk-getiri profilini iyileştirmeye katkı sağlayabilir.</p>,
        },
        {
          heading: "Fonlarımız",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>Anka Serbest Fon — çok varlıklı, dengeli</li>
              <li>Mavi Serbest Fon — sabit getirili ağırlıklı</li>
              <li>Parla Serbest Fon — büyüme odaklı</li>
              <li>Salur Hisse Senedi Fon — hisse yoğun</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
