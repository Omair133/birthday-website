"use client";

interface Phase2Props {
  active: boolean;
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Scene from "@/components/Scene";
import Typewriter from "@/components/Typewriter";
import ScrollIndicator from "./ScrollIndicator";

export default function Phase2({active}:Phase2Props) {

//   const ref = useRef<HTMLDivElement>(null);

//   const isInView = useInView(ref, {
//     once: true,
//     amount: 0.6,
//   });

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
  if (active) {
    setStartTyping(true);
  } else {
    setStartTyping(false);
  }
}, [active]);

  return (
    
      <div
        className="mx-auto max-w-3xl text-center"
      >
        <div className="min-h-[90px]">
          <Typewriter
            start={startTyping}
            text="This is one of them.."
            speed={120}
            className="font-serif text-4xl md:text-5xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            active && startTyping
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            delay: 3,
            duration: 1,
          }}
          className="mt-10"
        >
          <p className="text-lg leading-8 text-slate-600 md:text-2xl">
            A birthday...and a year
            <br />
            which will mark the beginning
            <br />
             of a beautiful new journey,
            <br />
            <span className="italic">
              In shā' Allāh.
            </span>
          </p>
        </motion.div>
        <ScrollIndicator />
      </div>
    
  );
}