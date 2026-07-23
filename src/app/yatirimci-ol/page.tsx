import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { InvestorWizard } from "@/components/forms/InvestorWizard";

export const metadata: Metadata = {
  title: "Yatırımcı Ol",
  description: "Birkaç adımda yatırımcı profilinizi oluşturun; size en uygun fon ve stratejiyi belirleyelim.",
  alternates: { canonical: "/yatirimci-ol" },
};

export default function YatirimciOlPage() {
  return (
    <>
      <PageHero
        title="Yatırımcı Ol"
        desc="Birkaç adımda profilinizi oluşturun; uzman ekibimiz size en uygun stratejiyle geri dönsün."
        pathname="/yatirimci-ol"
      />
      <Section width="narrow" className="py-12">
        <InvestorWizard />
        <p className="mt-6 text-center text-xs text-navy-400">
          Başvurunuz yatırım taahhüdü içermez. Fonlar nitelikli yatırımcılara yöneliktir.
        </p>
      </Section>
    </>
  );
}
