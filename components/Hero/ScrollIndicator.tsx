"use client";

import { motion } from "framer-motion";



export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-5 justify-center rounded-full border border-slate-400">
          <motion.div
            animate={{ y: [2, 9, 4] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut"
            }}
            className="mt-2 h-2 w-2 rounded-full bg-slate-500"
          />
        </div>

        <p className="mt-2 text-xs tracking-[0.3em] text-slate-500">
          SCROLL
        </p>
      </div>
    </div>
  );
}