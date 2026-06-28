import Link from "next/link"
import { Leaf, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-spa-sage-dark text-spa-cream py-16">
      <div className="max-w-[1236px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-spa-orange flex items-center justify-center">
                <Leaf className="w-4 h-4 text-spa-cream" />
              </div>
              <span className="font-serif text-xl font-semibold">Massage Therapy by Brooke</span>
            </Link>
            <p className="text-spa-cream/70 text-sm leading-relaxed">
              Your sanctuary of wellness, peace, and harmony. Experience the art of relaxation with Brooke, your expert
              massage therapist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                // { name: "About Us", href: "/about" },
                // { name: "Our Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-spa-cream/70 hover:text-spa-orange transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {["Swedish Massage ", "Deep Tissue Massage ", "Hot Stone Massage ", "Sports Massage ", "Aromatherapy Massage", "⁠Nuru Massage"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-spa-cream/70 hover:text-spa-orange transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-spa-cream/70 text-sm">
              <li>Available for both Incall & Outcall</li>
              <li>+1 (615) 432-7943</li>
              <li>Brookebaby1005@gmail.com</li>

            </ul>
          </div>
        </div>

        <div className="border-t border-spa-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          {/* <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-spa-orange transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-spa-orange transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-spa-orange transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-spa-orange transition-colors" aria-label="Youtube">
              <Youtube className="w-5 h-5" />
            </Link>
          </div> */}

          {/* Copyright */}
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Massage Therapy by Brooke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
