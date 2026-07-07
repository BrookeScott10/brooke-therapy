"use client";

import { useState } from "react";
import { Heart, Hand, Flame, Dumbbell, Flower2, Sparkles } from "lucide-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import BookingModal from "../booking/booking-modal";

const services = [
  {
    id: "swedish",
    title: "SWEDISH MASSAGE",
    icon: Heart,
    description:
      "Gentle massage that relieves stress, improves circulation, and promotes deep relaxation.",
  },
  {
    id: "deep-tissue",
    title: "DEEP TISSUE MASSAGE",
    icon: Hand,
    description:
      "Firm pressure designed to release chronic muscle tension and stiffness.",
  },
  {
    id: "hot-stone",
    title: "HOT STONE MASSAGE",
    icon: Flame,
    description:
      "Heated stones melt away stress while soothing tight muscles and improving circulation.",
  },
  {
    id: "sports",
    title: "SPORTS MASSAGE",
    icon: Dumbbell,
    description:
      "Perfect for athletes to improve recovery, flexibility, and performance.",
  },
  {
    id: "aromatherapy",
    title: "AROMATHERAPY MASSAGE",
    icon: Flower2,
    description:
      "Relaxing massage enhanced with essential oils for complete mind and body wellness.",
  },
  {
    id: "nuru",
    title: "NURU MASSAGE",
    icon: Sparkles,
    description:
      "A luxurious body-to-body massage designed for a deeply relaxing experience.",
  },
];

export default function RateCardSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState("");

  const openBooking = (service: string) => {
    setSelectedBooking(service);
    setIsBookingOpen(true);
  };

  return (
    <>
      <section className="bg-[#c5d0ad] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <Fade direction="up" duration={1200} triggerOnce>
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#c56a1f]">
                Our Services
              </p>

              <h2 className="mt-3 font-serif text-5xl text-[#2f241d]">
                Massage Treatments
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-700">
                Choose from our premium massage treatments. Select your
                preferred duration and pricing during booking.
              </p>
            </div>
          </Fade>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Slide
                  key={service.id}
                  direction={index < 3 ? "right" : "left"}
                  delay={index * 200}
                  duration={1200}
                  triggerOnce
                >
                  <div
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      rounded-3xl
                      bg-white
                      p-8
                      shadow-md
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:shadow-2xl
                    "
                  >
                    {/* Icon */}
                    <Zoom duration={800} triggerOnce>
                      <div
                        className="
                          mb-6
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#f8efe5]
                          transition-all
                          duration-500
                          group-hover:bg-[#d97706]
                        "
                      >
                        <Icon
                          className="
                            text-[#d97706]
                            transition-colors
                            duration-500
                            group-hover:text-white
                          "
                          size={34}
                          strokeWidth={1.8}
                        />
                      </div>
                    </Zoom>

                    <h3 className="font-serif text-2xl uppercase leading-tight text-[#3b2417]">
                      {service.title}
                    </h3>

                    <p className="mt-4 flex-grow leading-7 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-8 border-t border-gray-100 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                        Starting From
                      </p>

                      <div className="mt-2 flex items-end gap-2">
                        <span className="text-4xl font-bold text-[#d97706]">
                          $250
                        </span>

                        <span className="pb-1 text-gray-500">/ hour</span>
                      </div>
                    </div>

                    <button
                      onClick={() => openBooking(service.id)}
                      className="
                        mt-8
                        rounded-lg
                        border
                        border-[#d8c4ad]
                        px-8
                        py-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#3b2417]
                        transition-all
                        duration-500
                        hover:border-[#d97706]
                        hover:bg-[#d97706]
                        hover:text-white
                      "
                    >
                      Book Now
                    </button>
                  </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultBooking={selectedBooking}
      />
    </>
  );
}
