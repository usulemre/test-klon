"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Header arama — açılır kutu; /arama sonuç sayfasına yönlendirir.
export function SearchBox({ variant = "icon" }: { variant?: "icon" | "inline" }) {
  const router = useRouter();
  const [open, setOpen] = useState(variant === "inline");
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (q.trim()) {
      router.push(`/arama?q=${encodeURIComponent(q.trim())}`);
      if (variant === "icon") setOpen(false);
    }
  }

  if (variant === "icon" && !open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Ara"
        className="flex h-9 w-9 items-center justify-center rounded-full text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
      >
        <SearchIcon />
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="relative flex items-center">
      <span className="pointer-events-none absolute left-3 text-navy-400">
        <SearchIcon />
      </span>
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onBlur={() => variant === "icon" && !q && setOpen(false)}
        placeholder="Fon, doküman veya sayfa ara…"
        className="h-9 w-56 rounded-full border border-navy-200 bg-white pl-9 pr-3 text-sm text-navy-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
      />
    </form>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
