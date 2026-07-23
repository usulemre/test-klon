import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { funds } from "@/lib/funds/funds";

export const metadata: Metadata = {
  title: "Fon Bültenleri",
  description: "Her Test Klon Portföy fonunun aylık performans ve strateji bültenleri.",
  alternates: { canonical: "/bultenler/fon-bultenleri" },
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Fon Bültenleri"
        desc="Fonlarımızın aylık strateji ve performans notları."
        breadcrumb={[{ label: "Bültenler & Analiz", href: "/bultenler" }, { label: "Fon Bültenleri" }]}
      />
      <Section className="py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {funds.map((f) => (
            <div key={f.slug} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="text-xs font-bold" style={{ color: f.color }}>{f.code}</span>
              <h3 className="mt-1 text-lg font-bold text-navy-900">{f.shortName}</h3>
              <p className="mt-1 text-sm text-navy-500">Temmuz 2026 Bülteni</p>
              <div className="mt-4 flex gap-2">
                <a href={`/fonlar/${f.slug}`} className="rounded-full bg-navy-50 px-4 py-2 text-xs font-semibold text-navy-900 hover:bg-navy-100">Fon Sayfası</a>
                <button className="rounded-full border border-navy-200 px-4 py-2 text-xs font-semibold text-navy-700 hover:border-navy-900">Bülteni İndir ↓</button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
