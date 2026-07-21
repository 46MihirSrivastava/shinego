"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Home,
  Star,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Professionals",
    description:
      "Experienced and trained staff using premium products for every wash.",
  },
  {
    icon: Clock3,
    title: "On-Time Service",
    description:
      "Book your preferred time and our team arrives at your doorstep.",
  },
  {
    icon: Home,
    title: "Doorstep Convenience",
    description:
      "No waiting in queues. We clean your vehicle right where you are.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description:
      "Attention to every detail for a spotless showroom-like finish.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Experience The ShineGo Difference
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            We combine professional detailing, doorstep convenience,
            premium products and customer-first service to deliver the
            best vehicle care experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black transition-all duration-300 group-hover:rotate-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}