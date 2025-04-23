// app/lib/Navbar.tsx
"use client"
import ColisJetLogo from "@/app/ui/colisjet-logo";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-2 rounded-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <ColisJetLogo />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`md:flex space-x-4 text-sm font-medium text-white ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            href="/"
            className="rounded-lg px-3 py-2 transition-colors hover:text-yellow-400 md:text-base"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-2 transition-colors hover:text-yellow-400 md:text-base"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="rounded-lg px-3 py-2 transition-colors hover:text-yellow-400 md:text-base"
          >
            Services
          </Link>
          <Link
            href="/get-started"
            className="rounded-lg px-3 py-2 transition-colors hover:text-yellow-400 md:text-base"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
