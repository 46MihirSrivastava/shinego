"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "Vehicles Washed" },
  { number: "98%", label: "Happy Customers" },
  { number: "24/7", label: "Booking Support" },
  { number: "4.9★", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 text-center"
          >
            <h2 className="text-5xl font-black text-yellow-400">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}