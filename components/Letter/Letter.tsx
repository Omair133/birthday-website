"use client";

import { motion } from "framer-motion";

export default function Letter() {
  return (
    <section className="relative px-6 py-52">

      <div className="mx-auto max-w-3xl text-center">

        {/* Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="text-7xl"
        >
          ✉️
        </motion.div>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-10 font-serif text-5xl text-slate-800 md:text-7xl"
        >
          A Letter For You
        </motion.h2>


        {/* Letter Paper */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
            mt-24
            rounded-3xl
            border
            border-stone-200
            bg-white
            p-8
            text-left
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            md:p-12
          "
        >

          <p className="font-serif text-xl leading-10 text-slate-700">

            Dear ______,

            <br /><br />

            Your letter will appear here.

            <br /><br />

            Replace this text with
            your message.

            <br /><br />

            With prayers,
            <br />
            Your Name

          </p>


        </motion.div>


      </div>

    </section>
  );
}