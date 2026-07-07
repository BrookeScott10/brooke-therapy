"use client";

import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-spa-cream">
      {/* Hero Section */}
      <section className="relative pt-14 pb-20 bg-spa-sage-dark overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Slide direction="up" triggerOnce duration={1200}>
              <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mb-6 text-balance">
                About Massage Therapy by Brooke
              </h1>
            </Slide>

            <Fade delay={300} duration={1200} triggerOnce direction="up">
              <p className="text-spa-cream/90 text-lg leading-relaxed">
                A sanctuary of wellness where ancient healing traditions meet
                modern relaxation techniques.
              </p>
            </Fade>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      <section className="py-20">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade direction="up" duration={1200} triggerOnce>
              <div className="relative">
                {/* Main Image */}
                <Zoom duration={1400} triggerOnce>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden group">
                    <Image
                      src="/images/Brooke.jpg"
                      alt="Brooke - Massage Therapist"
                      width={480}
                      height={600}
                      className="
            object-cover 
            w-full 
            h-full 
            transition-transform 
            duration-1000 
            ease-out
            group-hover:scale-110
          "
                    />
                  </div>
                </Zoom>

                {/* Floating Image */}
                <Fade direction="left" delay={500} duration={1000} triggerOnce>
                  <div
                    className="
          absolute 
          -bottom-6 
          -right-6 
          w-48 
          h-48 
          rounded-2xl 
          overflow-hidden 
          border-4 
          border-spa-cream 
          shadow-lg 
          hidden 
          md:block
        "
                  >
                    <Image
                      src="/images/therapy1.jpg"
                      alt="Treatment room"
                      width={200}
                      height={200}
                      className="
            object-cover 
            w-full 
            h-full
            transition-transform
            duration-1000
            ease-out
            hover:scale-110
          "
                    />
                  </div>
                </Fade>
              </div>
            </Fade>

            <div>
              <TypeAnimation
                sequence={["Meet Brooke", 800]}
                wrapper="span"
                speed={50}
                cursor={false}
                className="text-spa-orange font-medium text-lg uppercase tracking-wider"
              />

              <TypeAnimation
                sequence={[1000, "Your Expert Massage Therapist"]}
                wrapper="h2"
                speed={40}
                cursor={false}
                className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 mb-6 text-balance"
              />

              <div className="space-y-4 text-xl text-spa-brown/80 leading-relaxed">
                <TypeAnimation
                  sequence={[
                    1800,
                    "Hello gentlemen, I’m Brooke. I’m 28 years old, single, and independent.",
                  ]}
                  wrapper="p"
                  speed={35}
                  cursor={false}
                />

                <TypeAnimation
                  sequence={[
                    4000,
                    "With over years of experience in therapeutic massage and holistic wellness, I've dedicated my career to mastering both traditional healing techniques and contemporary spa innovations. My journey began with a passion for helping others find relief from pain and stress.",
                  ]}
                  wrapper="p"
                  speed={25}
                  cursor={false}
                />

                <TypeAnimation
                  sequence={[
                    8500,
                    "I’m fun, sweet, sensual, and easygoing, with a great sense of humor. I enjoy good conversation, great company, and always treat others with respect.",
                  ]}
                  wrapper="p"
                  speed={30}
                  cursor={false}
                />

                <TypeAnimation
                  sequence={[
                    12000,
                    "I’m available for both incall and outcall, and I offer a full-service experience for generous, respectful gentlemen. No games, please—I’m here for genuine, respectful arrangements only.",
                  ]}
                  wrapper="p"
                  speed={25}
                  cursor={false}
                />

                <TypeAnimation
                  sequence={[
                    16000,
                    "My mission is to provide you with an exceptional wellness experience in a warm, relaxing environment. Let me give you an unforgettable experience you’ll want to come back to.",
                  ]}
                  wrapper="p"
                  speed={25}
                  cursor={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
  

<section className="mt-10 lg:mt-32 overflow-hidden">
  <div className="max-w-[1236px] mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          src: "/images/brok.jpg",
          alt: "Massage room",
          title: "Peaceful Environment",
        },
        {
          src: "/images/brok1.jpg",
          alt: "Spa setup",
          title: "Luxury Treatment Space",
        },
        {
          src: "/images/brok2.jpg",
          alt: "Relaxing atmosphere",
          title: "Relaxation & Comfort",
        },
        {
          src: "/images/brok3.jpg",
          alt: "Massage experience",
          title: "Wellness Experience",
        },
      ].map((image, index) => (
        <Slide
          key={image.src}
          direction="right"
          delay={index * 250}
          duration={1000}
          triggerOnce
        >
          <div
            className="
              group
              relative
              aspect-square
              overflow-hidden
              rounded-3xl
              shadow-lg
              transition-all
              duration-700
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >

            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1500ms]
                ease-out
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            />

            {/* Inner border */}
            <div
              className="
                absolute
                inset-4
                rounded-2xl
                border
                border-white/30
                opacity-0
                scale-95
                transition-all
                duration-700
                group-hover:opacity-100
                group-hover:scale-100
              "
            />

            {/* Text */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-6
                translate-y-10
                opacity-0
                transition-all
                duration-700
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <h3 className="text-white font-serif text-xl tracking-wide">
                {image.title}
              </h3>

              <div className="mt-3 h-[2px] w-12 bg-spa-orange" />
            </div>

          </div>
        </Slide>
      ))}

    </div>

  </div>
</section>
      </section>
    </main>
  );
}
