"use client";

import { motion } from "framer-motion";

export default function MedicalMonitor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-emerald-900 bg-[#071411] shadow-xl"
    >
      <div className="border-b border-emerald-900 bg-[#0d1f1a] px-4 py-3">

        <span className="text-xs text-emerald-300">
          Patient Monitor
        </span>

      </div>

      <div className="space-y-4 p-5">


        <div className="flex justify-between">

          <span className="text-emerald-300">
            Heart Rate
          </span>

          <span className="text-white">
            Stable
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-emerald-300">
            Compassion
          </span>

          <span className="text-white">
            100%
          </span>

        </div>

        <svg
          viewBox="0 0 300 60"
          className="w-full"
        >
          <motion.path
            d="M0 30 L50 30 L70 12 L90 48 L110 6 L130 30 L300 30"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        </svg>

      </div>
    </motion.div>
  );
}