"use client";

import { motion } from "framer-motion";

export default function Laptop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto w-full max-w-[240px] md:max-w-[280px]"
    >
      {/* Screen */}
      <div className="rounded-t-xl border-[6px] border-gray-700 bg-slate-900 p-4 shadow-lg">

        <div className="space-y-3 font-mono text-sm">

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            transition={{ duration: 1 }}
            className="h-3 rounded bg-green-400"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            transition={{ duration: 1.2 }}
            className="h-3 rounded bg-blue-400"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            transition={{ duration: 1.4 }}
            className="h-3 rounded bg-yellow-400"
          />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ duration: 1.6 }}
            className="h-3 rounded bg-pink-400"
          />

        </div>

      </div>

      {/* Keyboard */}
      <div className="h-3 rounded-b-full bg-gray-500 shadow-md" />
    </motion.div>
  );
}