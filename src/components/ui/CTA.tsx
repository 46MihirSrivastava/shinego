"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-yellow-500/20 bg-gradient-to-r from-zinc-900 via-black to-zinc-900 p-14 text-center shadow-2xl shadow-yellow-500/10"
        >

          <p className="uppercase tracking-[0.35em] text-yellow-400">
            BOOK TODAY
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-6xl">
            Give Your Vehicle
            <span className="block text-yellow-400">
              The Shine It Deserves
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Professional doorstep washing and detailing services with premium
            products, affordable pricing and hassle-free booking.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <Button className="rounded-full bg-yellow-400 px-10 py-7 text-lg font-semibold text-black hover:bg-yellow-300">
              Book Now
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-yellow-400 px-10 py-7 text-lg text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              WhatsApp Us
            </Button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}