"use client";

import { motion } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400">
            BEFORE & AFTER
          </p>

          <h2 className="mt-4 text-5xl font-black">
            See The Difference
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Drag the slider to compare the vehicle before and after our
            professional detailing service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[32px] border border-yellow-500/20 shadow-2xl shadow-yellow-500/10"
        >
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/images/before.jpg"
                alt="Before"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/images/after.jpg"
                alt="After"
              />
            }
          />
        </motion.div>

      </div>
    </section>
  );
}