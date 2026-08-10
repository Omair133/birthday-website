"use client";

import { motion } from "framer-motion";

const moments = [
  "new mornings.",
  "new routines.",
  "new conversations.",
  "new memories.",
];

export default function Future() {
  return (
    <section className="relative px-6 py-40">

      <div className="mx-auto max-w-3xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.4em] text-amber-700"
        >
          Looking Ahead
        </motion.p>


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 font-serif text-5xl leading-tight text-slate-800 md:text-7xl"
        >
          Soon...
        </motion.h2>


        <div className="mt-24 space-y-20">

          {moments.map((moment, index) => (
            <motion.p
              key={moment}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="font-serif text-4xl text-slate-700 md:text-6xl"
            >
              {moment}
            </motion.p>
          ))}

        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-32"
        >

          <p className="font-serif text-3xl leading-relaxed text-slate-700 md:text-5xl">

            And,
            <br />
            In shā' Allāh,

            <br /><br />

            a place
            <br />
            to call home.

          </p>

        </motion.div>


      </div>

    </section>
  );
}