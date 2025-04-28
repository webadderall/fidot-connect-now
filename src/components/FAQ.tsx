
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How secure is Fidot for school communications?",
      answer: "Fidot employs bank-level encryption for all data and messages. We are FERPA compliant and never share or sell user data. All information is stored on secure servers with regular security audits and updates."
    },
    {
      question: "Can we customize Fidot to match our school branding?",
      answer: "Yes! Schools can customize the app with their logo, colors, and branding elements. This helps create a consistent experience for your community and reinforces your school identity."
    },
    {
      question: "How difficult is it to migrate from our current communication system?",
      answer: "We've designed Fidot with easy migration in mind. Our team provides comprehensive onboarding support, including data import assistance, training for administrators, and resources for introducing the platform to parents and students."
    },
    {
      question: "Does Fidot support multiple languages?",
      answer: "Absolutely. Fidot supports automatic translation for over 100 languages, ensuring all families in your diverse community can receive communications in their preferred language."
    },
    {
      question: "Can I schedule messages to be sent at a specific time?",
      answer: "Yes, Fidot allows you to compose messages in advance and schedule them to be delivered at your preferred date and time. This is especially useful for recurring announcements or planned events."
    },
    {
      question: "Is there a cost for parents and students to use the app?",
      answer: "No, Fidot is completely free for parents and students to download and use. Schools subscribe to our service, and we believe in making communication accessible to all community members without additional costs."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Fidot and how it can improve communication in your school community.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions? We're here to help.
          </p>
          <a 
            href="#contact" 
            className="text-fidot-blue hover:text-fidot-blue/80 font-medium"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
