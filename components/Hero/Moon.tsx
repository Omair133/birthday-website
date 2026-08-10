"use client";

import { motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [-15, 15, -15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative h-20 w-20"
      >
        <div className="absolute inset-0 rounded-full bg-[#F7E7A9] shadow-[0_0_80px_rgba(248,230,160,0.55)]" />
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-[#f8f2dc]" />
      </motion.div>
    </motion.div>
  );
}