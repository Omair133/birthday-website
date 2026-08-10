"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

interface FutureSectionProps {
    active: boolean;
}

const items = [
    "More Birthdays.",
    "More du'as.",
    "More conversations.",
    "More memories.",
];

export default function FutureSection({
    active,
}: FutureSectionProps) {
    return (
        <div className="flex h-full items-center justify-center px-8">
            <div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={
                        active
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 25 }
                    }
                    transition={
                        active
                            ? {
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }
                            : {
                                duration: 0,
                            }
                    }
                    className="mb-14 text-center font-serif text-4xl text-slate-800"
                >
                    Looking forward to
                </motion.h2>

                <div className="flex justify-center">


                    {/* Text */}
                    <div>
                        {items.map((item, index) => (
                            <div key={item} className="flex">

                                {/* Timeline */}
                                <div className="mr-6 flex flex-col items-center">

                                    {/* Dot */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0,
                                        }}
                                        animate={
                                            active
                                                ? {
                                                    opacity: 1,
                                                    scale: 1,
                                                }
                                                : {
                                                    opacity: 0,
                                                    scale: 0,
                                                }
                                        }
                                        transition={
                                            active
                                                ? {
                                                    delay: index * 1.2,
                                                    duration: 1.2,
                                                }
                                                : {
                                                    duration: 0,
                                                }
                                        }
                                        className="mt-2 h-2.5 w-2.5 rounded-full bg-[#f4e2b0] shadow-[0_0_18px_rgba(244,226,176,.9)]"
                                    />

                                    {/* Connecting Line */}
                                    {index !== items.length - 1 && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={
                                                active
                                                    ? {
                                                        height: 50,
                                                    }
                                                    : {
                                                        height: 0,
                                                    }
                                            }
                                            transition={
                                                active
                                                    ? {
                                                        delay: index * 1.2 + 0.35,
                                                        duration: 1.2,
                                                    }
                                                    : {
                                                        duration: 0,
                                                    }
                                            }
                                            className="mt-1 w-[2px] rounded-full bg-[var(--gold)]"
                                        />
                                    )}

                                </div>

                                {/* Text */}
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        x: 35,
                                    }}
                                    animate={
                                        active
                                            ? {
                                                opacity: 1,
                                                x: 0,
                                            }
                                            : {
                                                opacity: 0,
                                                x: 35,
                                            }
                                    }
                                    transition={
                                        active
                                            ? {
                                                delay: index * 1.2 + 0.5,
                                                duration: 1.2,
                                                ease: [0.22, 1, 0.36, 1],
                                            }
                                            : {
                                                duration: 0,
                                            }
                                    }
                                    className="mb-2 font-serif text-2xl text-slate-800"
                                >
                                    {item}
                                </motion.p>
                            </div>
                        ))}

                        <motion.p
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={
                                active
                                    ? {
                                        opacity: 1,
                                        scale: 1,
                                    }
                                    : {
                                        opacity: 0,
                                        scale: 0.95,
                                    }
                            }
                            transition={
                                active
                                    ? {
                                        delay: items.length * 1.2 + 0.6,
                                        duration: 1,
                                    }
                                    : {
                                        duration: 0,
                                    }
                            }
                            className="mt-8 text-center font-serif text-3xl italic text-[var(--gold)]"
                        >
                            In shā' Allāh.
                        </motion.p>
                    </div>

                </div>
            </div>
            <ScrollIndicator />
        </div>
    );
}