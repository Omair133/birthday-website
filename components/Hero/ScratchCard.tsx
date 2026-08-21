"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";
import { motion } from "framer-motion";

interface ScratchCardProps {
    onReveal?: () => void;
}

export default function ScratchCard({
    onReveal,
}: ScratchCardProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [revealed, setRevealed] = useState(false);
    const isDrawing = useRef(false);
    const hasStarted = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setupCanvas = () => {
            const rect = container.getBoundingClientRect();

            const dpr = window.devicePixelRatio || 1;

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            /*
             * Scratch surface
             */
            ctx.fillStyle = "#d8c49a";
            ctx.fillRect(0, 0, rect.width, rect.height);

            /*
             * Subtle texture
             */
            ctx.fillStyle = "rgba(255,255,255,0.12)";

            for (let i = 0; i < 250; i++) {
                const x = Math.random() * rect.width;
                const y = Math.random() * rect.height;

                ctx.beginPath();
                ctx.arc(x, y, Math.random() * 1.2, 0, Math.PI * 2);
                ctx.fill();
            }

            /*
             * Scratch instruction
             */
            ctx.fillStyle = "#6f6045";
            ctx.font = "500 17px var(--font-inter)";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(
                "Scratch to reveal",
                rect.width / 2,
                rect.height / 2
            );
        };

        setupCanvas();

        window.addEventListener("resize", setupCanvas);

        return () => {
            window.removeEventListener("resize", setupCanvas);
        };
    }, []);

    const getPosition = (
        event: React.PointerEvent<HTMLCanvasElement>
    ) => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return null;
        }

        const rect = canvas.getBoundingClientRect();

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };
    };

    const scratch = (
        event: React.PointerEvent<HTMLCanvasElement>
    ) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx || revealed) return;

        const position = getPosition(event);

        if (!position) return;

        ctx.globalCompositeOperation = "destination-out";

        ctx.beginPath();

        ctx.arc(
            position.x,
            position.y,
            22,
            0,
            Math.PI * 2
        );

        ctx.fill();

        hasStarted.current = true;
    };

    const checkReveal = () => {
        const canvas = canvasRef.current;

        if (!canvas || revealed || !hasStarted.current) {
            return;
        }

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const imageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );

        let transparentPixels = 0;

        /*
         * Sample every few pixels instead of checking
         * every pixel for better performance.
         */
        for (
            let i = 3;
            i < imageData.data.length;
            i += 16
        ) {
            if (imageData.data[i] === 0) {
                transparentPixels++;
            }
        }

        const totalPixels =
            imageData.data.length / 16;

        const percentage =
            transparentPixels / totalPixels;

        if (percentage > 0.55) {
            setRevealed(true);
            onReveal?.();

            /*
             * Remove remaining scratch layer.
             */
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
        }
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                scratch-card
                relative
                mx-auto
                w-full
                max-w-sm
                overflow-hidden
                rounded-2xl
                border
                border-[#d8c49a]/50
                bg-[#fffdf8]
                shadow-[0_15px_45px_rgba(120,90,40,0.12)]
            "
        >
            {/* Hidden message */}
            <div
                className="
                    flex
                    min-h-[230px]
                    items-center
                    justify-center
                    px-7
                    py-8
                    text-center
                    handwriting-kalam
                    text-[18px]
                    leading-7
                    tracking-[0.01em]
                    text-[#4f4a42]
                "
            >
                <div>
                    <p>
                        Almost a year of conversations, questions,
                        getting to understand each other, and learning
                        along the way.
                    </p>

                    <p className="mt-5">
                        And now, InshaAllah, we're getting closer
                        to the beginning of something much bigger
                        than this.
                    </p>

                    <p className="mt-5">
                        May Allah put barakah in everything that
                        lies ahead. 🤍
                    </p>
                </div>
            </div>

            {/* Scratch layer */}
            {!revealed && (
                <canvas
                    ref={canvasRef}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        touch-none
                        cursor-pointer
                    "
                    onPointerDown={(event) => {
                        isDrawing.current = true;

                        event.currentTarget.setPointerCapture(
                            event.pointerId
                        );

                        scratch(event);
                    }}
                    onPointerMove={(event) => {
                        if (!isDrawing.current) return;

                        scratch(event);
                    }}
                    onPointerUp={() => {
                        isDrawing.current = false;
                        checkReveal();
                    }}
                    onPointerCancel={() => {
                        isDrawing.current = false;
                        checkReveal();
                    }}
                />
            )}

            {/* Subtle revealed state */}
            {revealed && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-2xl
                        ring-1
                        ring-[#c8a96a]/20
                    "
                />
            )}
        </motion.div>
    );
}