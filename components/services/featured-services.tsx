import Image from "next/image"

const services = [
  {
    image: "/woman-receiving-herbal-body-polish-spa-treatment-l.jpg",
    title: "HERBAL BODY POLISH",
    description:
      "Gentle exfoliation, herbal blends to brighten, soften and purify the skin. Ideal for all skin types.",
  },
  {
    image: "/woman-receiving-deep-sea-salt-glow-spa-treatment-m.jpg",
    title: "DEEP SEA SALT GLOW",
    description:
      "Infused with essential minerals, this treatment removes dullness and leaves your skin silky smooth.",
  },
  {
    image: "/woman-with-facial-mask-sugar-cocoon-scrub-spa-trea.jpg",
    title: "SUGAR COCOON SCRUB",
    description:
      "A rich sugar-based exfoliation that hydrates and renews. Perfect for sensitive skin and gentle care.",
  },
  {
    image: "/woman-receiving-aromatic-body-buff-massage-spa-tre.jpg",
    title: "AROMATIC BODY BUFF",
    description:
      "Customized for your unique skin needs, this therapy smooths and revitalizes while relaxing.",
  },
]

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="max-w-[1236px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-spa-brown italic">
            ENTER A WORLD OF WELLNESS,
            <br />
            PEACE AND HARMONY
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 rounded-xl overflow-hidden shadow-sm group"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover brightness-[0.95] group-hover:brightness-100 transition-all"
              />

              {/* Glass Overlay Card */}
              <div className="absolute bottom-2 left-2 right-2 bg-white/50 backdrop-blur-md p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-bold text-spa-brown tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-spa-brown/70 leading-relaxed mb-3">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="text-xs font-medium text-spa-brown/70 hover:text-spa-orange transition-colors underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
