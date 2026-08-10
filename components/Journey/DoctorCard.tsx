"use client";

export default function DoctorCard() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white/80 p-6 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      <h3 className="text-lg font-semibold">
        Patient Monitor
      </h3>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">

          <span>Status</span>

          <span className="text-emerald-600">
            Ready
          </span>

        </div>

        <div className="border-t border-stone-200 pt-6">

          <p className="text-slate-500">

            Preparing for a
            <br />
            beautiful new chapter.

          </p>

        </div>

        <div className="pt-4 text-lg">

          ❤️ Stable

        </div>

      </div>

    </div>
  );
}