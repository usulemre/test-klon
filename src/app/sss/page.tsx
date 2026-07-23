import type { Metadata } from "next";
import { PageHero, Section, CTA } from "@/components/ui/primitives";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "Fon alım/satım, minimum tutar, vergilendirme ve nitelikli yatırımcı hakkında sık sorulan sorular.",
  alternates: { canonical: "/sss" },
};

export default function Page() {
  const items: AccordionItem[] = faq.map((f) => ({ q: f.q, a: f.a }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title="Sık Sorulan Sorular" desc="Merak ettiklerinizi hızlıca yanıtlıyoruz." pathname="/sss" />
      <Section width="narrow" className="py-12">
        <Accordion items={items} searchable />
        <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-center">
          <p className="mb-4 text-lg font-semibold text-white">Sorunuzun yanıtını bulamadınız mı?</p>
          <CTA href="/iletisim" variant="gold">Bize Ulaşın</CTA>
        </div>
      </Section>
    </>
  );
}
