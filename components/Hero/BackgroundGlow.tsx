"use client";

export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-emerald-100/30 blur-3xl" />
    </>
  );
}