import {
  ClipboardDocumentIcon,
  TruckIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Commandez",
      description:
        "Entrez les détails de votre envoi via notre application ou site web",
      icon: <ClipboardDocumentIcon className="h-10 w-10 text-blue-900" />,
    },
    {
      title: "Suivez",
      description:
        "Suivez votre colis en temps réel grâce à notre système de tracking",
      icon: <MapPinIcon className="h-10 w-10 text-blue-900" />,
    },
    {
      title: "Livraison",
      description:
        "Nos coursiers livrent votre colis rapidement et en toute sécurité",
      icon: <TruckIcon className="h-10 w-10 text-blue-900" />,
    },
    {
      title: "Confirmation",
      description:
        "Recevez une confirmation de livraison avec signature électronique",
      icon: <CheckCircleIcon className="h-10 w-10 text-blue-900" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-12 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Comment ça fonctionne
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Un processus simple et efficace pour expédier vos colis partout en
          Tunisie
        </p>

        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md mb-4 border-2 border-blue-700 relative">
                  <span className="absolute -top-2 -right-2 bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <div className="text-gray`-700">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
