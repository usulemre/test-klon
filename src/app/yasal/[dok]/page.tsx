import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ui/ContentPage";
import { legalDocs, legalSlugs, toContentSections } from "@/lib/legal";

export function generateStaticParams() {
  return legalSlugs.map((dok) => ({ dok }));
}

export async function generateMetadata({ params }: { params: Promise<{ dok: string }> }): Promise<Metadata> {
  const { dok } = await params;
  const doc = legalDocs[dok];
  if (!doc) return { title: "Doküman Bulunamadı" };
  return { title: doc.title, description: doc.desc, alternates: { canonical: `/yasal/${doc.slug}` } };
}

export default async function YasalPage({ params }: { params: Promise<{ dok: string }> }) {
  const { dok } = await params;
  const doc = legalDocs[dok];
  if (!doc) notFound();

  return (
    <ContentPage
      title={doc.title}
      desc={doc.desc}
      pathname={`/yasal/${doc.slug}`}
      intro={doc.intro}
      lastUpdated="01.07.2026"
      sections={toContentSections(doc)}
      cta={{ label: "İletişime Geçin", href: "/iletisim" }}
    />
  );
}
