import Image from "next/image";

export default function ColisJetLogo() {
  return (
    <div className="relative h-20 w-40 overflow-hidden">  {/* Added overflow-hidden */}
      <Image
        src="/Logo_ColisJet-04.png"
        alt="ColisJet Logo"
        width={300}  // Increased from 128
        height={150}  // Increased from 40
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-auto h-auto max-w-[200%] max-h-[200%]"  // Modified class
        priority
      />
    </div>
  );
}
