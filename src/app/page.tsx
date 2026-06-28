import ReviewsSection from "@/components/review/ReviewsSection";
import ContactCTA from "../components/cta/contact-cta";
import PamperingExperiences from "../components/experiences/pampering-experiences";
import SpaGallery from "../components/gallery/spa-gallery";
import HeroSection from "../components/hero/hero-section";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import MassageTypes from "../components/massage-types/massage-types";
import FeaturedServices from "../components/services/featured-services";
import SpaExperience from "../components/spa-experience/spa-experience";
import StoreProducts from "../components/store/store-products";
import Testimonials from "../components/testimonials/Testimonials";
import WelcomeSection from "../components/welcome/welcome-section";
import WellnessJourney from "../components/wellness/wellness-journey";
import WellnessNatural from "../components/wellness/wellness-natural";
import RateCardSection from "@/components/review/RateCardSection";
import AboutPage from "@/components/about";


export default function Home() {
  return (
    <main className="min-h-screen bg-spa-cream">
      <Header />
      <HeroSection />
      {/* <FeaturedServices /> */}
      <AboutPage/>
      <MassageTypes />
      {/* <WellnessJourney />
      <SpaExperience />
      <FacialBenefits /> */}
      {/* <StoreProducts />
      <SpaGallery />
      <WellnessNatural />
      <PamperingExperiences />
      <ContactCTA/> */}
      <RateCardSection/>
      <ReviewsSection/>
      <WelcomeSection />
      {/* <Testimonials/> */}
      <Footer />
    </main>
  )
}
