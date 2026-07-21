"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/Particles";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
         <Particles />

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="ShineGo Car Wash"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

       <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
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
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-3xl text-lg text-gray-300 md:text-xl"
        >
          Professional doorstep car and bike detailing using eco-friendly
          products, trained professionals and hassle-free online booking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <Button className="rounded-full bg-yellow-400 px-8 py-6 text-lg text-black hover:bg-yellow-300">
            Book Now
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-yellow-400 px-8 py-6 text-lg text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            WhatsApp
          </Button>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span>⭐ Professional Service</span>
          <span>✓ Eco Friendly</span>
          <span>✓ Home Service</span>
          <span>✓ Affordable Pricing</span>
        </div>

      </div>

    </section>
  );
}