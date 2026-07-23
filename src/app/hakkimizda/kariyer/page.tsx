import type { Metadata } from "next";
import { PageHero, Section, CTA } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Kariyer",
  description: "Test Klon Portföy'de açık pozisyonlar ve kariyer fırsatları.",
  alternates: { canonical: "/hakkimizda/kariyer" },
};

const positions = [
  { title: "Portföy Yöneticisi", dept: "Yatırım", type: "Tam zamanlı", loc: "İstanbul" },
  { title: "Kıdemli Analist — Hisse Senedi", dept: "Araştırma", type: "Tam zamanlı", loc: "İstanbul" },
  { title: "Uyum Uzmanı", dept: "Uyum & Risk", type: "Tam zamanlı", loc: "İstanbul" },
  { title: "Frontend Geliştirici", dept: "Teknoloji", type: "Hibrit", loc: "İstanbul" },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Kariyer"
        desc="Nitelikli ekibimize katılın; sektörün geleceğini birlikte şekillendirelim."
        breadcrumb={[{ label: "Hakkımızda", href: "/hakkimizda" }, { label: "Kariyer" }]}
      />
      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-5 text-xl font-bold text-navy-900">Açık Pozisyonlar</h2>
            <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100">
              {positions.map((p) => (
                <div key={p.title} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-navy-50">
                  <div>
                    <p className="font-semibold text-navy-900">{p.title}</p>
                    <p className="text-xs text-navy-500">{p.dept} · {p.type} · {p.loc}</p>
                  </div>
                  <CTA href="/iletisim" variant="outline" className="!px-4 !py-2 text-xs">Başvur</CTA>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl bg-navy-900 p-6 text-white">
            <h3 className="text-lg font-bold">Neden Test Klon Portföy?</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy-100">
              <li className="flex gap-2"><span className="text-gold-400">✓</span> Uzman ekiple çalışma</li>
              <li className="flex gap-2"><span className="text-gold-400">✓</span> Sürekli gelişim ve eğitim</li>
              <li className="flex gap-2"><span className="text-gold-400">✓</span> Rekabetçi yan haklar</li>
              <li className="flex gap-2"><span className="text-gold-400">✓</span> Hibrit çalışma imkânı</li>
            </ul>
            <p className="mt-4 text-xs text-navy-300">Uygun pozisyon bulamadınız mı? CV&apos;nizi kariyer@testklonportfoy.com adresine iletin.</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
