"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/Particles";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Particles />

      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="ShineGo Car Wash"
        fill
        priority
        className="object-cover"
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Premium
          <br />
          <span className="text-yellow-400">
            Car & Bike Wash
          </span>
          <br />
          At Your Doorstep
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl"
        >
          Professional doorstep car and bike cleaning in Hajipur using
          eco-friendly products, trained professionals, and hassle-free
          booking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button className="rounded-full bg-yellow-400 px-8 py-6 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300">
            Book Now
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-yellow-400 px-8 py-6 text-lg font-semibold text-yellow-400 transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
          >
            WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {[
            "⭐ Professional Service",
            "🌿 Eco Friendly",
            "🏠 Doorstep Service",
            "💰 Affordable Pricing",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-200 backdrop-blur-md"
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}