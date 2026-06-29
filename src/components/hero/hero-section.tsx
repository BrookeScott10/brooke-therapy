"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";
import GiftCardBalancePopup from "../giftCard/GiftCardBalancePopup";

export default function HeroSection() {
  const [giftCardOpen, setGiftCardOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/broke.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-dark/70 to-spa-brown/50" />
        </div>

        <div className="relative flex flex-col justify-center pt-24 md:pt-32 max-w-[1236px] mx-auto px-6 w-full space-y-4">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-spa-cream tracking-wide">
            BROOKE&apos;S STUDIO
          </h1>

          <div className="max-w-2xl">
            <p className="text-spa-cream/90 text-sm md:text-xl mb-4 leading-[40px]">
              The pure sensation. Your expert therapeutic massage therapist
              uniquely skilled to help bring the entire mind, body and wellness
              awareness to life. Treating you with each session.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="border-1 border-white bg-spa-orange py-4 px-10 hover:bg-spa-orange-light text-spa-cream rounded-full text-base font-medium inline-flex items-center gap-2">
                  Contact Me Today
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={() => setGiftCardOpen(true)}
                className="border-1 border-white bg-spa-orange py-4 px-10 text-white hover:bg-white hover:text-spa-brown rounded-full text-base font-medium"
              >
                Check Gift Card Balance
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GiftCardBalancePopup
        open={giftCardOpen}
        onClose={() => setGiftCardOpen(false)}
      />
    </>
  );
}