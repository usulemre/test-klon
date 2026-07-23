import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { funds, getFund, fundSlugs } from "@/lib/funds/funds";
import { PageHero, Section, CTA } from "@/components/ui/primitives";
import { FundDetail } from "@/components/funds/FundDetail";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return fundSlugs.map((fon) => ({ fon }));
}

export async function generateMetadata({ params }: { params: Promise<{ fon: string }> }): Promise<Metadata> {
  const { fon } = await params;
  const fund = getFund(fon);
  if (!fund) return { title: "Fon Bulunamadı" };
  return {
    title: fund.name,
    description: fund.summary,
    alternates: { canonical: `/fonlar/${fund.slug}` },
  };
}

export default async function FonDetayPage({ params }: { params: Promise<{ fon: string }> }) {
  const { fon } = await params;
  const fund = getFund(fon);
  if (!fund) notFound();

  const others = funds.filter((f) => f.slug !== fund.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InvestmentFund",
    name: fund.name,
    description: fund.summary,
    provider: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title={fund.name}
        desc={fund.summary}
        breadcrumb={[
          { label: "Fonlar", href: "/fonlar" },
          { label: fund.shortName },
        ]}
      >
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <CTA href="/yatirimci-ol" variant="gold">Yatırıma Başla</CTA>
          <button className="rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800 hover:border-navy-900">
            Fon İzahnamesini İndir ↓
          </button>
          <span className="rounded-full bg-navy-100 px-3 py-1 text-xs font-medium text-navy-700">{fund.type}</span>
          <span className="rounded-full bg-navy-100 px-3 py-1 text-xs font-medium text-navy-700">Strateji: {fund.strategy}</span>
        </div>
      </PageHero>

      <Section className="py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <FundDetail fund={fund} />
          </div>

          {/* Yan bilgi kolonu */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy-400">Fon Bilgileri</h3>
              <dl className="space-y-2.5 text-sm">
                {[
                  ["Fon Kodu", fund.code],
                  ["Kuruluş", fund.inceptionDate],
                  ["Para Birimi", fund.currency],
                  ["Yönetim Ücreti", fund.managementFee],
                  ["Büyüklük", fund.aum],
                  ["Karşılaştırma Ölçütü", fund.benchmark],
                  ["Asgari Yatırım", fund.minInvestment],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-3 border-b border-navy-50 pb-2">
                    <dt className="text-navy-500">{k}</dt>
                    <dd className="text-right font-medium text-navy-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl bg-navy-900 p-5 text-white">
              <h3 className="text-sm font-bold">Öne çıkanlar</h3>
              <ul className="mt-3 space-y-2 text-sm text-navy-100">
                {fund.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-gold-400">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Diğer fonlar */}
        <div className="mt-16">
          <h2 className="mb-5 text-xl font-bold text-navy-900">Diğer Fonlar</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {others.map((f) => (
              <Link key={f.slug} href={`/fonlar/${f.slug}`} className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-shadow hover:shadow-lg">
                <span className="text-xs font-bold" style={{ color: f.color }}>{f.code}</span>
                <p className="mt-1 font-semibold text-navy-900">{f.shortName}</p>
                <p className="mt-1 text-xs text-navy-500">{f.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
