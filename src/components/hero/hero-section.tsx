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
            backgroundImage: "url('/images/heroimg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-dark/15 to-spa-brown/10" />
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
            pt-[350px]
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
                mt-2
                max-w-3xl
                text-spa-cream/90
                text-lg
                md:text-xl
                leading-6
                md:mx-auto
              "
            >
             "Expert therapeutic massage to restore your mind, body, and wellness.
            </p>
          </Fade>

          {/* Buttons */}
          <div
            className="
    mt-6
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
