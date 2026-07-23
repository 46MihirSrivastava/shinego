"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "100%", label: "Doorstep Service" },
  { number: "7 Days", label: "Booking Available" },
  { number: "Eco", label: "Friendly Products" },
  { number: "Local", label: "Serving Hajipur" },
];

export default function Stats() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="rounded-3xl border border-white/10 bg-zinc-900/80 p-8 text-center shadow-lg transition-all backdrop-blur-sm"
            >
              <h2 className="text-4xl font-extrabold text-yellow-400 md:text-5xl">
                {item.number}
              </h2>

              <p className="mt-3 text-sm text-gray-400 md:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}