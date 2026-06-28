
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/broke.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-spa-sage-dark/70 to-spa-brown/50" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center pt-64 max-w-[1236px] mx-auto px-6 w-full space-y-4">
         <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-spa-cream tracking-wide">
            BROOKE&apos;S STUDIO
          </h1>
        <div className="max-w-2xl">
          <p className="text-spa-cream/90 text-sm md:text-xl mb-4 leading-[40px]">
            The pure sensation. Your expert therapeutic massage therapist uniquely skilled to help bring the entire
            mind, body and wellness awareness to life. Treating you with each session
          </p>

          <Button className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 mb-12">
            Explore More
            <ArrowRight className="w-4 h-4" />
          </Button>

        </div>
      </div>
    </section>
  )
}
