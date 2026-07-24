import type { Metadata } from "next";
import { PageHero, Section, CTA } from "@/components/ui/primitives";
import { FundCardGrid } from "@/components/market/MarketGrid";
import { funds } from "@/lib/funds/funds";

export const metadata: Metadata = {
  title: "Fonlar",
  description: "Test Klon Portföy serbest ve hisse senedi fonları — günlük pay fiyatları, performans ve dokümanlar.",
  alternates: { canonical: "/fonlar" },
};

export default function FonlarPage() {
  return (
    <>
      <PageHero
        title="Fonlarımız"
        desc="Serbest ve hisse senedi fonlarımızın her iş günü açıklanan pay fiyatlarını, performansını ve dokümanlarını tek yerden inceleyin."
        pathname="/fonlar"
      >
        <div className="mt-5 flex flex-wrap gap-3">
          <CTA href="/fonlar/karsilastir" variant="primary">Fonları Karşılaştır</CTA>
          <CTA href="/fonlar/performans-raporlari" variant="outline">Toplu Performans Raporları</CTA>
        </div>
      </PageHero>

      <Section className="py-12">
        <FundCardGrid />

        <div className="mt-12 overflow-hidden rounded-2xl border border-navy-100">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-navy-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">Fon</th>
                <th className="px-4 py-3 font-semibold">Kod</th>
                <th className="px-4 py-3 font-semibold">Tür</th>
                <th className="px-4 py-3 font-semibold">Risk</th>
                <th className="px-4 py-3 font-semibold">YBB</th>
                <th className="px-4 py-3 font-semibold">1 Yıl</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((f, i) => (
                <tr key={f.slug} className={i % 2 ? "bg-navy-50/40" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-navy-900">
                    <a href={`/fonlar/${f.slug}`} className="hover:text-gold-600">{f.shortName}</a>
                  </td>
                  <td className="px-4 py-3 text-navy-600">{f.code}</td>
                  <td className="px-4 py-3 text-navy-600">{f.type}</td>
                  <td className="px-4 py-3 text-navy-600">{f.riskLevel}/7</td>
                  <td className="px-4 py-3 font-semibold text-market-up">+%{f.returns.find((r) => r.period === "YBB")?.value}</td>
                  <td className="px-4 py-3 font-semibold text-market-up">+%{f.returns.find((r) => r.period === "1 Yıl")?.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-navy-400">
          Fon pay fiyatları her iş günü, bir önceki günün sonuçlarına göre belirlenir; anlık/canlı değildir.
          Buradaki değerler bu demoda simüle edilmiştir. Geçmiş performans gelecek getiri için garanti teşkil etmez.
          Fonlar yalnızca nitelikli yatırımcılara yöneliktir.
        </p>
      </Section>
    </>
  );
}
