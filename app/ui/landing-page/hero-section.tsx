import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-lg bg-gray-50 px-5 py-8 md:w-2/5 md:px-16">
      <p className="text-lg text-gray-800 md:text-2xl md:leading-normal">
        <strong>Bienvenue chez ColisJet.</strong> <br />
        Découvrez comment notre service de livraison de colis rapide et fiable
        vous connecte au monde entier.
      </p>
      <Link
        href="/login"
        className="flex items-center gap-4 self-start rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-600 md:text-base"
      >
        <span>Log in</span>
        <ArrowRightIcon className="w-4 md:w-5" />
      </Link>
    </div>
  );
}
