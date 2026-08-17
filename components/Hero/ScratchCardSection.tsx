"use client";

import { motion } from "framer-motion";
import ScratchCard from "./ScratchCard";
import ScrollIndicator from "./ScrollIndicator";

interface ScratchCardSectionProps {
    active: boolean;
}

export default function ScratchCardSection({
    active,
}: ScratchCardSectionProps) {
    return (
        <div className="flex h-full items-center justify-center px-8">
            <div className="w-full max-w-md">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        active
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                    }
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center"
                >
                    <p className="font-serif text-3xl text-slate-800">
                        Almost a year...
                    </p>

                    <p className="mt-3 font-serif text-md text-slate-600">
                        A little thought I'd like you to uncover.
                    </p>
                </motion.div>

                {/* Scratch Card */}
                <div className="mt-8">
                    <ScratchCard />
                </div>

            </div>
            <ScrollIndicator />
        </div>
    );
}