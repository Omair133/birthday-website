"use client";

import { motion } from "framer-motion";

export default function Dua() {
  return (
    <section className="relative px-6 py-52">

      <div className="mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >

          <p className="text-3xl">
            🤲
          </p>


          <h2 className="mt-10 font-serif text-5xl leading-tight text-slate-800 md:text-7xl">
            A Dua
          </h2>


          <div className="mt-24 space-y-8">

            <p className="font-serif text-3xl leading-relaxed text-slate-700 md:text-5xl">
              May Allah bless
              <br />
              your journey,
            </p>


            <p className="font-serif text-3xl leading-relaxed text-slate-700 md:text-5xl">
              your dreams,
              <br />
              your family,
              <br />
              and your work.
            </p>


            <p className="font-serif text-3xl leading-relaxed text-slate-700 md:text-5xl">
              And bless the home
              <br />
              we hope to build together.
            </p>


          </div>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="mt-24 font-serif text-4xl italic text-amber-700"
          >
            Āmīn.
          </motion.p>


        </motion.div>

      </div>

    </section>
  );
}