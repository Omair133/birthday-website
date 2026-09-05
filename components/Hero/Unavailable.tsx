"use client";

import { motion } from "framer-motion";

interface UnavailableProps {
    active: boolean;
}

export default function Unavailable({ active }: UnavailableProps) {
    return (
        <div className="flex flex-col items-center text-center">
            {/* <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={

                    { opacity: 1, y: 0 }

                }
                transition={{
                    duration: 2.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className=" text-4xl leading-tight text-slate-800 md:text-5xl"
            >
                Unapologetically unavailable
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                    { opacity: 1, y: 0 }

                }
                transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <div className="mt-8 my-4 flex justify-center">
                    <img
                        src="/images/emoji.png"
                        alt="Celebration"
                        className="h-32 w-32 object-contain"
                    />
                </div>
            </motion.div> */}

        </div>
    );
}