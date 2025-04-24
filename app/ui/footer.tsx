// /app/ui/footer.tsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ColisJetLogo from "@/app/ui/colisjet-logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left Section (Logo + Description) */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="mb-1"> {/* Reduced margin-bottom */}
                <ColisJetLogo />
              </div>
              <p className="text-sm text-gray-400 text-center md:text-left md:max-w-[200px]">
                Votre partenaire de livraison rapide et fiable.
              </p>
            </div>
          </div>

          {/* Center Section (Navigation Links) */}
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/"
                className="hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-yellow-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Section (Social Icons) */}
          <div className="md:w-1/4 flex justify-center md:justify-end">
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6">
          <div className="container mx-auto px-4 sm:px-6 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ColisJet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
