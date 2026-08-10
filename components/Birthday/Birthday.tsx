"use client";

import { motion } from "framer-motion";

export default function Birthday() {
  return (
    <section className="relative px-6 py-32">

      <div className="mx-auto max-w-3xl">

        {/* Today */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg text-slate-500"
        >
          Today...
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-center font-serif text-5xl leading-tight text-slate-800 md:text-7xl"
        >
          is about
          <br />
          celebrating you.
        </motion.h2>

        {/* Birthday */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-slate-500">
            Happy Birthday
          </p>

          <h3 className="mt-4 font-serif text-4xl text-slate-800">
            Dr. __________
          </h3>
        </motion.div>

        {/* Wish */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-32 max-w-xl text-center text-lg leading-9 text-slate-600"
        >
          <p>
            May Allah bless this year
            <br />
            with peace,
            <br />
            abundant barakah,
            <br />
            good health,
            <br />
            and countless reasons to smile.
          </p>
        </motion.div>

      </div>
    </section>
  );
}