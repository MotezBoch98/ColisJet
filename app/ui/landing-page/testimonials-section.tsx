import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialProps {
  name: string;
  company: string;
  text: string;
  rating: number;
  imageSrc: string;
}

export default function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      name: "Sami Ben Ahmed",
      company: "Tech Plus",
      text: "ColisJet a complètement transformé notre logistique. Livraison toujours à l'heure et un service client exceptionnel!",
      rating: 5,
      imageSrc: "/testimonial-1.png", // You'll need to add these images
    },
    {
      name: "Leila Mansour",
      company: "Boutique Élégance",
      text: "Depuis que nous utilisons ColisJet, nos clients sont ravis des délais de livraison. Un partenaire fiable pour notre boutique.",
      rating: 5,
      imageSrc: "/testimonial-2.png",
    },
    {
      name: "Mohammed Karray",
      company: "Électro Média",
      text: "Service impeccable et tarifs compétitifs. Je recommande vivement ColisJet pour la livraison de produits électroniques.",
      rating: 4,
      imageSrc: "/testimonial-3.png",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50 mt-12 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Ce que nos clients disent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

