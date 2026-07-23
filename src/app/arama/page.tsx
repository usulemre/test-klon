import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero, Section } from "@/components/ui/primitives";
import { SearchClient } from "./SearchClient";

export const metadata: Metadata = {
  title: "Arama",
  description: "Vega Portföy site içi arama.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/arama" },
};

export default function AramaPage() {
  return (
    <>
      <PageHero title="Arama" desc="Fon, doküman ve sayfalarda arayın." pathname="/arama" />
      <Section width="narrow" className="py-12">
        <Suspense fallback={<p className="text-navy-500">Yükleniyor…</p>}>
          <SearchClient />
        </Suspense>
      </Section>
    </>
  );
}
