"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import Gallery from "./Gallery";

export default function AboutSec() {
  return (
    <section className="py-20">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/Brooke.jpg"
                alt="Brooke - Massage Therapist"
                width={480}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-spa-cream shadow-lg hidden md:block">
              <Image
                src="/images/therapy1.jpg"
                alt="Treatment room"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-spa-orange font-medium text-sm uppercase tracking-wider">
              Meet Brooke
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 mb-6 text-balance">
              Your Expert Massage Therapist
            </h2>

            <div className="space-y-4 text-spa-brown/80 leading-relaxed">
              <p>
                Hello gentlemen, I’m Brooke. I’m 28 years old, single, and
                independent.
              </p>

              <p>
                With over years of experience in therapeutic massage and
                holistic wellness, I've dedicated my career to mastering both
                traditional healing techniques and contemporary spa innovations.
                My journey began with a passion for helping others find relief
                from pain and stress.
              </p>

              <p>
                I’m fun, sweet, sensual, and easygoing, with a great sense of
                humor. I enjoy good conversation, great company, and always
                treat others with respect.
              </p>

              <p>
                I’m available for both incall and outcall, and I offer a
                full-service experience for generous, respectful gentlemen. No
                games, please—I’m here for genuine, respectful arrangements
                only.
              </p>

              <p>
                My mission is to provide you with an exceptional wellness
                experience in a warm, Let me give you an unforgettable
                experience you’ll want to come back to.
              </p>
            </div>

             {/* <div className="mt-30">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-spa-orange px-8 py-4 text-white transition hover:bg-white hover:text-spa-brown"
              >

                 
                   
                Book Your Session

                <ArrowRight size={18} />
              </Link>
            </div> */}
          </motion.div>
        </div>

       
      </div>

      <Gallery/>
    </section>
  );
}