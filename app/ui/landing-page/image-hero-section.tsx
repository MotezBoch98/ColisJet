import Image from "next/image";

export default function ImageSection() {
  return (
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
  );
}