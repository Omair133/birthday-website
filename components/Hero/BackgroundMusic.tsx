"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const fadeIn = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
        }

        let volume = 0;
        audio.volume = 0;

        fadeIntervalRef.current = setInterval(() => {
            volume += 0.02;

            if (volume >= 0.40) {
                volume = 0.40;

                if (fadeIntervalRef.current) {
                    clearInterval(fadeIntervalRef.current);
                    fadeIntervalRef.current = null;
                }
            }

            audio.volume = volume;
        }, 100);
    };

    const startMusic = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            await audio.play();

            setIsPlaying(true);
            fadeIn();

            return true;
        } catch {
            return false;
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.loop = true;
        audio.volume = 0;

        /*
         * Try autoplay immediately.
         */
        startMusic();

        /*
         * If autoplay is blocked, the first interaction
         * anywhere on the page will start the music.
         *
         * We deliberately ignore the music button itself,
         * because its own onClick handles playback.
         */
        const handleFirstInteraction = async (event: PointerEvent) => {
            const target = event.target as HTMLElement;

            if (target.closest("[data-music-button]")) {
                return;
            }

            const started = await startMusic();

            if (started) {
                window.removeEventListener(
                    "pointerdown",
                    handleFirstInteraction
                );
            }
        };

        window.addEventListener(
            "pointerdown",
            handleFirstInteraction
        );

        return () => {
            window.removeEventListener(
                "pointerdown",
                handleFirstInteraction
            );

            if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
            }
        };
    }, []);

    const toggleMusic = async () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            await startMusic();
        } else {
            audio.pause();
            setIsPlaying(false);

            if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
                fadeIntervalRef.current = null;
            }
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music/hbd.mp3"
                preload="auto"
                loop
            />

            <button
                type="button"
                data-music-button
                onClick={toggleMusic}
                aria-label={
                    isPlaying
                        ? "Pause background music"
                        : "Play background music"
                }
                className="
                    fixed
    right-5
    top-5
    z-[100]
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-[var(--gold)]
    text-white
    shadow-[0_4px_15px_rgba(120,90,40,0.20)]
    transition
    hover:bg-[var(--gold)]
    hover:shadow-[0_5px_18px_rgba(120,90,40,0.28)]
    active:scale-95
                "
            >
                <span className="flex h-4 items-center justify-center gap-[2px]">
                    {isPlaying ? (
                        <>
                            <span className="h-2 w-[2px] rounded-full bg-white animate-[musicBar_0.8s_ease-in-out_infinite]" />
                            <span className="h-4 w-[2px] rounded-full bg-white animate-[musicBar_0.6s_ease-in-out_infinite]" />
                            <span className="h-3 w-[2px] rounded-full bg-white animate-[musicBar_0.7s_ease-in-out_infinite]" />
                        </>
                    ) : (
                        <span className="text-lg text-white">
                            ♫
                        </span>
                    )}
                </span>
            </button>
        </>
    );
}