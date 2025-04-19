import Image from "next/image";
import { lusitana } from '@/app/ui/fonts';
export default function ColisJetLogo() {
  return (
    // <div className="flex items-center leading-none">

    // </div>
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/Logo_ColisJet-04.png"
        alt="ColisJet Logo"
        width={200}
        height={60}
        priority
        className="object-contain"
      />
    </div>
  );
}
