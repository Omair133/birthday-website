"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Letter from "./Letter"

interface LetterUnlockProps {
    active: boolean;
}

export default function LetterUnlock({
    active,
}: LetterUnlockProps) {
    const [date, setDate] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const [questionTwo, setQuestionTwo] = useState(false);
    const [animal, setAnimal] = useState("");
    const [questionTwoError, setQuestionTwoError] = useState(false);

    const [envelopeOpen, setEnvelopeOpen] = useState(false);
    const [showLetter, setShowLetter] = useState(false);
    const [proceed, setProceed] = useState(false);

    const handleProceed = () => {
        setProceed(true);
    };

    const handleContinue = () => {
        if (date === "2025-07-13") {
            setError(false);
            setQuestionTwo(true);
        } else {
            setError(true);
        }
    };

    const handleQuestionTwo = () => {
        if (animal.trim().toLowerCase() === "panda" || animal.trim().toLowerCase() === "pandas") {
            setQuestionTwoError(false);
            setUnlocked(true);

            // 🎉 Celebration
            confetti({
                particleCount: 120,
                spread: 80,
                startVelocity: 35,
                origin: {
                    x: 0.5,
                    y: 0.6,
                },
                colors: [
                    "#c8a96a",
                    "#e8d5a8",
                    "#f5ead5",
                    "#ffffff",
                    "#b89b5e",
                ],
            });
        } else {
            setQuestionTwoError(true);
        }
    };

    return (
        <div className="flex h-full items-center justify-center px-8">
            <div className="w-full max-w-md text-center">

                {/* Heading */}
                <AnimatePresence>
                    {!unlocked && !proceed && (
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={
                                active
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 25 }
                            }
                            exit={{
                                opacity: 0,
                                y: -20,
                                transition: {
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
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
                        >
                            <motion.h2

                                className="font-serif text-2xl text-slate-800"
                            >
                
                                There is a special letter written just for you.
                                <div className="flex justify-center">
                                    <img
                                        src="/images/smirk.webp"
                                        alt="Celebration"
                                        className="h-32 w-32 object-contain"
                                    />
                                </div>
                                But, first I need to some verification.
                                <div className="mt1 flex justify-center">
                                    <img
                                        src="/images/qubyknife.gif"
                                        alt="Celebration"
                                        className="h-32 w-32 object-contain"
                                    />
                                </div>
                                Answer 2 questions to reveal the letter.
                                
                            </motion.h2>
                            <motion.button
                                whileTap={{ scale: 0.96 }}
                                onClick={handleProceed}
                                className="
                mt-8
                rounded-full
                bg-[var(--gold)]
                px-8
                py-3
                font-medium
                text-white
                transition
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
                            >
                                Continue
                            </motion.button>
                        </motion.div>
                    )}

                    {unlocked && !showLetter && (
                        <motion.h2
                            initial={{ opacity: 0, y: 25 }}
                            animate={
                                active
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 25 }
                            }
                            exit={{
                                opacity: 0,
                                y: -20,
                                transition: {
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
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
                            className="text-2xl text-slate-800"
                        >
                            Sahi jawaab! 🫡
                            <br />
                            <div className="my-4 flex justify-center">
                                <img
                                    src="/images/7crore.gif"
                                    alt="Celebration"
                                    className="h-32 w-32 object-contain"
                                />
                            </div>

                            Tap the envelope to view the special letter.
                            <div className="flex justify-center">
                                <img
                                    src="/images/qubyclap.gif"
                                    alt="Celebration"
                                    className="h-28 w-28 object-contain"
                                />
                            </div>
                        </motion.h2>
                    )}
                </AnimatePresence>

                {/* Question */}
                {!unlocked && proceed && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            active
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={
                            active
                                ? {
                                    delay: 0.6,
                                    duration: 1,
                                }
                                : {
                                    duration: 0,
                                }
                        }
                        className="mt-1"
                    >
                        <div className="flex justify-center">
                            <img
                                src="/images/qubychair.gif"
                                alt="Celebration"
                                className="h-32 w-32 object-contain"
                            />
                        </div>

                        {!questionTwo ? (
                            <>
                                <p className="
                                mt-8
                                mx-auto
        max-w-md
        rounded-2xl
        border
        border-[#d8c49a]/40
        bg-[#fffaf0]/75
        px-4
        py-3
        text-center
        font-serif
        text-lg
        leading-relaxed
        text-slate-900
        shadow-[0_8px_30px_rgba(120,90,40,0.08)]
        backdrop-blur-sm
        handwriting-kalam
                                ">
                                    Q1. Do you remember the date
                                    we first met at the restaurant?
                                </p>

                                {/* Date picker */}
                                <div className="mt-10">
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => {
                                            setDate(e.target.value);
                                            setError(false);
                                        }}
                                        className="
                  rounded-xl
                  border
                  border-slate-300
                  bg-white/60
                  px-5
                  py-3
                  text-center
                  text-md
                  text-slate-700
                  outline-none
                  transition
                  focus:border-[var(--gold)]
                  focus:ring-2
                  focus:ring-[var(--gold)]/20
                "
                                    />
                                </div>

                                {/* Continue */}
                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    onClick={handleContinue}
                                    disabled={!date}
                                    className="
                mt-8
                rounded-full
                bg-[var(--gold)]
                px-8
                py-3
                font-medium
                text-white
                transition
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
                                >
                                    Continue
                                </motion.button>

                                {/* Error */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-5 text-2xl text-slate-900"
                                    >
                                        Hmm... that's incorrect.
                                        <div className="flex justify-center">
                                            <img
                                                src="/images/qubyangry.gif"
                                                alt="Celebration"
                                                className="h-28 w-28 object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        ) : (
                            <>
                                <p className="
                                mt-8
                                mx-auto
        max-w-md
        rounded-2xl
        border
        border-[#d8c49a]/40
        bg-[#fffaf0]/75
        px-6
        py-5
        text-center
        font-serif
        text-lg
        leading-relaxed
        text-slate-900
        shadow-[0_8px_30px_rgba(120,90,40,0.08)]
        backdrop-blur-sm
        handwriting-kalam
                                ">
                                    Q2. Check our conversation on

                                    22nd August, 2025.

                                    Which animal was involved in the "Deal"?
                                </p>

                                <div className="mt-10">
                                    <input
                                        type="text"
                                        value={animal}
                                        onChange={(e) => {
                                            setAnimal(e.target.value);
                                            setQuestionTwoError(false);
                                        }}
                                        placeholder="Type your answer"
                                        autoComplete="off"
                                        className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-white/60
                px-5
                py-3
                text-center
                text-lg
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-[var(--gold)]
                focus:ring-2
                focus:ring-[var(--gold)]/20
            "
                                    />
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.96 }}
                                    onClick={handleQuestionTwo}
                                    disabled={!animal.trim()}
                                    className="
            mt-8
            rounded-full
            bg-[var(--gold)]
            px-8
            py-3
            font-medium
            text-white
            transition
            disabled:cursor-not-allowed
            disabled:opacity-40
        "
                                >
                                    Continue
                                </motion.button>

                                {questionTwoError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-5 text-2xl text-slate-900"
                                    >
                                        Hmm... that's incorrect.
                                        <div className="flex justify-center">
                                            <img
                                                src="/images/qubyangry.gif"
                                                alt="Celebration"
                                                className="h-28 w-28 object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        )}

                    </motion.div>
                )}

                {/* Unlocked */}
                {unlocked &&
                    (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-10 flex flex-col items-center"
                        >
                            {/* ENVELOPE WRAPPER */}
                            <motion.div
                                animate={
                                    showLetter
                                        ? {
                                            opacity: 0,
                                            scale: 0.95,
                                        }
                                        : {
                                            opacity: 1,
                                            scale: 1,
                                        }
                                }
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* YOUR EXISTING ENVELOPE */}
                                <motion.button
                                    type="button"
                                    onClick={() => {
                                        setEnvelopeOpen(true);

                                        setTimeout(() => {
                                            setShowLetter(true);
                                        }, 100);
                                    }}
                                    className="
        relative
        h-44
        w-64
        overflow-visible
        rounded-md
        border
        border-[#d8c8a8]
        bg-[#f5ead5]
        shadow-[0_15px_50px_rgba(120,90,40,0.15)]
    "
                                >

                                    {/* Envelope flap */}
                                    <div className="absolute left-0 top-0 z-10 h-16 w-full overflow-hidden">
                                        {/* Left flap line */}
                                        <div
                                            className="
      absolute
      left-0
      top-0
      h-[1px]
      w-[139px]
      origin-left
      rotate-[24deg]
      bg-[#d8c8a8]
    "
                                        />

                                        {/* Right flap line */}
                                        <div
                                            className="
      absolute
      right-0
      top-0
      h-[1px]
      w-[139px]
      origin-right
      -rotate-[24deg]
      bg-[#d8c8a8]
    "
                                        />
                                    </div>

                                    {/* Seal */}
                                    <motion.div
                                        animate={
                                            envelopeOpen
                                                ? {
                                                    scale: 0.8,
                                                    opacity: 0,
                                                }
                                                : {
                                                    scale: 1,
                                                    opacity: 1,
                                                }
                                        }
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        className="
    absolute
    left-1/2
    top-13
    z-20
    flex
    h-10
    w-10
    -translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-[var(--gold)]
    text-sm
    text-white
    shadow-[0_3px_12px_rgba(120,90,40,0.25)]
  "
                                    >
                                        ✦
                                    </motion.div>
                                </motion.button>

                            </motion.div>

                            {/* LETTER */}
                            <AnimatePresence>
                                {showLetter && (
                                    <motion.div
                                        initial={{
                                            y: "100%",
                                            // opacity: 0,
                                        }}
                                        animate={{
                                            y: 0,
                                            // opacity: 1,
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}

                                        className="
                        letter-scroll
                        absolute
                        top-20
                        bottom-15
                        left-8
                        right-8
                        z-50
                        overflow-y-auto
                        overflow-x-hidden
                        overscroll-contain
                        rounded-[2px]
                        bg-[#fffdf8]
bg-[radial-gradient(rgba(120,90,40,0.035)_0.6px,transparent_0.6px)]
[background-size:5px_5px]
                        shadow-[0_12px_40px_rgba(80,60,30,0.16)]
                    "
                                    >
                                        {/* Letter content goes here */}
                                        <div className="px-7 py-10 text-left">

                                            {/* Letter */}
                                            <div

                                                className="
        mt-4
        w-full
        min-w-0
        max-w-full
        space-y-7
        handwriting-kalam
text-[15px]
leading-[1.4rem]
tracking-[0.02em]
        text-[#4f4a42]
        whitespace-normal
        break-words
    "
                                            >
                                                <Letter></Letter>

                                            </div>


                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    )}

            </div>
        </div>
    );
}