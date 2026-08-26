"use client";

import { useState } from "react";
import {
  Heart,
  Hand,
  Flame,
  Dumbbell,
  Flower2,
  Sparkles,
} from "lucide-react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import BookingModal from "../booking/booking-modal";
import SpecialServiceModal from "../booking/special-service-modal";

const services = [
  {
    id: "special-service",
    title: "SPECIAL SERVICE (NURU + GFE + FS)",
    icon: Sparkles,
    description: "Full service with no restrictions",
    prices: [
      {
        duration: "60 Minutes",
        price: 350,
      },
      {
        duration: "90 Minutes",
        price: 400,
        recommended: true,
      },
      {
        duration: "120 Minutes",
        price: 500,
      },
    ],
  },
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
      "A luxurious massage designed for a deeply relaxing experience.",
  },
];

export default function RateCardSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSpecialModalOpen, setIsSpecialModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState("");

  const openBooking = (serviceId: string) => {
    if (serviceId === "special-service") {
      setIsSpecialModalOpen(true);
      return;
    }

    setSelectedBooking(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <>
      <section className="overflow-hidden bg-[#c5d0ad] py-20">
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
          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
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
                  <Zoom duration={700} triggerOnce>
                    <div
                      className="
                        mb-6
                        flex
                        h-16
                        w-16
                        shrink-0
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

                  {/* Title */}
                  <Slide direction="up" triggerOnce duration={700}>
                    <h3 className="font-serif text-2xl uppercase leading-tight text-[#3b2417]">
                      {service.title}
                    </h3>
                  </Slide>

                  {/* Description */}
                  <Fade triggerOnce delay={150} duration={900}>
                    <p className="mt-4 leading-7 text-gray-600">
                      {service.description}
                    </p>
                  </Fade>

                  {/* Pricing */}
                  {service.id === "special-service" ? (
                    <Zoom triggerOnce delay={250} duration={600}>
                      <div className="mt-8 border-t border-gray-100 pt-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                          Pricing
                        </p>

                        <div className="mt-4 space-y-3">
                          {service.prices.map((option) => (
                            <div
                              key={option.duration}
                              className="
                                flex
                                items-center
                                justify-between
                                rounded-xl
                                bg-[#faf8f5]
                                px-4
                                py-3
                              "
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-gray-600">
                                  {option.duration}
                                </span>

                                {option.recommended && (
                                  <span
                                    className="
                                      rounded-full
                                      bg-[#d97706]
                                      px-2.5
                                      py-1
                                      text-[10px]
                                      font-bold
                                      uppercase
                                      tracking-wide
                                      text-white
                                    "
                                  >
                                    Recommended
                                  </span>
                                )}
                              </div>

                              <span className="text-lg font-bold text-[#d97706]">
                                ${option.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Zoom>
                  ) : (
                    <Zoom triggerOnce delay={250} duration={600}>
                      <div className="mt-auto pt-8">
                        <div className="border-t border-gray-100 pt-6 mt-36">
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                            Starting From
                          </p>

                          <div className="mt-2 flex items-end gap-2">
                            <span className="text-4xl font-bold text-[#d97706]">
                              $250
                            </span>

                            <span className="pb-1 text-gray-500">
                              / hour
                            </span>
                          </div>
                        </div>
                      </div>
                    </Zoom>
                  )}

                  {/* Book Button */}
                  <button
                    onClick={() => openBooking(service.id)}
                    className="
                      mt-8
                      w-full
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Normal Services Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultBooking={selectedBooking}
      />

      {/* Special Service Modal */}
      <SpecialServiceModal
        isOpen={isSpecialModalOpen}
        onClose={() => setIsSpecialModalOpen(false)}
      />
    </>
  );
}
