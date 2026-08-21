"use client";

import { motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 55,
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
          y: [0, -30, 0],
          // rotate: [-15, 15, -15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <img
            src="/images/smile.webp"
            alt="Smile"
            className="h-32 w-32"
          />
      </motion.div>
    </motion.div>
  );
}