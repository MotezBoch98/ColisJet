"use client";
import ColisJetLogo from "@/app/ui/colisjet-logo";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <ColisJetLogo />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 mx-2" />
            ) : (
              <Bars3Icon className="h-8 w-8 mx-2" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`absolute top-0 left-0 z-40 h-screen w-full bg-gray-900 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:flex md:h-auto md:w-auto md:items-center`}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            {/* Close Button (Mobile Only) */}
            {isOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 md:hidden"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}

            {/* Links with animated underline */}
            <Link
              href="/"
              className="text-base tracking-wide font-medium text-white uppercase relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition-colors hover:text-yellow-400">
                Acceuil
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className="text-base tracking-wide font-medium text-white uppercase relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition-colors hover:text-yellow-400">
                About Us
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className="text-base tracking-wide font-medium text-white uppercase relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition-colors hover:text-yellow-400">
                Services
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/get-started"
              className="text-base tracking-wide font-medium text-white uppercase relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition-colors hover:text-yellow-400">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
