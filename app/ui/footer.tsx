// /app/ui/footer.tsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ColisJetLogo from "@/app/ui/colisjet-logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
          {/* Left Section (Logo + Description) */}
          <div className="flex items-center space-x-4">
            <ColisJetLogo />
            <p className="text-sm text-gray-400 max-w-[200px]">
              Votre partenaire de livraison rapide et fiable.
            </p>
          </div>

          {/* Center Section (Navigation Links) */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
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

          {/* Right Section (Social Icons) */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-4">
          <div className="container mx-auto px-4 sm:px-6 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ColisJet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
