"use client";

interface BirthdaySectionProps {
    active: boolean;
    name: string;
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import ScrollIndicator from "./ScrollIndicator";

export default function BirthdaySection({
    active,
    name,
}: BirthdaySectionProps) {
    const [showBlast, setShowBlast] = useState(false);

    useEffect(() => {
        if (!active) {
            setShowBlast(false);
            return;
        }

        const startTimer = setTimeout(() => {
            setShowBlast(true);
        }, 100);

        const stopTimer = setTimeout(() => {
            setShowBlast(false);
        }, 10500); // 2.5s delay + 6s display

        return () => {
            clearTimeout(startTimer);
            clearTimeout(stopTimer);
        };
    }, [active]);



    return (
        <div className="relative flex h-full items-center justify-center overflow-hidden px-8">

            {showBlast && (
                <Confetti
                    recycle={false}
                    numberOfPieces={800}
                    gravity={0.08}
                />
            )}

            <div className="text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={
                        active
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 25 }
                    }
                    transition={{
                        duration: 1,
                    }}
                    className="font-serif text-4xl leading-tight text-slate-800 md:text-4xl"
                >
                    Many many happy
                    <br />
                    returns of the day!
                </motion.h1>

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.5,
                    }}

                    animate={
                        active
                            ? {
                                opacity: 1,
                                y: 0,
                                scale: 1.5,
                                textShadow: [
                                    "0 0 10px rgba(200,169,106,0.2)",
                                    "0 0 24px rgba(200,169,106,0.5)",
                                    "0 0 10px rgba(200,169,106,0.2)",
                                ],
                            }
                            : {
                                opacity: 0,
                                y: 20,
                                scale: 0.9,
                            }
                    }
                    transition={active ? {
                        delay: 1.2,
                        duration: 1.2,
                        textShadow: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    } : {
                        duration: 0
                    }}
                    className="mt-8
    font-serif
    text-5xl
    font-semibold
    text-[var(--gold)]
    
    md:text-6xl"
                >
                    {name}
                </motion.h2>
                <motion.div

                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        active
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 60 }
                    }
                    transition={active ? {
                        delay: 2.2,
                        duration: 2,
                        ease: [0.22, 1, 0.36, 1],
                    } : {
                        duration: 0
                    }} className="mt-15">
                    <div className="mt-8 my-4 flex justify-center">
                        <img
                            src="/images/qubyflower.webp"
                            alt="Celebration"
                            className="h-32 w-32 object-contain"
                        />
                    </div>
                </motion.div>

            </div>
            <ScrollIndicator />
        </div>
    );
}