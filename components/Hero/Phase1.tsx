"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

interface Phase1Props {
  active: boolean;
}

export default function Phase1({ active }: Phase1Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 30 }
        }
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className=" text-4xl leading-tight text-slate-800 md:text-5xl"
      >
        Some birthdays
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 30 }
        }
        transition={{
          delay: 1.1,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-3 text-4xl leading-tight text-slate-800 md:text-5xl"
      >
        feel a little different...
      </motion.h1>
      <ScrollIndicator />
    </div>
  );
}