import Link from "next/link";

// Vega Portföy marka logosu — "V" monogramı (lacivert + altın) + kelime markası.
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const word = variant === "light" ? "text-white" : "text-navy-900";
  const sub = variant === "light" ? "text-navy-100" : "text-navy-500";
  return (
    <Link href="/" aria-label="Vega Portföy ana sayfa" className={`group flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden className="shrink-0">
        <rect width="40" height="40" rx="9" fill="#0d2340" />
        <path d="M9 11h5.2l5.8 14.2L25.8 11H31l-8.7 20h-4.6L9 11Z" fill="#fff" />
        <path d="M20 25.2 25.8 11H31l-8.7 20h-1.9l-.4-5.8Z" fill="#c9a24b" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight ${word}`}>
          Vega<span className="text-gold-500"> Portföy</span>
        </span>
        <span className={`mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Portföy Yönetimi
        </span>
      </span>
    </Link>
  );
}
