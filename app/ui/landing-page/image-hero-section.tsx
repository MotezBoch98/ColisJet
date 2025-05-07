import Image from "next/image";

export default function ImageSection() {
  return (
    <div className="flex items-center justify-center p-4 md:w-3/5 md:px-16 md:py-8">
      <Image
        src="/hero-desktop.jpg"
        width={550} // Reduced from 650
        height={300} // Reduced from 360
        className="hidden md:block rounded-lg animate-vertical-float shadow-sm"
        alt="Dashboard desktop view"
      />
      <Image
        src="/hero-desktop.jpg"
        width={460} // Reduced from 560
        height={520} // Reduced from 620
        className="block md:hidden rounded-lg shadow-sm"
        alt="Dashboard mobile view"
      />
    </div>
  );
}
