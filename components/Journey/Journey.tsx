"use client";

import EngineerCard from "./EngineerCard";
import DoctorCard from "./DoctorCard";

export default function Journey() {
  return (
    <section className="relative px-6 py-40">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-32 text-center">

          <p className="text-xs uppercase tracking-[0.45em] text-amber-700">
            Our Story
          </p>

          <h2 className="mt-6 font-serif text-5xl text-slate-800 md:text-7xl">
            The Journey Begins
          </h2>

        </div>


        {/* Timeline Container */}
        <div className="relative grid grid-cols-1 gap-y-24 md:grid-cols-12">

          {/* Engineer */}
          <div className="md:col-span-5">
            <EngineerCard />
          </div>


          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-amber-200 md:block" />


          {/* Doctor */}
          <div className="md:col-span-5 md:col-start-8 md:mt-64">
            <DoctorCard />
          </div>

        </div>


        {/* Closing Thought */}
        <div className="mt-40 text-center">

          <p className="font-serif text-3xl leading-relaxed text-slate-700 md:text-4xl">

            Different callings.

            <br />

            Shared values.

            <br />

            <span className="italic text-amber-700">
              One beautiful future, In shā' Allāh.
            </span>

          </p>

        </div>

      </div>

    </section>
  );
}