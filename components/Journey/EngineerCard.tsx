"use client";

export default function EngineerCard() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white/80 p-6 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      <div className="mb-4 flex gap-2">

        <div className="h-3 w-3 rounded-full bg-red-300"/>

        <div className="h-3 w-3 rounded-full bg-yellow-300"/>

        <div className="h-3 w-3 rounded-full bg-green-300"/>

      </div>

      <p className="mb-6 text-sm text-slate-500">
        future.ts
      </p>

      <pre className="text-sm leading-8 text-slate-700 overflow-hidden">{`const future = {
  respect: true,
  sabr: true,
  kindness: true,
  barakah: "In shā' Allāh",
}`}</pre>

    </div>
  );
}