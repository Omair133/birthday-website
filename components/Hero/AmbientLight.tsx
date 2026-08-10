"use client";

import { motion } from "framer-motion";

export default function AmbientLight() {
  return (
    <>
      {/* Top golden glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-20
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-amber-300/40
          blur-[120px]
        "
      />

      {/* Left cream glow */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-24
          top-1/3
          h-96
          w-96
          rounded-full
          bg-orange-100/40
          blur-[150px]
        "
      />

      {/* Right teal glow */}
      <motion.div
        animate={{
          y: [-25, 25, -25],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-24
          bottom-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-100/35
          blur-[170px]
        "
      />
    </>
  );
}