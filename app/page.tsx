import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./ui/navbar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Navbar />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Bienvenue chez ColisJet.</strong> Découvrez comment notre
            service de livraison de colis rapide et fiable vous connecte au
            monde entier.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-3xl bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.jpg"
            width={650}
            height={360}
            className="hidden md:block rounded-3xl animate-vertical-float"
            alt="Dashboard desktop view"
          />
          <Image
            src="/hero-desktop.jpg"
            width={560}
            height={620}
            className="block md:hidden rounded-3xl"
            alt="Dashboard mobile view"
          />
        </div>
      </div>
    </main>
  );
}
