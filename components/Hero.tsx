// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="flex min-h-screen items-center justify-center px-6">

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-3xl text-center"
//       >

//         <p className="mb-6 text-lg text-gray-500">
//           Assalamu Alaikum
//         </p>

//         <h1 className="gradient-text mb-6 text-6xl font-bold">

//           Happy Birthday

//         </h1>

//         <h2 className="mb-8 text-3xl">

//           To someone who heals lives with compassion
//           and inspires everyone around her.

//         </h2>

//         <p className="text-gray-600">

//           Every beautiful journey begins with
//           sincerity, patience and Allah's blessings.

//         </p>

//         <div className="mt-16 animate-bounce text-3xl">

//           ↓

//         </div>

//       </motion.div>

//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="section relative flex flex-col items-center justify-center px-8 text-center overflow-hidden">

//       {/* Moon */}
//       <motion.div
//         animate={{
//           y: [0, -12, 0],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 6,
//           ease: "easeInOut",
//         }}
//         className="mb-10 text-5xl"
//       >
//         ☾
//       </motion.div>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: .3 }}
//         className="uppercase tracking-[0.35em] text-sm text-slate-500"
//       >
//         Assalāmu 'Alaikum
//       </motion.p>

//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: .8 }}
//         className="mt-6 text-5xl md:text-7xl leading-tight"
//       >
//         Today's story is about
//         <br />
//         someone who spends
//         <br />
//         her days helping others.
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="mt-8 max-w-xl text-slate-600 leading-8"
//       >
//         A small celebration for someone whose compassion
//         makes the world a little brighter every day.
//       </motion.p>

//       <motion.div
//         animate={{
//           y: [0, 12, 0],
//         }}
//         transition={{
//           repeat: Infinity,
//           duration: 2,
//         }}
//         className="absolute bottom-12 text-sm tracking-widest text-slate-500"
//       >
//         Scroll ↓
//       </motion.div>

//     </section>
//   );
// }