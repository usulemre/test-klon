import type { Metadata } from "next";
import { ContentPage } from "@/components/ui/ContentPage";

export const metadata: Metadata = {
  title: "Misyon & Vizyon",
  description: "Test Klon Portföy'ün misyonu, vizyonu ve temel değerleri.",
  alternates: { canonical: "/hakkimizda/misyon-vizyon" },
};

export default function Page() {
  return (
    <ContentPage
      title="Misyon & Vizyon"
      desc="Bizi yönlendiren değerler."
      pathname="/hakkimizda/misyon-vizyon"
      sections={[
        {
          heading: "Misyonumuz",
          body: <p>Yatırımcılarımızın birikimlerini disiplinli, şeffaf ve risk odaklı bir yaklaşımla yöneterek uzun vadede sürdürülebilir değer yaratmak.</p>,
        },
        {
          heading: "Vizyonumuz",
          body: <p>Türkiye portföy yönetimi sektöründe güven, performans ve kurumsal itibarıyla öne çıkan, alternatif yatırım çözümlerinde referans gösterilen bir kurum olmak.</p>,
        },
        {
          heading: "Değerlerimiz",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Şeffaflık:</strong> Her adımda açık ve anlaşılır bilgilendirme.</li>
              <li><strong>Disiplin:</strong> Kurallı ve tekrarlanabilir yatırım süreçleri.</li>
              <li><strong>Yatırımcı önceliği:</strong> Çıkar çatışmalarını önleyen etik yaklaşım.</li>
              <li><strong>Sorumluluk:</strong> ESG ilkelerini gözeten sürdürülebilir yatırım.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
