import type { Metadata } from "next";
import { PageHero, Section, CTA, SectionHeading } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Yatırımcı Rehberi",
  description: "İlk kez yatırım yapacaklar için adım adım rehber: fon nedir, nasıl başlanır, hangi kanaldan işlem yapılır.",
  alternates: { canonical: "/yatirimci-rehberi" },
};

const steps = [
  { n: 1, title: "Hedefinizi belirleyin", desc: "Yatırım vadenizi ve beklentinizi netleştirin: sermaye koruma mı, büyüme mi?" },
  { n: 2, title: "Risk profilinizi tanıyın", desc: "Oynaklığa toleransınızı değerlendirin. Risk değeri 1-7 arasında ölçülür." },
  { n: 3, title: "Fonları karşılaştırın", desc: "Karşılaştırma aracıyla risk, getiri ve maliyetleri yan yana inceleyin." },
  { n: 4, title: "Nitelikli yatırımcı statüsü", desc: "Serbest fonlar için gerekli statüyü ve dokümanları hazırlayın." },
  { n: 5, title: "İşlem kanalını seçin", desc: "Aracı kurumunuz veya bankanız üzerinden fon koduyla işlem yapın." },
  { n: 6, title: "Takip edin", desc: "Performans raporları ve bültenlerle portföyünüzü düzenli izleyin." },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Yatırımcı Rehberi"
        desc="İlk kez yatırım yapacaklar için adım adım yol haritası."
        pathname="/yatirimci-rehberi"
      >
        <div className="mt-5">
          <CTA href="/yatirimci-ol" variant="gold">Profilimi Oluştur</CTA>
        </div>
      </PageHero>

      <Section className="py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-bold text-navy-950">{s.n}</div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm text-navy-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading title="Sık kullanılan kaynaklar" desc="Yatırım kararınızı desteklemek için." />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Fon Karşılaştırma", href: "/fonlar/karsilastir", desc: "Fonları yan yana kıyaslayın." },
              { title: "Sık Sorulan Sorular", href: "/sss", desc: "Vergi, minimum tutar ve daha fazlası." },
              { title: "Performans Raporları", href: "/fonlar/performans-raporlari", desc: "Toplu getiri tablosu." },
            ].map((c) => (
              <a key={c.href} href={c.href} className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-shadow hover:shadow-lg">
                <h4 className="font-bold text-navy-900 group-hover:text-gold-600">{c.title}</h4>
                <p className="mt-1 text-sm text-navy-600">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
