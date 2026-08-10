"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">

      {/* Golden Moon Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-amber-200/40
          blur-[160px]
        "
      />


      {/* Soft Left Light */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-orange-100/40
          blur-[170px]
        "
      />


      {/* Soft Right Light */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-1/4
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-100/30
          blur-[180px]
        "
      />

    </div>
  );
}