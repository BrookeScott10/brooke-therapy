"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Wellness Boulevard", "Beverly Hills, CA 90210"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (615) 432-7943"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["Brookebaby1005@gmail.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Fri: 9:00 AM - 9:00 PM", "Sat - Sun: 10:00 AM - 7:00 PM"],
    },
  ]

  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-spa-brown overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mb-6 text-balance">Contact Us</h1>
            <p className="text-spa-cream/90 text-lg leading-relaxed">
              Have questions or ready to book your wellness journey? I am here to help you every step of the way.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-spa-orange/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-spa-orange" />
                </div>
                <h3 className="font-serif text-lg text-spa-brown mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-spa-brown/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <h2 className="font-serif text-2xl md:text-3xl text-spa-brown mb-2">Send Us a Message</h2>
              <p className="text-spa-brown/70 mb-8">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-spa-sage/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-spa-sage-dark" />
                  </div>
                  <h3 className="font-serif text-2xl text-spa-brown mb-3">Message Sent!</h3>
                  <p className="text-spa-brown/70 mb-6">
                    Thank you for reaching out. I will respond to your inquiry shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
                    }}
                    variant="outline"
                    className="border-spa-orange text-spa-orange hover:bg-spa-orange/10 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-spa-brown">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="rounded-lg border-spa-beige focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-spa-brown">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="rounded-lg border-spa-beige focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-spa-brown">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="rounded-lg border-spa-beige focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-spa-brown">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Booking Inquiry"
                        className="rounded-lg border-spa-beige focus:border-spa-orange focus:ring-spa-orange"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-spa-brown">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="rounded-lg border-spa-beige focus:border-spa-orange focus:ring-spa-orange resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-spa-orange hover:bg-spa-orange-light text-spa-cream rounded-full py-3 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.40085068478427!3d34.07362098060215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbcd8ca8b46f%3A0xb6f3d0c7f67f4e3!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Massage Therapy by Brooke Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-spa-beige/30">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-spa-orange font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 text-balance">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How far in advance should I book my appointment?",
                answer:
                  "I recommend booking at least 48-72 hours in advance, especially for weekends and popular treatments. However, I do accommodate same-day appointments when available.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "I require 24 hours notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a 50% service charge.",
              },
              {
                question: "Do you offer gift cards?",
                answer:
                  "Yes! Gift cards are available in any denomination and can be purchased by contacting me directly. They make perfect gifts for any occasion.",
              },
              {
                question: "What should I wear to my appointment?",
                answer:
                  "I provide robes and towels for all treatments. You'll be properly draped during your service for your comfort and privacy.",
              },
              {
                question: "Do you offer packages or memberships?",
                answer:
                  "Yes, I offer various massage packages and monthly membership options with exclusive benefits. Contact me to learn more about my wellness programs.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-serif text-lg text-spa-brown mb-2">{faq.question}</h3>
                <p className="text-spa-brown/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
