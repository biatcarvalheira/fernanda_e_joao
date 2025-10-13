"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  /** ISO date string with timezone. Example: 2026-04-20 14:30 in São Paulo */
  target: string;
};

export default function Countdown({ target }: Props) {
  const targetDate = useMemo(() => new Date(target), [target]);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div
      className="
        inline-flex items-center justify-center gap-3 sm:gap-4
        text-[#1c5134]
      "
      aria-label="Contagem regressiva para o casamento"
    >
      {[
        { label: "dias", value: days },
        { label: "horas", value: hours },
        { label: "min", value: minutes },
        { label: "seg", value: seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-lg sm:text-2xl md:text-3xl font-bold tabular-nums">
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
