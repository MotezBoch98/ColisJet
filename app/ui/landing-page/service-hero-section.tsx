import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  TruckIcon,
  CubeIcon,
  CreditCardIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ServiceHeroSection() {
  const services = [
    {
      name: "Pickup",
      description: "Collecte à votre emplacement",
      icon: <TruckIcon className="w-5 h-5 text-gray-700" />,
    },
    {
      name: "Livraison",
      description: "Livraison rapide et sécurisée",
      icon: <CubeIcon className="w-5 h-5 text-gray-700" />,
    },
    {
      name: "Paiement",
      description: "Options flexibles et sécurisées",
      icon: <CreditCardIcon className="w-5 h-5 text-gray-700" />,
    },
    {
      name: "Suivi Colis",
      description: "Traçabilité en temps réel",
      icon: <MapPinIcon className="w-5 h-5 text-gray-700" />,
    },
  ];

  return (
    <section className="mt-12 w-full py-10 bg-gray-50 rounded-lg">
      <div className="container mx-auto px-4">
        {/* Section Headline */}
        <h2
          style={{ fontSize: "30px" }}
          className="font-bold text-center mb-10 text-gray-800"
        >
          Livraison express à un prix standard
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="lg:w-1/4 mr-4">
            <Image
              src="/delivery-truck.png"
              width={300}
              height={250}
              className="rounded-lg object-cover shadow-md transition-transform hover:scale-105 duration-300"
              alt="Service de livraison express"
            />
          </div>

          {/* Description Section */}
          <div className="lg:w-2/5 space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Colis reçu sous 24 heures
            </h3>
            <p className="text-gray-600">
              Un service de livraison express avec un délai garanti de 24
              heures, couvrant toutes les régions de la Tunisie. Expédiez
              rapidement en toute sécurité !
            </p>
            <Link
              href="/services"
              className="flex items-center gap-2 text-gray-700 hover:text-yellow-400 font-black transition-all hover:gap-3"
            >
              Voir plus
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Services Card */}
          <div className="lg:w-1/3 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-center text-gray-700">
              Nos Services
            </h3>
            <ul className="space-y-4 cursor-pointer">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start group hover:bg-blue-50 p-2 rounded-lg transition-all duration-300"
                >
                  <div className="bg-blue-100 rounded-full p-2 mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                    <span className="w-5 h-5 flex items-center justify-center">
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-yellow-700 transition-colors duration-300">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
