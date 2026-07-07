"use client";

import { useState } from "react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { Button } from "../ui/button";
import GiftCardBalancePopup from "../giftCard/GiftCardBalancePopup";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [giftCardOpen, setGiftCardOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/broke5.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-dark/70 to-spa-brown/50" />
        </div>

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            max-w-5xl
            w-full
            mx-auto
            px-4

            items-center
            text-center
          "
        >
          {/* Title */}
          <h1
            className="
              font-serif
              text-4xl
              md:text-7xl
              lg:text-8xl
              text-spa-cream
              tracking-wide
            "
          >
            <TypeAnimation
              sequence={["BROOKE'S STUDIO", 3000]}
              wrapper="span"
              speed={45}
              cursor={false}
              repeat={0}
            />
          </h1>

          {/* Description */}
          <Fade delay={400} duration={1200} direction="up" triggerOnce>
            <p
              className="
                mt-8
                max-w-3xl
                text-spa-cream/90
                text-xl
                md:text-2xl
                leading-9
                md:mx-auto
              "
            >
              The pure sensation. Your expert therapeutic massage therapist
              uniquely skilled to help bring the entire mind, body and wellness
              awareness to life. Treating you with each session.
            </p>
          </Fade>

          {/* Buttons */}
          <div
            className="
    mt-12
    flex
    flex-col
    gap-4
    w-full
    items-stretch
    sm:flex-row
    sm:w-auto
    sm:items-center
    sm:justify-center
  "
          >
            {/* Button 1 */}
            <Slide direction="up" delay={900} duration={900} triggerOnce>
              <Button
                variant="outline"
                onClick={() => setGiftCardOpen(true)}
                className="w-full sm:w-auto   border
                  border-white
                  bg-spa-orange
                    hover:bg-white
                    hover:text-spa-brown
                    text-white
                  px-8 py-6 text-lg font-semibold rounded-lg"
              >
                Check Gift Card Balance
              </Button>
            </Slide>

            {/* Button 2 */}
            <Slide direction="up" delay={1100} duration={900} triggerOnce>
              <Link href="#reviews" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border border-white bg-spa-orange hover:bg-white hover:text-spa-brown text-white px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  Customer Reviews
                </Button>
              </Link>
            </Slide>

            {/* Button 3 */}
            <Slide direction="up" delay={1300} duration={900} triggerOnce>
              <Link href="#payment-methods" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border border-white bg-spa-orange hover:bg-white hover:text-spa-brown text-white px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  Payment Methods
                </Button>
              </Link>
            </Slide>
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
