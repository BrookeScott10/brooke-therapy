import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Leaf, Heart, Award, Star } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description:
        "I believe in treating the whole person - mind, body, and spirit - through my comprehensive wellness approach.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "With years of experience and continuous training, I deliver exceptional therapeutic techniques.",
    },
    {
      icon: Star,
      title: "Personalized Care",
      description:
        "Every treatment is tailored to your unique needs, ensuring the most effective and relaxing experience.",
    },
    {
      icon: Leaf,
      title: "Natural Products",
      description: "I use only premium, organic products that are gentle on your skin and the environment.",
    },
  ]

  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-spa-sage-dark overflow-hidden">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-spa-cream mb-6 text-balance">
              About Massage Therapy by Brooke
            </h1>
            <p className="text-spa-cream/90 text-lg leading-relaxed">
              A sanctuary of wellness where ancient healing traditions meet modern relaxation techniques.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-spa-cream rounded-t-[50%]" />
      </section>

      <section className="py-20">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/professional-female-massage-therapist-portrait-war.jpg"
                  alt="Brooke - Massage Therapist"
                  width={480}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-spa-cream shadow-lg hidden md:block">
                <Image
                  src="/spa-treatment-room-with-massage-table.jpg"
                  alt="Treatment room"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <span className="text-spa-orange font-medium text-sm uppercase tracking-wider">Meet Brooke</span>
              <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 mb-6 text-balance">
                Your Expert Massage Therapist
              </h2>
              <div className="space-y-4 text-spa-brown/80 leading-relaxed">
                <p>
                Hello gentlemen, I’m Brooke. I’m 28 years old, single, and independent.
                </p>
                <p>
                  With over  years of experience in therapeutic massage and holistic wellness, I've dedicated my
                  career to mastering both traditional healing techniques and contemporary spa innovations. My journey
                  began with a passion for helping others find relief from pain and stress.
                </p>
                <p>
                 I’m fun, sweet, sensual, and easygoing, with a great sense of humor. I enjoy good conversation, great company, and always treat others with respect.

                </p>
                <p>
                I’m available for both incall and outcall, and I offer a full-service experience for generous, respectful gentlemen.

No games, please—I’m here for genuine, respectful arrangements only.


                </p>
                <p>
                  My mission is to provide you with an exceptional wellness experience in a warm, Let me give you an unforgettable experience you’ll want to come back to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-spa-beige/50">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-spa-orange font-medium text-sm uppercase tracking-wider">My Values</span>
            <h2 className="font-serif text-3xl md:text-4xl text-spa-brown mt-2 text-balance">What I Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-spa-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-spa-orange/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-spa-orange" />
                </div>
                <h3 className="font-serif text-xl text-spa-brown mb-3">{value.title}</h3>
                <p className="text-spa-brown/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-spa-orange">
        <div className="max-w-[1236px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5K+", label: "Happy Clients" },
              { number: "15+", label: "Massage Techniques" },
              { number: "100%", label: "Dedication" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-serif text-4xl md:text-5xl text-spa-cream mb-2">{stat.number}</div>
                <div className="text-spa-cream/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
