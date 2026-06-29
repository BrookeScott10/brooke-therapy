"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useContact } from "@/hooks/use-contact";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "swedish-massage", name: "SWEDISH MASSAGE" },
  { id: "deep-tissue-massage", name: "DEEP TISSUE MASSAGE" },
  { id: "hot-stone-massage", name: "HOT STONE MASSAGE" },
  { id: "sports-massage", name: "SPORTS MASSAGE" },
  { id: "aromatherapy-massage", name: "AROMATHERAPY MASSAGE" },
  { id: "nuru-massage", name: "NURU MASSAGE" },
];

const bookingOptions = [
  { id: "1-hour", duration: "1 HOUR", price: "$250.00" },
  { id: "2-hours", duration: "2 HOURS", price: "$450.00" },
  { id: "3-hours", duration: "3 HOURS", price: "$550.00" },
  { id: "4-6-hours", duration: "4–6 HOURS", price: "$750.00" },
  { id: "10-12-hours", duration: "10–12 HOURS (OVERNIGHT/DAY)", price: "$1,000.00" },
];

// ✅ FULL TIME FORMAT
const timeSlots = [
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "1:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
  "5:00PM",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [selectedService, setSelectedService] = useState("");
  const [selectedBooking, setSelectedBooking] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [selectedTime, setSelectedTime] = useState("");
  const [customTime, setCustomTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const { mutate, isPending } = useContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const finalTime = customTime || selectedTime;

  const handleSubmit = () => {
    const selectedDuration = bookingOptions.find(
      (b) => b.id === selectedBooking
    );

    mutate(
      {
        type: "booking",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service:
          services.find((s) => s.id === selectedService)?.name ?? "",
        duration: selectedDuration?.duration ?? "",
        price: selectedDuration?.price ?? "",
        date: selectedDate,
        time: finalTime,
        notes: formData.notes,
      },
      {
        onSuccess: () => setIsSuccess(true),
        onError: (error) => alert(error.message),
      }
    );
  };

  const reset = () => {
    setStep(1);
    setSelectedService("");
    setSelectedBooking("");
    setSelectedDate("");
    setSelectedTime("");
    setCustomTime("");
    setFormData({ name: "", email: "", phone: "", notes: "" });
    setIsSuccess(false);
  };

  const close = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={close}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-spa-cream rounded-3xl shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute top-4 right-4 p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="p-8 border-b">
          <h2 className="text-2xl font-serif">Book Appointment</h2>

          {/* STEP INDICATOR (FIXED ALIGNMENT) */}
          {!isSuccess && (
            <div className="flex gap-3 mt-6 ml-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= s
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && (
                    <div className="w-10 h-0.5 bg-gray-300 mx-1" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BODY */}
        <div className="p-8">

          {/* SUCCESS */}
          {isSuccess ? (
            <div className="text-center">
              <h3 className="text-xl mb-4">Booking Confirmed</h3>
              <Button onClick={close}>Done</Button>
            </div>
          ) : (
            <>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-semibold">Select Service</h3>

                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`w-full p-4 border rounded-xl text-start ${
                        selectedService === s.id
                          ? "border-orange-500"
                          : ""
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}

                  <h3 className="font-semibold mt-6">
                    Select Duration
                  </h3>

                  {bookingOptions.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBooking(b.id)}
                      className="flex justify-between w-full p-4 border rounded-xl"
                    >
                      <span>{b.duration}</span>
                      <span>{b.price}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                       <h3 className="font-serif text-xl text-spa-brown">
                    Date
                  </h3>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) =>
                        setSelectedDate(e.target.value)
                      }
                    />
                  </div>

                  <div>
                       <h3 className="font-serif text-xl text-spa-brown">
                    Pick a Time
                  </h3>

                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => {
                            setSelectedTime(t);
                            setCustomTime("");
                          }}
                          className="p-2 border rounded"
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* CUSTOM TIME */}
                    <div className="mt-4">
                         <h3 className="font-serif text-xl text-spa-brown">
                    Choose Your Prefrred Time
                  </h3>
                      <Input
                        type="time"
                        value={customTime}
                        onChange={(e) => {
                          setCustomTime(e.target.value);
                          setSelectedTime("");
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
                 {step === 3 && (
                <div>
                  <h3 className="font-serif text-xl text-spa-brown mb-4">
                    Your Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-spa-brown flex items-center gap-2 mb-2"
                      >
                        <User className="w-4 h-4" /> Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your full name"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-spa-brown flex items-center gap-2 mb-2"
                      >
                        <Mail className="w-4 h-4" /> Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter your email"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-spa-brown flex items-center gap-2 mb-2"
                      >
                        <Phone className="w-4 h-4" /> Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Enter your phone number"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="notes"
                        className="text-spa-brown mb-2 block"
                      >
                        Special Requests (Optional)
                      </Label>
                      <textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        placeholder="Any special requests or notes..."
                        rows={3}
                        className="w-full border border-spa-beige rounded-xl p-3 focus:border-spa-orange focus:ring-1 focus:ring-spa-orange outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}

                {step < 3 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 &&
                        (!selectedService || !selectedBooking)) ||
                      (step === 2 &&
                        (!selectedDate ||
                          (!selectedTime && !customTime)))
                    }
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      isPending
                    }
                  >
                    {isPending ? "Booking..." : "Confirm"}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}