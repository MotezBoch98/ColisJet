import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; 


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">ColisJet</h2>
          <p className="text-sm text-gray-400">
            Votre partenaire de livraison rapide et fiable.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
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

        {/* Social Media Icons */}
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

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ColisJet. All rights reserved.
      </div>
    </footer>
  );
}