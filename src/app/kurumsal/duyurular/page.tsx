import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { funds } from "@/lib/funds/funds";

export const metadata: Metadata = {
  title: "Duyurular",
  description: "Vega Portföy şirket ve fon duyuruları — merkezi duyuru merkezi.",
  alternates: { canonical: "/kurumsal/duyurular" },
};

const corporate = [
  { date: "20.07.2026", title: "Vega Portföy 2025 yıllık faaliyet raporu yayımlandı", tag: "Kurumsal" },
  { date: "10.07.2026", title: "Yeni yatırımcı portalı hakkında bilgilendirme", tag: "Kurumsal" },
];

export default function Page() {
  // Merkezi "Duyurular & Bildirimler" hub'ı (rapor §7 önerisi): kurumsal + fon duyuruları
  const all = [
    ...corporate,
    ...funds.flatMap((f) => f.duyurular.map((d) => ({ ...d, tag: f.shortName }))),
  ].sort((a, b) => b.date.split(".").reverse().join().localeCompare(a.date.split(".").reverse().join()));

  return (
    <>
      <PageHero
        title="Duyurular"
        desc="Şirket ve fon duyurularını tek merkezden takip edin."
        breadcrumb={[{ label: "Kurumsal" }, { label: "Duyurular" }]}
      />
      <Section className="py-12">
        <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100">
          {all.map((d, i) => (
            <div key={i} className="flex flex-wrap items-center gap-3 px-5 py-4 hover:bg-navy-50">
              <span className="text-xs font-medium text-navy-400 tabular-nums">{d.date}</span>
              <span className="rounded-full bg-navy-100 px-2.5 py-1 text-[11px] font-semibold text-navy-700">{d.tag}</span>
              <span className="text-sm text-navy-800">{d.title}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
