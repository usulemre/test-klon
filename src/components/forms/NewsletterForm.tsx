"use client";

import { useState } from "react";

// Bülten abonelik formu — lead magnet: "Haftalık Piyasa Özeti" (rapor CRO önerisi).
export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Geçerli bir e-posta adresi girin.");
      return;
    }
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <p className={`rounded-xl bg-market-up/15 px-4 py-3 text-sm ${compact ? "text-market-up" : "text-market-up"}`}>
        ✓ Teşekkürler! Haftalık Piyasa Özeti bültenimize kaydınız alındı.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            aria-label="E-posta adresiniz"
            className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] pl-11 pr-4 text-base text-white placeholder:text-navy-300 outline-none transition focus:border-gold-400 focus:bg-white/10 focus:ring-2 focus:ring-gold-400/25 sm:text-sm"
          />
        </div>
        <button type="submit" className="h-12 shrink-0 rounded-xl bg-gold-500 px-6 text-base font-semibold text-navy-950 transition-colors hover:bg-gold-400 sm:text-sm">
          Abone Ol
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-market-down">{error}</p>}
      {!error && <p className="mt-2 text-xs text-navy-300">Her hafta ücretsiz piyasa özeti. İstediğiniz an çıkabilirsiniz.</p>}
    </form>
  );
}
