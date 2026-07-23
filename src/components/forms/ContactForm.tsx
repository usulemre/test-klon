"use client";

import Link from "next/link";
import { useState } from "react";

const subjects = ["Bireysel Portföy Yönetimi", "Kurumsal Portföy Yönetimi", "Fonlar", "Genel Bilgi", "Diğer"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: subjects[0], message: "", kvkk: false });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Adınızı girin.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Geçerli e-posta girin.";
    if (form.message.trim().length < 10) e.message = "Mesajınız çok kısa.";
    if (!form.kvkk) e.kvkk = "Devam etmek için onay verin.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (validate()) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-market-up/30 bg-market-up/10 p-8 text-center">
        <p className="text-lg font-semibold text-navy-900">Mesajınız alındı ✓</p>
        <p className="mt-2 text-sm text-navy-600">En kısa sürede size dönüş yapacağız.</p>
      </div>
    );
  }

  const field = "h-11 w-full rounded-xl border border-navy-200 px-3.5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-navy-700">Ad Soyad *</label>
          <input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="mt-1 text-xs text-market-down">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy-700">E-posta *</label>
          <input type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="mt-1 text-xs text-market-down">{errors.email}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy-700">Telefon</label>
          <input className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy-700">Konu</label>
          <select className={field} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-navy-700">Mesajınız *</label>
        <textarea rows={5} className="w-full rounded-xl border border-navy-200 p-3.5 text-sm outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        {errors.message && <p className="mt-1 text-xs text-market-down">{errors.message}</p>}
      </div>
      <label className="flex items-start gap-2 text-sm text-navy-600">
        <input type="checkbox" checked={form.kvkk} onChange={(e) => setForm({ ...form, kvkk: e.target.checked })} className="mt-1" />
        <span>
          <Link href="/yasal/aydinlatma-metni" className="text-gold-600 underline">KVKK Aydınlatma Metni</Link>&apos;ni okudum, kişisel verilerimin işlenmesini onaylıyorum.
        </span>
      </label>
      {errors.kvkk && <p className="text-xs text-market-down">{errors.kvkk}</p>}
      <button type="submit" className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400">
        Gönder
      </button>
    </form>
  );
}
