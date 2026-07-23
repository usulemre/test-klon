"use client";

import { useId, useMemo, useState } from "react";

// Etkileşimli SVG alan/çizgi grafik — fon performans eğrisi için (hover tooltip).
export function AreaChart({
  data,
  labels,
  height = 260,
  color = "#0d2340",
  valueSuffix = "",
  valuePrefix = "",
}: {
  data: number[];
  labels?: string[];
  height?: number;
  color?: string;
  valueSuffix?: string;
  valuePrefix?: string;
}) {
  const gid = useId().replace(/:/g, "");
  const [hover, setHover] = useState<number | null>(null);
  const w = 800;
  const h = height;
  const padX = 8;
  const padY = 16;

  const { points, line, area, min, max } = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pts = data.map((v, i) => {
      const x = (i / (data.length - 1)) * (w - padX * 2) + padX;
      const y = h - padY - ((v - min) / range) * (h - padY * 2);
      return [x, y] as const;
    });
    const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
    const area = `${line} L${pts[pts.length - 1][0].toFixed(2)} ${h} L${pts[0][0].toFixed(2)} ${h} Z`;
    return { points: pts, line, area, min, max };
  }, [data, h]);

  const fmt = (v: number) =>
    `${valuePrefix}${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 }).format(v)}${valueSuffix}`;

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full"
        style={{ height }}
        onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * w;
          const idx = Math.round(((x - padX) / (w - padX * 2)) * (data.length - 1));
          setHover(Math.max(0, Math.min(data.length - 1, idx)));
        }}
      >
        <defs>
          <linearGradient id={`area-${gid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1={0} x2={w} y1={h * g} y2={h * g} stroke="#e5e9f0" strokeWidth={1} strokeDasharray="4 4" />
        ))}
        <path d={area} fill={`url(#area-${gid})`} />
        <path d={line} fill="none" stroke={color} strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" />
        {hover !== null && (
          <g>
            <line x1={points[hover][0]} x2={points[hover][0]} y1={0} y2={h} stroke={color} strokeWidth={1} strokeOpacity={0.35} />
            <circle cx={points[hover][0]} cy={points[hover][1]} r={4.5} fill="#fff" stroke={color} strokeWidth={2.5} />
          </g>
        )}
      </svg>
      {hover !== null && (
        <div
          className="pointer-events-none absolute -top-2 z-10 -translate-x-1/2 -translate-y-full rounded-lg bg-navy-900 px-3 py-1.5 text-center text-xs text-white shadow-lg"
          style={{ left: `${(points[hover][0] / w) * 100}%` }}
        >
          <div className="font-semibold">{fmt(data[hover])}</div>
          {labels?.[hover] && <div className="text-[10px] text-navy-200">{labels[hover]}</div>}
        </div>
      )}
      <div className="mt-1 flex justify-between text-[10px] text-navy-400">
        <span>{fmt(min)}</span>
        <span>{fmt(max)}</span>
      </div>
    </div>
  );
}
