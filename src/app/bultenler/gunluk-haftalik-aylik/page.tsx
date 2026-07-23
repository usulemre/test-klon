import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Günlük / Haftalık / Aylık Bültenler",
  description: "Vega Portföy piyasa bültenleri — günlük, haftalık ve aylık değerlendirmeler.",
  alternates: { canonical: "/bultenler/gunluk-haftalik-aylik" },
};

const bultenler = [
  { period: "Günlük", title: "Günlük Piyasa Bülteni — 23 Temmuz 2026", date: "23.07.2026" },
  { period: "Günlük", title: "Günlük Piyasa Bülteni — 22 Temmuz 2026", date: "22.07.2026" },
  { period: "Haftalık", title: "Haftalık Strateji — 21-25 Temmuz 2026", date: "21.07.2026" },
  { period: "Aylık", title: "Aylık Görünüm — Temmuz 2026", date: "01.07.2026" },
  { period: "Aylık", title: "Aylık Görünüm — Haziran 2026", date: "01.06.2026" },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Günlük / Haftalık / Aylık Bültenler"
        desc="Piyasa gelişmelerini düzenli olarak takip edin."
        breadcrumb={[{ label: "Bültenler & Analiz", href: "/bultenler" }, { label: "Bültenler" }]}
      />
      <Section className="py-12">
        <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100">
          {bultenler.map((b, i) => (
            <div key={i} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 hover:bg-navy-50">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-navy-100 px-2.5 py-1 text-[11px] font-semibold text-navy-700">{b.period}</span>
                <div>
                  <p className="font-medium text-navy-900">{b.title}</p>
                  <p className="text-xs text-navy-400">{b.date}</p>
                </div>
              </div>
              <button className="rounded-full border border-navy-200 px-4 py-1.5 text-xs font-semibold text-navy-700 hover:border-navy-900">Oku / İndir</button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
