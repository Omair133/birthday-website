"use client";

import { motion } from "framer-motion";
import CodeWindow from "./CodeWindow";
import MedicalMonitor from "./MedicalMonitor";

export default function Connection() {
  return (
    <section className="relative min-h-[120vh] overflow-hidden bg-gradient-to-b from-[#faf7f3] to-white py-32">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .8 }}
        className="mb-20 text-center text-5xl font-bold"
      >
        Where Technology Meets Compassion
      </motion.h2>

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-8">

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CodeWindow />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          className="mx-10 h-1 flex-1 origin-left rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400"
        />

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MedicalMonitor />
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: .4, duration: 1 }}
        className="mx-auto mt-24 max-w-3xl text-center"
      >
        <h3 className="text-4xl font-semibold">

          Different Paths

        </h3>

        <h3 className="mt-2 text-4xl text-slate-600">

          One Future, In shā' Allāh.

        </h3>

        <p className="mt-8 text-lg leading-8 text-gray-600">

          One builds systems.

          <br />

          One heals people.

          <br /><br />

          Both serve with patience,
          dedication and sincerity.

        </p>

      </motion.div>

    </section>
  );
}