import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, StatBadge } from "@/components/ui/primitives";
import { mainNav, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Test Klon Portföy Yönetimi A.Ş. — kurumsal yapımız, değerlerimiz, yönetim kurulumuz ve kariyer fırsatları.",
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  const children = mainNav.find((n) => n.href === "/hakkimizda")?.children ?? [];
  return (
    <>
      <PageHero
        title="Hakkımızda"
        desc={`${site.legalName}, kurumsal disiplin ve şeffaflık ilkesiyle ${new Date().getFullYear() - site.founded} yılı aşkın süredir portföy yönetimi alanında faaliyet göstermektedir.`}
        pathname="/hakkimizda"
      />
      <Section className="py-12">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatBadge value="14,2 Mlr ₺" label="Yönetilen Varlık" />
          <StatBadge value="4.800+" label="Yatırımcı" />
          <StatBadge value={String(site.founded)} label="Kuruluş Yılı" />
          <StatBadge value="60+" label="Uzman Ekip" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {children.map((c) => (
            <Link key={c.href} href={c.href} className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-shadow hover:shadow-lg">
              <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600">{c.label}</h3>
              {c.desc && <p className="mt-2 text-sm text-navy-600">{c.desc}</p>}
              <span className="mt-4 inline-block text-sm font-semibold text-navy-500 group-hover:text-gold-600">İncele →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
