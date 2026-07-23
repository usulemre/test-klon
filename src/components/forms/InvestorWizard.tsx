"use client";

import Link from "next/link";
import { useState } from "react";
import { funds, riskColor } from "@/lib/funds/funds";

// Çok adımlı "Yatırımcı Ol" sihirbazı — rapor CRO: "çok adımlı basit form/başlangıç sihirbazı".
const steps = ["Yatırımcı Tipi", "Hedef & Risk", "İletişim", "Özet"];

const goals = [
  { id: "koruma", label: "Sermaye Koruma", risk: 2 },
  { id: "denge", label: "Dengeli Büyüme", risk: 4 },
  { id: "buyume", label: "Yüksek Büyüme", risk: 6 },
];

export function InvestorWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    type: "" as "bireysel" | "kurumsal" | "",
    goal: "",
    amount: "",
    name: "",
    email: "",
    phone: "",
    kvkk: false,
  });
  const [done, setDone] = useState(false);

  const canNext =
    (step === 0 && data.type) ||
    (step === 1 && data.goal) ||
    (step === 2 && data.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.kvkk) ||
    step === 3;

  const recommended = (() => {
    const targetRisk = goals.find((g) => g.id === data.goal)?.risk ?? 4;
    return [...funds].sort((a, b) => Math.abs(a.riskLevel - targetRisk) - Math.abs(b.riskLevel - targetRisk))[0];
  })();

  if (done) {
    return (
      <div className="rounded-2xl border border-market-up/30 bg-market-up/10 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-market-up text-2xl text-white">✓</div>
        <h3 className="text-xl font-bold text-navy-900">Başvurunuz alındı!</h3>
        <p className="mx-auto mt-2 max-w-md text-navy-600">
          {data.name}, uzman ekibimiz en kısa sürede sizinle iletişime geçecek. İlgi profilinize göre önerimiz:
          <strong className="text-navy-900"> {recommended.shortName}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
      {/* İlerleme */}
      <div className="mb-8 flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 flex-col gap-1.5">
            <div className={`h-1.5 rounded-full ${i <= step ? "bg-gold-500" : "bg-navy-100"}`} />
            <span className={`text-[11px] font-medium ${i <= step ? "text-navy-900" : "text-navy-400"}`}>{s}</span>
          </div>
        ))}
      </div>

      {step === 0 && (
        <div>
          <h3 className="mb-4 text-lg font-bold text-navy-900">Hangi yatırımcı tipisiniz?</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { id: "bireysel", title: "Bireysel Yatırımcı", desc: "Kişisel birikimlerimi yönetmek istiyorum" },
              { id: "kurumsal", title: "Kurumsal Yatırımcı", desc: "Şirket, vakıf veya emeklilik fonu" },
            ].map((o) => (
              <button
                key={o.id}
                onClick={() => setData({ ...data, type: o.id as "bireysel" | "kurumsal" })}
                className={`rounded-xl border-2 p-5 text-left transition-colors ${
                  data.type === o.id ? "border-gold-500 bg-gold-50" : "border-navy-100 hover:border-navy-300"
                }`}
              >
                <span className="block font-semibold text-navy-900">{o.title}</span>
                <span className="mt-1 block text-sm text-navy-500">{o.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 className="mb-4 text-lg font-bold text-navy-900">Yatırım hedefiniz nedir?</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => setData({ ...data, goal: g.id })}
                className={`rounded-xl border-2 p-4 text-left transition-colors ${
                  data.goal === g.id ? "border-gold-500 bg-gold-50" : "border-navy-100 hover:border-navy-300"
                }`}
              >
                <span className="block font-semibold text-navy-900">{g.label}</span>
                <span className="mt-1 text-xs font-medium" style={{ color: riskColor(g.risk) }}>Risk ~{g.risk}/7</span>
              </button>
            ))}
          </div>
          <label className="mt-5 block text-sm font-medium text-navy-700">Planladığınız yatırım tutarı (opsiyonel)</label>
          <input
            value={data.amount}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
            placeholder="örn. 1.000.000 ₺"
            className="mt-1 h-11 w-full rounded-xl border border-navy-200 px-3.5 text-sm outline-none focus:border-gold-500"
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-navy-900">Size nasıl ulaşalım?</h3>
          <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Ad Soyad *" className="h-11 w-full rounded-xl border border-navy-200 px-3.5 text-sm outline-none focus:border-gold-500" />
          <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="E-posta *" className="h-11 w-full rounded-xl border border-navy-200 px-3.5 text-sm outline-none focus:border-gold-500" />
          <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="Telefon" className="h-11 w-full rounded-xl border border-navy-200 px-3.5 text-sm outline-none focus:border-gold-500" />
          <label className="flex items-start gap-2 text-sm text-navy-600">
            <input type="checkbox" checked={data.kvkk} onChange={(e) => setData({ ...data, kvkk: e.target.checked })} className="mt-1" />
            <span><Link href="/yasal/aydinlatma-metni" className="text-gold-600 underline">Aydınlatma Metni</Link>&apos;ni okudum ve onaylıyorum. *</span>
          </label>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="mb-4 text-lg font-bold text-navy-900">Başvuru Özeti</h3>
          <dl className="divide-y divide-navy-100 rounded-xl border border-navy-100">
            {[
              ["Yatırımcı Tipi", data.type === "bireysel" ? "Bireysel" : "Kurumsal"],
              ["Hedef", goals.find((g) => g.id === data.goal)?.label ?? "—"],
              ["Tutar", data.amount || "Belirtilmedi"],
              ["Ad Soyad", data.name],
              ["E-posta", data.email],
              ["Telefon", data.phone || "—"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between px-4 py-2.5 text-sm">
                <dt className="text-navy-500">{k}</dt>
                <dd className="font-medium text-navy-900">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 rounded-xl bg-navy-50 p-4 text-sm">
            <span className="text-navy-500">Profilinize önerimiz: </span>
            <strong className="text-navy-900">{recommended.shortName}</strong>
          </div>
        </div>
      )}

      {/* Navigasyon */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-navy-600 disabled:opacity-40"
        >
          ← Geri
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={() => canNext && setStep((s) => s + 1)}
            disabled={!canNext}
            className="rounded-full bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Devam →
          </button>
        ) : (
          <button onClick={() => setDone(true)} className="rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400">
            Başvuruyu Tamamla
          </button>
        )}
      </div>
    </div>
  );
}
