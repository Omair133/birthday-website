"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

interface LetterUnlockProps {
    active: boolean;
}

export default function LetterUnlock({
    active,
}: LetterUnlockProps) {
    const [date, setDate] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState(false);
    const [envelopeOpen, setEnvelopeOpen] = useState(false);
    const [showLetter, setShowLetter] = useState(false);

    const handleContinue = () => {
        if (date === "2025-07-13" || date === "2026-08-10") {
            setError(false);
            setUnlocked(true);
        } else {
            setError(true);
        }
    };

    return (
        <div className="flex h-full items-center justify-center px-8">
            <div className="w-full max-w-md text-center">

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
                    className="font-serif text-4xl text-slate-800"
                >
                    One last thing...
                </motion.h2>

                {/* Question */}
                {!unlocked && (
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
                        className="mt-8"
                    >
                        <p className="font-serif text-2xl leading-relaxed text-slate-700">
                            Do you remember the day
                            <br />
                            our journey began?
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
                  text-lg
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
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-5 text-sm text-slate-500"
                            >
                                Hmm... that's not the day I'm thinking of.
                            </motion.p>
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
    top-1/2
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
                        top-15
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
                                            <motion.div
    initial={{
        opacity: 0,
        y: 20,
    }}
    animate={{
        opacity: 1,
        y: 0,
    }}
    transition={{
        delay: 0.4,
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
    }}
    className="
        mt-4
        w-full
        min-w-0
        max-w-full
        space-y-7
        handwriting-kalam
text-[18px]
leading-[1.5rem]
tracking-[0.02em]
        text-[#4f4a42]
        whitespace-normal
        break-words
    "
>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere imperdiet tristique. Proin non felis accumsan, laoreet orci non, ultricies erat. Mauris vitae massa ut velit aliquet mattis in vel dolor. Integer in massa a lorem mattis mattis. Nunc sed lorem mauris. Suspendisse tellus leo, faucibus non dolor vitae, porta pretium quam. Donec gravida, risus a elementum egestas, sem nisl fringilla lorem, vel dictum ante lectus quis justo. Aliquam tempus, libero id mattis consequat, nisl lacus viverra eros, nec vulputate ipsum odio eget tortor. Quisque consequat nisi quis auctor pellentesque. Phasellus in elementum sem, vitae pellentesque dolor. Curabitur eleifend euismod ipsum, in porta lectus blandit in.
    </p>

    <p>
        Vestibulum fringilla ut libero et mattis. Nulla aliquam ante tortor, quis varius justo lacinia at. Integer fringilla mattis nibh sit amet mattis. Duis sollicitudin ante in fringilla semper. Nulla laoreet tortor eget lectus malesuada ullamcorper eu auctor tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui mauris, scelerisque a tempus consequat, sollicitudin quis odio. Suspendisse a tincidunt massa. Nunc ultricies magna ut blandit ultricies.
    </p>

    <p>
        Etiam sagittis blandit augue non vestibulum. Praesent lobortis ligula eu arcu feugiat congue. Ut odio nisi, feugiat a consectetur id, blandit id diam. In ac luctus libero. Phasellus sit amet felis nec dolor bibendum tempus suscipit consequat arcu. Aliquam dolor nulla, auctor at gravida tincidunt, dapibus ac massa. Vivamus pretium hendrerit elit in gravida. Aliquam sodales ac diam et hendrerit. Nullam ullamcorper lorem a arcu venenatis elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vel nibh egestas, pretium neque eget, vestibulum urna. Nullam a facilisis risus. Morbi blandit dolor metus, in finibus nibh ultricies quis. Quisque dictum, mauris eu finibus aliquam, urna tellus ultrices nisi, vitae ullamcorper metus metus a diam.
     </p>
</motion.div>


                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>


                            <p className="mt-8 font-serif text-xl text-slate-600">
                                A little something for you...
                            </p>

                        </motion.div>
                    )}

            </div>
        </div>
    );
}