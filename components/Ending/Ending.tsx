"use client";

import { motion } from "framer-motion";

export default function Ending() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="text-center">

        {/* Moon */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mx-auto
            h-20
            w-20
            rounded-full
            bg-[#F7E7A9]
            shadow-[0_0_80px_rgba(248,230,160,0.55)]
          "
        />


        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-16
            font-serif
            text-5xl
            leading-tight
            text-slate-800
            md:text-7xl
          "
        >
          The first page
          <br />
          has been written.
        </motion.h2>


        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
            mt-12
            font-serif
            text-3xl
            italic
            text-amber-700
            md:text-5xl
          "
        >
          The rest awaits,
          <br />
          In shā' Allāh.
        </motion.p>


      </div>

    </section>
  );
}