"use client";

import { motion } from "framer-motion";

export default function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700 bg-[#0f172a] shadow-xl"
    >
      {/* Top Bar */}
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-3 text-xs text-slate-400">
          future.ts
        </span>
      </div>

      <div className="space-y-2 p-5 font-mono text-sm">

        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">future</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-yellow-300">{"{"}</span>
        </p>

        <p className="ml-5">
          <span className="text-cyan-400">patience</span>
          :
          <span className="text-orange-300"> true</span>,
        </p>

        <p className="ml-5">
          <span className="text-cyan-400">learning</span>
          :
          <span className="text-orange-300"> true</span>,
        </p>

        <p className="ml-5">
          <span className="text-cyan-400">gratitude</span>
          :
          <span className="text-orange-300"> true</span>,
        </p>

        <p>
          <span className="text-yellow-300">{"}"}</span>
        </p>

      </div>
    </motion.div>
  );
}