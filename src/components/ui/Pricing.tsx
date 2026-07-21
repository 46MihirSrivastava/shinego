"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Bike Wash",
    price: "₹99",
    popular: false,
    features: [
      "Foam Wash",
      "Tyre Cleaning",
      "Body Wipe",
      "10-15 Minutes",
    ],
  },
  {
    title: "Car Wash",
    price: "₹399",
    popular: true,
    features: [
      "Exterior Wash",
      "Interior Vacuum",
      "Tyre Polish",
      "Dashboard Cleaning",
      "Doorstep Service",
    ],
  },
  {
    title: "Premium Detailing",
    price: "₹1499",
    popular: false,
    features: [
      "Complete Interior",
      "Wax Polish",
      "Engine Cleaning",
      "Glass Treatment",
      "Premium Finish",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-zinc-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-400">
            PRICING
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Simple & Transparent Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Affordable plans with no hidden charges. Professional service delivered right at your doorstep.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-yellow-400 bg-gradient-to-b from-yellow-400 to-yellow-500 text-black shadow-[0_0_40px_rgba(250,204,21,0.35)]"
                  : "border-yellow-500/20 bg-zinc-900 hover:border-yellow-400"
              }`}
            >

              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-black px-5 py-2 text-sm font-bold text-yellow-400">
                  ⭐ Most Popular
                </span>
              )}

              <p className="text-sm uppercase tracking-widest opacity-80">
                Starting From
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-5 text-5xl font-black">
                {plan.price}
              </p>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check size={18} />
                    <span>{feature}</span>
                  </div>

                ))}

              </div>

              <Button
                className={`mt-10 w-full rounded-full py-6 text-lg transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-black text-yellow-400 hover:bg-zinc-900"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                Book Now
              </Button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}