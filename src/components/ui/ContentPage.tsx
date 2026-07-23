import type { ReactNode } from "react";
import { PageHero, Section, CTA } from "./primitives";

export type ContentSection = { heading?: string; body: ReactNode };

// İkincil / yasal / kurumsal sayfalar için ortak şablon.
export function ContentPage({
  title,
  desc,
  pathname,
  intro,
  sections = [],
  lastUpdated,
  cta,
  children,
}: {
  title: string;
  desc?: string;
  pathname: string;
  intro?: ReactNode;
  sections?: ContentSection[];
  lastUpdated?: string;
  cta?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <>
      <PageHero title={title} desc={desc} pathname={pathname} />
      <Section width="narrow" className="py-12">
        {lastUpdated && (
          <p className="mb-6 text-sm text-navy-400">Son güncelleme: {lastUpdated}</p>
        )}
        {intro && <div className="mb-8 text-lg leading-relaxed text-navy-700">{intro}</div>}

        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              {s.heading && (
                <h2 className="mb-3 text-xl font-bold text-navy-900">{s.heading}</h2>
              )}
              <div className="space-y-3 leading-relaxed text-navy-600">{s.body}</div>
            </div>
          ))}
        </div>

        {children}

        {cta && (
          <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center">
            <p className="mb-4 text-lg font-semibold text-white">Sorularınız mı var?</p>
            <CTA href={cta.href} variant="gold">
              {cta.label}
            </CTA>
          </div>
        )}
      </Section>
    </>
  );
}
