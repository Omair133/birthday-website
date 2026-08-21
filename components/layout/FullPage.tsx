"use client";

import { useEffect, useRef } from "react";
import "fullpage.js/dist/fullpage.css";

interface FullPageProps {
  children: React.ReactNode;
  onSectionChange?: (index: number) => void;
}

export default function FullPage({
  children,
  onSectionChange,
}: FullPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullPageRef = useRef<any>(null);

  // Always keep the latest callback
  const onSectionChangeRef = useRef(onSectionChange);

  useEffect(() => {
    onSectionChangeRef.current = onSectionChange;
  }, [onSectionChange]);

  // Initialize fullPage.js only once
  useEffect(() => {
    if (!containerRef.current) return;

    let cancelled = false;

    import("fullpage.js").then(({ default: FullPage }) => {
      if (cancelled || !containerRef.current) return;

      // Prevent duplicate initialization
      if (fullPageRef.current) return;

      type FullPageOptionsWithNormalScroll =
        ConstructorParameters<typeof FullPage>[1] & {
          normalScrollElements?: string;
        };

      const options: FullPageOptionsWithNormalScroll = {
        licenseKey: "gplv3-license",

        autoScrolling: true,
        fitToSection: true,
        scrollingSpeed: 900,

        navigation: false,
        scrollOverflow: false,

        // Let the letter handle its own touch scrolling
        normalScrollElements: ".letter-scroll, .scratch-card",

        afterLoad: (_, destination) => {
          onSectionChangeRef.current?.(destination.index);
        },

        credits: {
          enabled: false,
        },
      };

      fullPageRef.current = new FullPage(
        containerRef.current,
        options
      );
    });

    return () => {
      cancelled = true;

      if (fullPageRef.current) {
        fullPageRef.current.destroy("all");
        fullPageRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} id="fullpage">
      {children}
    </div>
  );
}