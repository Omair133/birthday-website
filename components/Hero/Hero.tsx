"use client";

import Moon from "./Moon";

export default function Hero() {
  return (
    <section className="relative h-[300vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Slides */}
        <div className="flex flex-col">

          {/* Screen 1 */}
          <div className="flex h-screen flex-col items-center justify-center">

            <Moon />

            <p className="mt-8 text-xs uppercase tracking-[0.45em] text-slate-500">
              Assalāmu 'Alaikum
            </p>

          </div>

          {/* Screen 2 */}
          <div className="flex h-screen items-center justify-center px-8">

            <h1 className="text-center font-serif text-5xl md:text-7xl">
              Some birthdays
              <br />
              feel a little different.
            </h1>

          </div>

          {/* Screen 3 */}
          <div className="flex h-screen flex-col items-center justify-center px-8 text-center">

            <p className="font-serif text-4xl md:text-5xl">
              This is one of them.
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600 md:text-2xl">
              A birthday...
              <br />
              and the beginning
              <br />
              of a beautiful new journey,
              <br />
              <span className="italic">
                In shā' Allāh.
              </span>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}