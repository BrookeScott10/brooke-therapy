"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingModal from "@/components/booking/booking-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // lock body scroll when menu is open (important for mobile UX)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto"
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const getTextColor = () => {
    if (isScrolled) return "text-spa-brown"
    return "text-spa-cream"
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-spa-cream/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1236px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-spa-orange flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-spa-cream" />
              </div>
              <span
                className={`font-serif text-base sm:text-lg lg:text-xl font-semibold truncate ${getTextColor()}`}
              >
                Massage Therapy by Brooke
              </span>
            </Link>

            {/* Desktop Navigation (tablet + desktop) */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-spa-orange ${
                    pathname === link.href
                      ? "text-spa-orange"
                      : getTextColor()
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-4 lg:px-6 py-2 rounded-full text-sm font-medium"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${getTextColor()}`} />
              ) : (
                <Menu className={`w-6 h-6 ${getTextColor()}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-spa-orange/20 pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-2 rounded-md text-base transition-colors ${
                    pathname === link.href
                      ? "text-spa-orange"
                      : "text-spa-brown hover:text-spa-orange"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsBookingOpen(true)
                }}
                className="mt-4 w-full bg-spa-orange hover:bg-spa-orange-light text-spa-cream rounded-full py-3"
              >
                Book Appointment
              </Button>
            </nav>
          )}
        </div>
      </header>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}