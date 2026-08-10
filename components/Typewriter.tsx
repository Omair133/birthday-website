"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  start?: boolean;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 50,
  start = true,
  className = "",
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) {
      setDisplayed("");
      return;
    }

    let i = 0;

    const interval = setInterval(() => {
      i++;

      setDisplayed(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [start, speed, text]);

  return <span className={className}>{displayed}</span>;
}