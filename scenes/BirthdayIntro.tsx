"use client";

import { motion } from "framer-motion";

export default function BirthdayIntro() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-8">

      <div className="mx-auto max-w-3xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-slate-500"
        >
          Today...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3 }}
          className="mt-8 font-serif text-5xl leading-tight md:text-7xl"
        >
          is about
          <br />
          celebrating you.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-2xl text-slate-700"
        >
          Happy Birthday,
          <br />
          <span className="font-semibold">
            Dr. __________
          </span>
        </motion.p>

      </div>

    </section>
  );
}