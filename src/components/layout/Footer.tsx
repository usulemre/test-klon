import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

// Genişletilmiş footer — rapor "Footer (Genişletilmiş)".
export function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-navy-100">
      {/* Bülten + risk uyarısı */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-white">Haftalık Piyasa Özeti bültenine katılın</h3>
            <p className="mt-2 max-w-md text-sm text-navy-200">
              Piyasa analizleri, fon performansları ve ekonomi takvimi her hafta e-postanızda.
            </p>
          </div>
          <div className="flex items-center">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Ana sütunlar */}
      <div className="mx-auto max-w-[1400px] px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-navy-300">{site.legalName}</p>
            <div className="mt-4 space-y-1 text-sm text-navy-200">
              <p>{site.address}</p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-400">{site.phone}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-gold-400">{site.email}</a>
              </p>
              <p className="text-navy-300">{site.hours}</p>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold uppercase tracking-wide text-white">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-navy-200 transition-colors hover:text-gold-400">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dış bağlantılar + sosyal medya */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-navy-300">Denetim:</span>
            {site.regulators.map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="font-medium text-navy-100 hover:text-gold-400">
                {r.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {[
              { label: "LinkedIn", href: site.social.linkedin },
              { label: "X", href: site.social.x },
              { label: "Instagram", href: site.social.instagram },
              { label: "Facebook", href: site.social.facebook },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center rounded-full border border-white/15 px-3 text-xs font-medium text-navy-100 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Alt şerit */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-5 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.</p>
          <p className="max-w-2xl text-navy-400">
            Burada yer alan bilgiler yatırım danışmanlığı kapsamında değildir. Geçmiş performans gelecek getirinin garantisi değildir.
          </p>
        </div>
      </div>
    </footer>
  );
}
