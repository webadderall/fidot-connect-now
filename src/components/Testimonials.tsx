
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  school?: string;
  image: string;
  type: 'principal' | 'teacher' | 'parent';
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  name, 
  role, 
  school, 
  image,
  type
}) => (
  <div className="fidot-card flex flex-col h-full">
    <div className={cn(
      "mb-4 text-lg font-medium",
      type === 'principal' ? "text-fidot-blue" : 
      type === 'teacher' ? "text-fidot-green" : 
      "text-fidot-dark-gray"
    )}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-2">
        <path d="M10 11L7 14L10 17M14 11L17 14L14 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p className="italic">{quote}</p>
    </div>
    <div className="mt-auto flex items-center">
      <div className="w-12 h-12 rounded-full mr-4 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-600">{role}{school && `, ${school}`}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Fidot has transformed how we communicate with our community. What used to take hours now takes minutes, and our engagement rates have increased by 60%.",
      name: "Dr. Sarah Johnson",
      role: "Principal",
      school: "Westlake Academy",
      image: "https://source.unsplash.com/7RI1MAfLAWg",
      type: 'principal' as const
    },
    {
      quote: "As a teacher, I can quickly send updates to parents about classroom activities, homework, and upcoming tests. It's made parent-teacher communication so much easier.",
      name: "Michael Chen",
      role: "5th Grade Teacher",
      school: "Oakridge Elementary",
      image: "https://source.unsplash.com/sibVwORYqs0",
      type: 'teacher' as const
    },
    {
      quote: "With three kids in different grades, keeping track of school events was overwhelming. Fidot organizes everything in one place, so I never miss important updates.",
      name: "Latisha Williams",
      role: "Parent",
      image: "https://source.unsplash.com/J1OScm_uHUQ",
      type: 'parent' as const
    },
    {
      quote: "The implementation was seamless and the support team was excellent. We saw a 47% increase in parent participation at our school events within the first semester.",
      name: "Robert Menendez",
      role: "Technology Director",
      school: "Lincoln High School",
      image: "https://source.unsplash.com/7YVZYaVbUmw",
      type: 'principal' as const
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from educators, administrators, and parents who are using Fidot to improve school communication.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              school={testimonial.school}
              image={testimonial.image}
              type={testimonial.type}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md text-center">
          <h3 className="text-2xl font-semibold mb-4">The Numbers Speak for Themselves</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-fidot-blue mb-2">94%</p>
              <p className="text-gray-600">Parent satisfaction rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-fidot-blue mb-2">68%</p>
              <p className="text-gray-600">Increase in information reach</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-fidot-blue mb-2">45%</p>
              <p className="text-gray-600">Time saved on communications</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-fidot-blue mb-2">500+</p>
              <p className="text-gray-600">Schools trust Fidot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
