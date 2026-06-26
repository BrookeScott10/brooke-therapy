"use client"

import { useState } from "react"
import { X, Calendar, Clock, User, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}
const services = [
  { id: "swedish-massage", name: "SWEDISH MASSAGE" },
  { id: "deep-tissue-massage", name: "DEEP TISSUE MASSAGE" },
  { id: "hot-stone-massage", name: "HOT STONE MASSAGE" },
  { id: "sports-massage", name: "SPORTS MASSAGE" },
  { id: "aromatherapy-massage", name: "AROMATHERAPY MASSAGE" },
  { id: "nuru-massage", name: "NURU MASSAGE" },
]

const bookingOptions = [
  { id: "1-hour", duration: "1 HOUR", price: "$250.00" },
  { id: "2-hours", duration: "2 HOURS", price: "$450.00" },
  { id: "3-hours", duration: "3 HOURS", price: "$550.00" },
  { id: "4-6-hours", duration: "4–6 HOURS", price: "$750.00" },
  { id: "10-12-hours", duration: "10–12 HOURS (OVERNIGHT/DAY)", price: "$1,000.00" },
]
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedBooking, setSelectedBooking] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
 

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const resetForm = () => {
    setStep(1)
    setSelectedService("")
    setSelectedDate("")
    setSelectedTime("")
    setSelectedBooking("")
    setFormData({ name: "", email: "", phone: "", notes: "" })
    setIsSuccess(false)
    
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-spa-brown/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-spa-cream rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-spa-beige transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-spa-brown" />
        </button>

        {/* Header */}
        <div className="p-6 md:p-8 border-b border-spa-beige">
          <h2 className="font-serif text-2xl md:text-3xl text-spa-brown">Book Your Appointment</h2>
          <p className="text-spa-brown/70 mt-2">Schedule your relaxation journey with Brooke</p>

          {/* Progress Steps */}
          {!isSuccess && (
            <div className="flex items-center gap-2 mt-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step >= s ? "bg-spa-orange text-spa-cream" : "bg-spa-beige text-spa-brown/50"
                    }`}
                  >
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 h-0.5 mx-1 ${step > s ? "bg-spa-orange" : "bg-spa-beige"}`} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-spa-sage rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-spa-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-spa-brown mb-4">Booking Confirmed!</h3>
              <p className="text-spa-brown/70 mb-6">
                Thank you for booking with Massage Therapy by Brooke. We&apos;ve sent a confirmation email to{" "}
                {formData.email}
              </p>
              <div className="bg-spa-beige/50 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
                <h4 className="font-medium text-spa-brown mb-4">Appointment Details</h4>
                <div className="space-y-2 text-sm">
                   <p>
  <span className="font-medium text-spa-brown">
    Massage:
  </span>{" "}
  {services.find((s) => s.id === selectedService)?.name}
</p>

<p>
  <span className="font-medium text-spa-brown">
    Duration:
  </span>{" "}
  {bookingOptions.find(
    (b) => b.id === selectedBooking
  )?.duration}
</p>

<p>
  <span className="font-medium text-spa-brown">
    Price:
  </span>{" "}
  {bookingOptions.find(
    (b) => b.id === selectedBooking
  )?.price}
</p>
                  <p className="text-spa-brown/70">
                    <span className="font-medium text-spa-brown">Date:</span> {selectedDate}
                  </p>
                  <p className="text-spa-brown/70">
                    <span className="font-medium text-spa-brown">Time:</span> {selectedTime}
                  </p>
                  <p className="text-spa-brown/70">
                    <span className="font-medium text-spa-brown">Name:</span> {formData.name}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleClose}
                className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-8 py-3 rounded-full"
              >
                Done
              </Button>
            </div>
          ) : (
            <>
              {/* Step 1: Select Service */}
               {step === 1 && (
  <div>
    <h3 className="font-serif text-xl text-spa-brown mb-4">
      SELECT A MASSAGE
    </h3>

    <div className="grid gap-3 mb-8">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => setSelectedService(service.id)}
          className={`p-4 rounded-xl border-2 transition-all text-left ${
            selectedService === service.id
              ? "border-spa-orange bg-spa-orange/5"
              : "border-spa-beige hover:border-spa-orange/50"
          }`}
        >
          <h4 className="font-medium text-spa-brown">
            {service.name}
          </h4>
        </button>
      ))}
    </div>

    <h3 className="font-serif text-xl text-spa-brown mb-4">
      SELECT A DURATION
    </h3>

    <div className="grid gap-3">
      {bookingOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => setSelectedBooking(option.id)}
          className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${
            selectedBooking === option.id
              ? "border-spa-orange bg-spa-orange/5"
              : "border-spa-beige hover:border-spa-orange/50"
          }`}
        >
          <span className="font-medium text-spa-brown">
            {option.duration}
          </span>

          <span className="font-semibold text-spa-orange">
            {option.price}
          </span>
        </button>
      ))}
    </div>
  </div>
)}

              {/* Step 2: Select Date & Time */}
              {step === 2 && (
                <div>
                  <h3 className="font-serif text-xl text-spa-brown mb-4">Choose Date & Time</h3>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="date" className="text-spa-brown flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" /> Select Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label className="text-spa-brown flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4" /> Select Time
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                              selectedTime === time
                                ? "bg-spa-orange text-spa-cream"
                                : "bg-spa-beige/50 text-spa-brown hover:bg-spa-beige"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div>
                  <h3 className="font-serif text-xl text-spa-brown mb-4">Your Details</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-spa-brown flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" /> Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-spa-brown flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4" /> Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-spa-brown flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4" /> Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="w-full border-spa-beige rounded-xl focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-spa-brown mb-2 block">
                        Special Requests (Optional)
                      </Label>
                      <textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any special requests or notes..."
                        rows={3}
                        className="w-full border border-spa-beige rounded-xl p-3 focus:border-spa-orange focus:ring-1 focus:ring-spa-orange outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-spa-beige">
                {step > 1 ? (
                  <Button
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="border-spa-brown/30 text-spa-brown hover:bg-spa-beige rounded-full px-6 bg-transparent"
                  >
                    Back
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    disabled={
  (step === 1 &&
    (!selectedService || !selectedBooking)) ||
  (step === 2 &&
    (!selectedDate || !selectedTime))
}
                    className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream rounded-full px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
                    className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream rounded-full px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Booking..." : "Confirm Booking"}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
