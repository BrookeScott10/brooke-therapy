import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/hero/hero-section"
import FeaturedServices from "@/components/services/featured-services"
import MassageTypes from "@/components/massage-types/massage-types"
import WellnessJourney from "@/components/wellness/wellness-journey"
import StoreProducts from "@/components/store/store-products"
import SpaGallery from "@/components/gallery/spa-gallery"
import WellnessNatural from "@/components/wellness/wellness-natural"
import PamperingExperiences from "@/components/experiences/pampering-experiences"
import ContactCTA from "@/components/cta/contact-cta"
import WelcomeSection from "@/components/welcome/welcome-section"
import SpaExperience from "@/components/spa-experience/spa-experience"
import Testimonials from "@/components/testimonials/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />
      <HeroSection />
      <FeaturedServices />
      <MassageTypes />
      <WellnessJourney />
      <SpaExperience />
      {/* <FacialBenefits /> */}
      <StoreProducts />
      <SpaGallery />
      <WellnessNatural />
      <PamperingExperiences />
      <ContactCTA />
      <WelcomeSection />
      <Testimonials/>
      <Footer />
    </main>
  )
}
