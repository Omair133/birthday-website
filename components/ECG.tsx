"use client";

import { motion } from "framer-motion";

export default function ECG() {
  return (
    <div className="mx-auto flex h-48 w-[340px] items-center justify-center rounded-2xl bg-slate-900 shadow-2xl">

      <svg
        width="280"
        height="80"
        viewBox="0 0 280 80"
      >
        <motion.path
          d="M0 40 L40 40 L60 20 L80 60 L100 10 L120 40 L280 40"
          fill="none"
          stroke="#00FF88"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>

    </div>
  );
}