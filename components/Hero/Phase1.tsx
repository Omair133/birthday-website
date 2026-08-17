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
        transition={active ? {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        } : { duration: 0 }}
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
        transition={active ? {
          delay: 1.1,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        } : { duration: 0 }}
        className="mt-3 text-4xl leading-tight text-slate-800 md:text-5xl"
      >
        feel a little different...
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={
          active
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 30 }
        }
        transition={active ? {
          delay: 1.5,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        } : {
          duration: 0
        }}
      >
        <div className="mt-8 my-4 flex justify-center">
          <img
            src="/images/qubysitting.gif"
            alt="Celebration"
            className="h-32 w-32 object-contain"
          />
        </div>
      </motion.div>


      <ScrollIndicator />
    </div>
  );
}