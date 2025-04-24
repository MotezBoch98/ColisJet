import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
      <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
        <strong>Bienvenue chez ColisJet.</strong> Découvrez comment notre
        service de livraison de colis rapide et fiable vous connecte au monde entier.
      </p>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-3xl bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
      >
        <span>Log in</span>
        <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </div>
  );
}