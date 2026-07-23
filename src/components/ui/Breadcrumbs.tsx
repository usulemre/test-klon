import Link from "next/link";
import { segmentLabels } from "@/lib/site";

export type Crumb = { label: string; href?: string };

// Breadcrumb — derin sayfalarda "sen buradasın" izi (rapor §7).
// pathname'den otomatik türetir; özel etiketler için `items` verilebilir.
export function Breadcrumbs({ items, pathname }: { items?: Crumb[]; pathname?: string }) {
  const crumbs: Crumb[] = items ?? derive(pathname ?? "");
  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-navy-500">
        <li>
          <Link href="/" className="hover:text-gold-600">Ana Sayfa</Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span className="text-navy-300">/</span>
            {c.href && i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:text-gold-600">{c.label}</Link>
            ) : (
              <span className="font-medium text-navy-900">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function derive(pathname: string): Crumb[] {
  const segs = pathname.split("/").filter(Boolean);
  return segs.map((seg, i) => ({
    label: segmentLabels[seg] ?? decodeURIComponent(seg),
    href: "/" + segs.slice(0, i + 1).join("/"),
  }));
}
