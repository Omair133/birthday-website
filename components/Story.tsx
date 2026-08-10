"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* Background glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 max-w-5xl px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 font-mono text-cyan-400"
        >
          const future = {"{"}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="my-12 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1
          }}
          className="space-y-4 font-mono text-2xl"
        >
          <p>
            &nbsp;&nbsp;faith: <span className="text-green-400">true</span>,
          </p>

          <p>
            &nbsp;&nbsp;patience: <span className="text-green-400">true</span>,
          </p>

          <p>
            &nbsp;&nbsp;service: <span className="text-green-400">true</span>,
          </p>

          <p>
            &nbsp;&nbsp;gratitude: <span className="text-green-400">true</span>,
          </p>

          <p>{"}"}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1
          }}
          className="mt-24 text-center"
        >
          <h2 className="text-5xl font-bold">

            Different Paths.

          </h2>

          <h2 className="mt-3 text-5xl text-cyan-300">

            One Future, In shā' Allāh.

          </h2>

        </motion.div>

      </div>

    </section>
  );
}