import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/ui/primitives";
import { funds } from "@/lib/funds/funds";

export const metadata: Metadata = {
  title: "Toplu Performans Raporları",
  description: "Tüm Test Klon Portföy fonlarının dönemsel getirilerini tek tabloda karşılaştırın.",
  alternates: { canonical: "/fonlar/performans-raporlari" },
};

const periods = ["1 Ay", "3 Ay", "YBB", "1 Yıl", "3 Yıl"];

export default function PerformansRaporlariPage() {
  return (
    <>
      <PageHero
        title="Toplu Performans Raporları"
        desc="Şirket geneli fon performanslarını dönem bazında karşılaştırın. (Rapor önerisi: üst düzey toplu performans sayfası.)"
        breadcrumb={[{ label: "Fonlar", href: "/fonlar" }, { label: "Performans Raporları" }]}
      />
      <Section className="py-12">
        <div className="overflow-x-auto rounded-2xl border border-navy-100">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="bg-navy-900 text-left text-white">
                <th className="px-4 py-3 font-semibold">Fon</th>
                {periods.map((p) => (
                  <th key={p} className="px-4 py-3 text-right font-semibold">{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {funds.map((f, i) => (
                <tr key={f.slug} className={i % 2 ? "bg-navy-50/40" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-navy-900">
                    <a href={`/fonlar/${f.slug}`} className="hover:text-gold-600">{f.shortName}</a>
                  </td>
                  {periods.map((p) => {
                    const v = f.returns.find((r) => r.period === p)?.value ?? 0;
                    return (
                      <td key={p} className="px-4 py-3 text-right font-semibold text-market-up tabular-nums">
                        +%{v.toLocaleString("tr-TR")}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12">
          <SectionHeading title="Aylık Fon Bültenleri" desc="Her fonun aylık strateji ve performans notları." />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {funds.map((f) => (
              <div key={f.slug} className="flex items-center justify-between rounded-xl border border-navy-100 bg-white px-5 py-4">
                <div>
                  <p className="font-medium text-navy-900">{f.shortName}</p>
                  <p className="text-xs text-navy-400">Temmuz 2026 Bülteni · PDF</p>
                </div>
                <button className="rounded-full border border-navy-200 px-4 py-1.5 text-xs font-semibold text-navy-700 hover:border-navy-900">İndir ↓</button>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-navy-400">
          Getiri rakamları örnek/simülasyondur. Yatırım kararı öncesi fon izahnamesini inceleyiniz.
        </p>
      </Section>
    </>
  );
}
