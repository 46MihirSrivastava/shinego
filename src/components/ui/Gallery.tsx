"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
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
            OUR WORK
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Premium Detailing Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A glimpse of the premium finish we deliver to every vehicle.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20"
            >
              <div className="relative h-80 overflow-hidden">

                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">
                    Premium Finish
                  </h3>

                  <p className="text-sm text-gray-300">
                    Professional ShineGo Detailing
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