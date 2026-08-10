"use client";

import { motion } from "framer-motion";

const items = [
  "Smile often",
  "Take time for yourself",
  "Enjoy your favorite things",
  "Accept endless duas",
];

export default function Prescription() {
  return (
    <section className="relative px-6 py-40">

      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[0.4em] text-amber-700">
            A Special Note
          </p>

          <h2 className="mt-8 font-serif text-5xl text-slate-800 md:text-7xl">
            Prescription
          </h2>

        </motion.div>


        {/* Prescription Paper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            mt-24
            rounded-3xl
            border
            border-stone-200
            bg-white
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <p className="text-sm uppercase tracking-widest text-slate-400">
            Patient
          </p>

          <h3 className="mt-3 font-serif text-3xl text-slate-800">
            Dr. ________
          </h3>


          <div className="my-10 border-t border-stone-200" />


          <p className="text-sm uppercase tracking-widest text-slate-400">
            Diagnosis
          </p>

          <p className="mt-4 font-serif text-2xl text-slate-700">
            A very special birthday.
          </p>


          <div className="my-10 border-t border-stone-200" />


          <p className="text-sm uppercase tracking-widest text-slate-400">
            Prescription
          </p>


          <div className="mt-6 space-y-5">

            {items.map((item, index) => (

              <motion.p
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="text-lg text-slate-700"
              >
                ✓ {item}
              </motion.p>

            ))}

          </div>


          <div className="mt-12 text-center">

            <p className="text-sm uppercase tracking-widest text-slate-400">
              Refills
            </p>

            <p className="mt-3 font-serif text-3xl text-amber-700">
              Unlimited
            </p>

          </div>


        </motion.div>


      </div>

    </section>
  );
}