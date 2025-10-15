"use client";

import { useEffect, useMemo, useState } from "react";

type Props = { target: string };

export default function Countdown({ target }: Props) {
  const targetDate = useMemo(() => new Date(target), [target]);
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Before mount, render a stable shell so SSR and client match
  if (!mounted) {
    return (
      <div
        className="inline-flex items-center justify-center gap-3 sm:gap-4 text-[#1c5134]"
        suppressHydrationWarning
      >
        {["dias", "horas", "min", "seg"].map((label) => (
          <div key={label} className="text-center">
            <div className="text-lg sm:text-2xl md:text-3xl font-bold tabular-nums" suppressHydrationWarning>
              00
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium opacity-80 leading-tight">
              {label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const diff = Math.max(0, targetDate.getTime() - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div
      className="inline-flex items-center justify-center gap-3 sm:gap-4 text-[#1c5134]"
      suppressHydrationWarning
    >
      {[
        { label: "dias", value: days },
        { label: "horas", value: hours },
        { label: "min", value: minutes },
        { label: "seg", value: seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold tabular-nums" suppressHydrationWarning>
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm md:text-base font-medium opacity-80 leading-tight">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
