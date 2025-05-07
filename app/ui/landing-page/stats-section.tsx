import {
  TruckIcon,
  GlobeAltIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function StatsSection() {
  const stats = [
    {
      value: "15,000+",
      label: "Colis livrés",
      icon: <TruckIcon className="h-10 w-10 text-blue-900" />,
      description: "Chaque mois dans tout le pays",
    },
    {
      value: "24",
      label: "Régions couvertes",
      icon: <GlobeAltIcon className="h-10 w-10 text-blue-900" />,
      description: "À travers toute la Tunisie",
    },
    {
      value: "99%",
      label: "Livraisons à l'heure",
      icon: <ClockIcon className="h-10 w-10 text-blue-900" />,
      description: "Notre garantie de ponctualité",
    },
    {
      value: "4.9/5",
      label: "Satisfaction client",
      icon: <CheckCircleIcon className="h-10 w-10 text-blue-900" />,
      description: "Note moyenne de nos clients",
    },
  ];

  return (
    <section className="py-14 bg-white mt-12 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          ColisJet en chiffres
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-900 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

