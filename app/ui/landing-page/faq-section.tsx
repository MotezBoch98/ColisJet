'use client';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "How does your delivery service work?",
      answer: "Our delivery service operates through a network of trusted partners. Simply place your order, and we'll handle the pickup, transportation, and delivery to the destination."
    },
    {
      question: "What areas do you service?",
      answer: "We currently service all major cities across Tunisia with plans to expand to more locations soon."
    },
    {
      question: "How can I track my package?",
      answer: "You can track your package in real-time through our mobile app or website by entering your unique tracking number."
    },
    {
      question: "What are your delivery rates?",
      answer: "Our rates vary depending on package size, weight, and delivery distance. You can get an instant quote using our price calculator."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery times vary based on location. Local deliveries typically take 24-48 hours, while nationwide shipments may take 2-5 business days."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-0">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="rounded-lg border px-3 border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}