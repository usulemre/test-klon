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
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          className="h-11 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-navy-200 outline-none focus:border-gold-400"
        />
        <button type="submit" className="h-11 shrink-0 rounded-full bg-gold-500 px-5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400">
          Abone Ol
        </button>
      </div>
      {error && <p className="mt-1.5 text-xs text-market-down">{error}</p>}
      {!error && <p className="mt-1.5 text-xs text-navy-300">Her hafta ücretsiz piyasa özeti. İstediğiniz an çıkabilirsiniz.</p>}
    </form>
  );
}
