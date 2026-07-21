"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Kumar",
    city: "Hajipur",
    review:
      "Excellent doorstep service. My car looked brand new after the wash. Highly recommended!",
  },
  {
    name: "Priya Singh",
    city: "Vaishali",
    review:
      "Very professional staff and affordable pricing. Booking was quick and easy.",
  },
  {
    name: "Amit Sharma",
    city: "Patna",
    review:
      "Premium quality detailing. The ShineGo team arrived on time and did an amazing job.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-yellow-400">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-black">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Customer satisfaction is our biggest achievement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
            >
              <div className="mb-5 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-300">
                "{review.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold">
                    {review.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {review.city}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}