import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      category: "Massage Therapy",
      description: "Release tension and restore balance with our therapeutic massage treatments.",
      treatments: [
        {
          name: "Swedish Massage",
          description: "A gentle, relaxing massage using long strokes to improve circulation and ease muscle tension.",
          duration: "60 min",
          price: "$90",
          image: "/relaxing-swedish-massage-therapy.jpg",
        },
        {
          name: "Deep Tissue Massage",
          description: "Targeted pressure to release chronic muscle tension and knots in deeper tissue layers.",
          duration: "60 min",
          price: "$110",
          image: "/deep-tissue-massage-therapy-back.jpg",
        },
        {
          name: "Thai Massage",
          description: "Ancient healing technique combining stretching, acupressure, and yoga-like movements.",
          duration: "90 min",
          price: "$130",
          image: "/thai-massage-stretching-therapy.jpg",
        },
        {
          name: "Hot Stone Massage",
          description: "Heated basalt stones combined with massage to melt away tension and stress.",
          duration: "75 min",
          price: "$120",
          image: "/hot-stone-massage-therapy-spa.jpg",
        },
      ],
    },
    {
      category: "Facial Treatments",
      description: "Rejuvenate your skin with our customized facial treatments for a radiant glow.",
      treatments: [
        {
          name: "Classic Facial",
          description: "Deep cleansing, exfoliation, and hydration for refreshed, glowing skin.",
          duration: "60 min",
          price: "$85",
          image: "/woman-receiving-facial-spa-treatment.jpg",
        },
        {
          name: "Anti-Aging Facial",
          description: "Advanced treatment targeting fine lines, wrinkles, and loss of elasticity.",
          duration: "75 min",
          price: "$130",
          image: "/anti-aging-facial-treatment-spa.jpg",
        },
        {
          name: "Hydrating Facial",
          description: "Intensive moisture treatment for dry, dehydrated skin using premium serums.",
          duration: "60 min",
          price: "$95",
          image: "/hydrating-facial-mask-spa-treatment.jpg",
        },
      ],
    },
    {
      category: "Body Treatments",
      description: "Indulge in luxurious body treatments that nourish, detoxify, and rejuvenate.",
      treatments: [
        {
          name: "Body Scrub & Wrap",
          description: "Exfoliating scrub followed by a nourishing wrap for silky smooth skin.",
          duration: "90 min",
          price: "$140",
          image: "/body-scrub-spa-treatment-exfoliation.jpg",
        },
        {
          name: "Aromatherapy Journey",
          description: "Full body experience with essential oils tailored to your wellness needs.",
          duration: "90 min",
          price: "$150",
          image: "/aromatherapy-essential-oils-spa-massage.jpg",
        },
        {
          name: "Detox Body Treatment",
          description: "Cleansing treatment to eliminate toxins and restore natural vitality.",
          duration: "75 min",
          price: "$125",
          image: "/placeholder-chv8f.png",
        },
      ],
    },
    {
      category: "Specialty Services",
      description: "Unique treatments for specific needs and complete wellness experiences.",
      treatments: [
        {
          name: "Prenatal Massage",
          description: "Gentle, safe massage designed for expectant mothers to relieve pregnancy discomfort.",
          duration: "60 min",
          price: "$100",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Sports Recovery",
          description: "Targeted treatment for athletes to enhance performance and speed recovery.",
          duration: "60 min",
          price: "$115",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Couples Retreat",
          description: "Shared spa experience including massage and relaxation time together.",
          duration: "120 min",
          price: "$280",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-spa-orange overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mb-6 text-balance">Our Services</h1>
            <p className="text-spa-cream/90 text-lg leading-relaxed">
              Discover our comprehensive range of spa treatments designed to nurture your body, calm your mind, and
              rejuvenate your spirit.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      {/* Services */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? "bg-spa-beige/30" : ""}`}>
          <div className="max-w-[1236px] mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <span className="text-spa-orange font-medium text-sm uppercase tracking-wider">
                {String(categoryIndex + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 mb-4 text-balance">
                {category.category}
              </h2>
              <p className="text-spa-brown/70 leading-relaxed">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-spa-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-xl text-spa-brown">{treatment.name}</h3>
                      <span className="text-spa-orange font-semibold">{treatment.price}</span>
                    </div>
                    <p className="text-spa-brown/70 text-sm leading-relaxed mb-4">{treatment.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-spa-brown/60 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{treatment.duration}</span>
                      </div>
                      <Link
                        href="/#book"
                        className="text-spa-orange text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-spa-sage-dark">
        <div className="max-w-[1236px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-spa-cream mb-6 text-balance">
            Not Sure Which Treatment Is Right For You?
          </h2>
          <p className="text-spa-cream/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our expert therapists are here to help you choose the perfect treatment based on your needs and preferences.
            Contact us for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-8 py-3 rounded-full">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-spa-cream text-spa-cream hover:bg-spa-cream/10 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/#book">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
