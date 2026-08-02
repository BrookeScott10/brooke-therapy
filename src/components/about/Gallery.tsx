"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  "/images/brok.jpg",
  "/images/new.jpg",
  "/images/brok2.jpg",
  "/images/brok3.jpg",
];

export default function Gallery() {
  return (
    <section className="mt-10 lg:mt-32">

        <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#C8A97E]">
          Moments
        </p>

        <h3 className="mt-3 font-serif text-4xl text-[#332424]">
          Behind The Journey
        </h3>
      </div>
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={500}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}