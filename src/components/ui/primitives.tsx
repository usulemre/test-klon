import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

// Ortak buton/CTA — eylem odaklı (rapor: "İzahnameyi İncele", "Hemen Başvur").
export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "gold" | "outline" | "dark";
  className?: string;
  external?: boolean;
}) {
  const styles: Record<string, string> = {
    primary: "bg-navy-900 text-white hover:bg-navy-800",
    gold: "bg-gold-500 text-navy-950 hover:bg-gold-400",
    outline: "border border-navy-200 text-navy-900 hover:border-navy-900 hover:bg-navy-50",
    dark: "bg-white/10 text-white hover:bg-white/20 border border-white/15",
  };
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

// Sosyal kanıt rozeti (AUM, yatırımcı sayısı, kuruluş yılı — rapor CRO).
export function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5 text-center shadow-card">
      <div className="text-2xl font-bold text-navy-900 sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-500">{label}</div>
    </div>
  );
}

// Bölüm sarmalayıcı
export function Section({
  children,
  className = "",
  width = "wide",
}: {
  children: ReactNode;
  className?: string;
  width?: "wide" | "narrow";
}) {
  const max = width === "narrow" ? "max-w-3xl" : "max-w-[1400px]";
  return (
    <section className={`mx-auto ${max} px-4 ${className}`}>{children}</section>
  );
}

// Bölüm başlığı
export function SectionHeading({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">{title}</h2>
      {desc && <p className="mt-3 text-navy-600">{desc}</p>}
    </div>
  );
}

// Sayfa üst başlık bloğu (breadcrumb + başlık) — iç sayfalar için.
export function PageHero({
  title,
  desc,
  breadcrumb,
  pathname,
  children,
}: {
  title: string;
  desc?: string;
  breadcrumb?: Crumb[];
  pathname?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-navy-100 bg-gradient-to-b from-navy-50/60 to-white">
      <div className="mx-auto max-w-[1400px] px-4 py-8 sm:py-10">
        <Breadcrumbs items={breadcrumb} pathname={pathname} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</h1>
        {desc && <p className="mt-3 max-w-2xl text-lg text-navy-600">{desc}</p>}
        {children}
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-navy-100 bg-white p-6 shadow-card ${className}`}>{children}</div>
  );
}
