import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui/primitives";
import { FundCompare } from "@/components/funds/FundCompare";

export const metadata: Metadata = {
  title: "Fon Karşılaştırma",
  description: "Vega Portföy fonlarını risk, getiri, yönetim ücreti ve büyüklük açısından yan yana karşılaştırın.",
  alternates: { canonical: "/fonlar/karsilastir" },
};

export default function KarsilastirPage() {
  return (
    <>
      <PageHero
        title="Fon Karşılaştırma Aracı"
        desc="Fonları yan yana koyarak risk, getiri ve maliyet açısından kolayca kıyaslayın."
        breadcrumb={[{ label: "Fonlar", href: "/fonlar" }, { label: "Fon Karşılaştırma" }]}
      />
      <Section className="py-12">
        <FundCompare />
      </Section>
    </>
  );
}
