"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "../ui/button";
import BookingModal from "../booking/booking-modal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when menu is open (important for mobile UX)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Check Gift Card Balance", href: "/gift-card-balance" },
  ];

  const getTextColor = () => {
    if (isScrolled) return "text-spa-brown";
    return "text-spa-cream";
  };

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
            <nav className="hidden lg:flex items-center gap-6 lg:gap-8 uppercase">
              {navLinks.map((link) => {
                const isCTA = link.name === "Check Gift Card Balance";

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
        text-sm font-medium transition-colors hover:text-spa-orange

        ${pathname === link.href ? "text-spa-orange" : getTextColor()}

        ${isCTA ? "ml-2 rounded-full border border-spa-orange px-4 py-1.5 hover:bg-spa-orange hover:text-white" : ""}
      `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-spa-orange hover:bg-spa-orange-light text-spa-cream px-4 lg:px-6 py-2 rounded-full text-sm font-medium"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
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

         {/* Mobile Menu Overlay */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center px-4">
    
    {/* Card */}
    <div className="w-full rounded-2xl bg-black border border-white/10 shadow-2xl overflow-hidden">
      
      {/* TOP BAR (LOGO + CLOSE INSIDE CARD) */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-spa-orange flex items-center justify-center">
            <Leaf className="w-4 h-4 text-spa-cream" />
          </div>

          <span className="text-white font-serif text-base font-semibold">
            Massage Therapy
          </span>
        </Link>

        {/* Close */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* NAV LINKS */}
      <div className="flex flex-col space-y-2 px-5 py-6 uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-3 px-3 rounded-lg transition-colors text-sm ${
              pathname === link.href
                ? "text-spa-orange bg-white/5"
                : "text-white hover:text-spa-orange hover:bg-white/5"
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* CTA */}
        <Button
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsBookingOpen(true);
          }}
          className="mt-4 w-full bg-spa-orange hover:bg-spa-orange-light text-white rounded-full py-3"
        >
          Book Appointment
        </Button>
      </div>
    </div>
  </div>
)}
        </div>
      </header>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
