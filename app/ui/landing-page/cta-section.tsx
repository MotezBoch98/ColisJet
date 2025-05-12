import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="my-16 bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Ship with Confidence?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join thousands of satisfied customers who trust our shipping solutions
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <Link 
              href="/register" 
              className="rounded-md bg-white px-5 py-3 font-medium text-blue-600 shadow hover:bg-blue-50"
            >
              Get Started
            </Link>
            <Link 
              href="/contact" 
              className="rounded-md border border-transparent border-white bg-transparent px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}