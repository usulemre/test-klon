import Link from "next/link";

// Marka logosu — nötr yükselen grafik-çubuk monogramı (lacivert + altın) + kelime markası.
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
    <Link href="/" aria-label="Test Klon Portföy ana sayfa" className={`group flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden className="shrink-0">
        <rect width="40" height="40" rx="9" fill="#0d2340" />
        <rect x="10" y="22" width="4.6" height="8" rx="1.4" fill="#fff" />
        <rect x="17.7" y="16" width="4.6" height="14" rx="1.4" fill="#fff" />
        <rect x="25.4" y="10" width="4.6" height="20" rx="1.4" fill="#c9a24b" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-tight ${word}`}>
          Test Klon<span className="text-gold-500"> Portföy</span>
        </span>
        <span className={`mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Portföy Yönetimi
        </span>
      </span>
    </Link>
  );
}
