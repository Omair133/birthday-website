"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

interface DuaSectionProps {
    active: boolean;
}

const lines = [
    "May Allah bless you with",
    "good health,",
    "lasting happiness,",
    "peace in your heart,",
    "and barakah in every step you take.",
];

export default function DuaSection({ active }: DuaSectionProps) {
    return (
        <div className="flex h-full items-center justify-center px-8">
            <div className="text-center">
                {lines.map((line, index) => (
                    <motion.p
                        key={line}
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        animate={
                            active
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {
                                    opacity: 0,
                                    y: 35,
                                }
                        }
                        transition={
                            active
                                ? {
                                    delay: index * 1.1,
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }
                                : {
                                    duration: 0,
                                }
                        }
                        className="font-serif text-2xl leading text-slate-800 md:text-4xl"
                    >
                        {line}
                    </motion.p>
                ))}

                <motion.p
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={
                        active
                            ? {
                                opacity: 1,
                                scale: 1,
                            }
                            : {
                                opacity: 0,
                                scale: 0.9,
                            }
                    }
                    transition={
                        active
                            ? {
                                delay: lines.length * 1.1 + 0.6,
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }
                            : {
                                duration: 0,
                            }
                    }
                    className="mt-10 font-serif text-3xl italic text-[var(--gold)] md:text-4xl"
                >
                    Āmīn.
                </motion.p>
            </div>
            <ScrollIndicator />
        </div>
    );
}