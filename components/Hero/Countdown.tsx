"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-12-24T00:00:00+05:30").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft <= 0) {
    return (
      <div className="text-center">
        <p className="text-md uppercase tracking-[0.5em] text-slate-500">
          The day has arrived
        </p>
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (timeLeft / (1000 * 60)) % 60
  );
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex flex-col items-center">

      {/* Small heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-[18px] uppercase tracking-[0.5em] text-slate-500"
      >
        Until the day
      </motion.p>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          relative
          rounded-3xl
          border border-white/40
          bg-white/20
          px-6 py-7
          shadow-[0_20px_60px_rgba(120,100,70,0.08)]
          backdrop-blur-xl
        "
      >
        {/* Soft glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-amber-200/10 blur-2xl" />

        <div className="flex items-center gap-4 sm:gap-7">
          <TimeUnit value={days} label="Days" />

          <Separator />

          <TimeUnit value={hours} label="Hours" />

          <Separator />

          <TimeUnit value={minutes} label="Minutes" />

          <Separator />

          <TimeUnit value={seconds} label="Seconds" />
        </div>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 80, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 h-px bg-slate-400/30"
      />
    </div>
  );
}

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex min-w-[48px] flex-col items-center sm:min-w-[60px]">

      <motion.span
        key={value}
        initial={{ opacity: 0.4, y: -3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="
          font-light
          text-3xl
          tracking-wide
          text-slate-800
          sm:text-4xl
        "
      >
        {String(value).padStart(2, "0")}
      </motion.span>

      <span
        className="
          mt-2
          text-[8px]
          uppercase
          tracking-[0.25em]
          text-slate-500
          sm:text-[9px]
        "
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span className="mb-5 text-lg font-light text-slate-400/50">
      :
    </span>
  );
}