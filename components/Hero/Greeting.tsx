"use client";

import Moon from "./Moon";
import ScrollIndicator from "./ScrollIndicator";

import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="mx-auto w-full max-w-6xl px-8">
        <div className="flex flex-col items-center text-center">

          <Moon />

          <motion.p
  initial={{
    opacity: 0,
    y: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 1.5,
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mt-10 text-md uppercase tracking-[0.45em] text-slate-500"
>
  Assalāmu 'Alaikum 
  <br></br>
  Wa' Rahmatullahi 
  <br></br>Wa' Barakatuh
</motion.p>

        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
}