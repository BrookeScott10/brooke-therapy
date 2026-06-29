import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";

export default function Footer() {
  const paymentMethods = [
    { name: "Chime", icon: "/payments/chime.png" },
    { name: "Cash App", icon: "/payments/cashapp.png" },
    { name: "Cash (In Person Only)", icon: "/payments/cash.png" },
    { name: "Bitcoin", icon: "/payments/bitcoin.png" },
    { name: "Gift Card", icon: "/payments/giftcard.png" },
    { name: "Zelle", icon: "/payments/zelle.png" },
    { name: "Apple Pay", icon: "/payments/applepay.png" },
  ];

  return (
    <footer className="bg-spa-sage-dark text-spa-cream py-16">
      <div className="max-w-[1236px] mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-spa-orange flex items-center justify-center">
                <Leaf className="w-4 h-4 text-spa-cream" />
              </div>
              <span className="font-serif text-xl font-semibold">
                Massage Therapy by Brooke
              </span>
            </Link>

            <p className="text-spa-cream/70 text-sm leading-relaxed">
              Your sanctuary of wellness, peace, and harmony. Experience the art of relaxation with Brooke, your expert massage therapist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-spa-cream/70 hover:text-spa-orange transition-colors text-sm"
                  >
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
              {[
                "Swedish Massage",
                "Deep Tissue Massage",
                "Hot Stone Massage",
                "Sports Massage",
                "Aromatherapy Massage",
                "Nuru Massage",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/"
                    className="text-spa-cream/70 hover:text-spa-orange transition-colors text-sm"
                  >
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

        {/* PAYMENT METHODS */}
        {/* <div className="mt-10 border-t border-spa-cream/20 pt-10">
          <h4 className="font-serif text-lg mb-5">We Accept</h4>

          <div className="flex flex-wrap gap-4 items-center">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-2 rounded-full"
              >
                <Image
                  src={method.icon}
                  alt={method.name}
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <span className="text-xs text-spa-cream/80 whitespace-nowrap">
                  {method.name}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* BOTTOM BAR */}
        <div className="border-t border-spa-cream/20 pt-8 mt-10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Massage Therapy by Brooke. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}