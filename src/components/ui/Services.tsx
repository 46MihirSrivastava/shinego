"use client";

import { motion } from "framer-motion";
import { Car, Bike, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car Wash",
    description:
      "Premium exterior and interior cleaning using high-quality products.",
  },
  {
    icon: Bike,
    title: "Bike Wash",
    description:
      "Complete bike detailing with foam wash, tyre cleaning and polish.",
  },
  {
    icon: Sparkles,
    title: "Premium Detailing",
    description:
      "Deep cleaning, waxing, polishing and paint protection.",
  },
  {
    icon: ShieldCheck,
    title: "Ceramic Coating",
    description:
      "Long-lasting shine and protection for your vehicle.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Premium Vehicle Care
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Professional doorstep car and bike detailing with eco-friendly
            products, trained experts and premium equipment.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-400 text-black transition-all duration-300 group-hover:rotate-6">
                  <Icon size={40} />
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-yellow-400 font-semibold">
                  Learn More →
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}