import Image from "next/image";
import { Shield, Clock, Award, ThumbsUp } from "lucide-react";

export default function TrustBadgesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
          Why Choose Colis Jet?
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Secure Deliveries</h3>
            <p className="mt-2 text-sm text-gray-500">
              Your packages are fully insured and handled with the utmost care
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">On-time Guarantee</h3>
            <p className="mt-2 text-sm text-gray-500">
              We pride ourselves on punctual deliveries and reliable service
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <Award className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Certified Service</h3>
            <p className="mt-2 text-sm text-gray-500">
              Our delivery service meets the highest industry standards
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <ThumbsUp className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">98% Satisfaction</h3>
            <p className="mt-2 text-sm text-gray-500">
              Join our thousands of happy customers across Tunisia
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-center text-xl font-medium text-gray-900 mb-8">
            Trusted By Industry Leaders
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-70">
            {/* Replace with actual partner logos */}
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Partner 1</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Partner 2</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Partner 3</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Partner 4</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Partner 5</div>
          </div>
        </div>
      </div>
    </section>
  );
}