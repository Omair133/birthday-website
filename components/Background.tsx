"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl"/>

      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-green-200 opacity-20 blur-3xl"/>

      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 opacity-10 blur-3xl"/>

    </div>
  );
}