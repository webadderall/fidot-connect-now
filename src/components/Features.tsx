
import React from 'react';
import { MessageCircle, Calendar, Bell, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="fidot-card">
    <div className="bg-fidot-light-blue inline-block p-3 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle size={24} className="text-fidot-blue" />,
      title: "Streamlined Communication",
      description: "Send updates to the entire school community or target specific groups with personalized messaging."
    },
    {
      icon: <Bell size={24} className="text-fidot-blue" />,
      title: "Real-time Notifications",
      description: "Important announcements reach families instantly with push notifications and delivery confirmation."
    },
    {
      icon: <Calendar size={24} className="text-fidot-blue" />,
      title: "Event Management",
      description: "Share upcoming events, permission slips, and reminders with built-in scheduling and calendar integration."
    },
    {
      icon: <Users size={24} className="text-fidot-blue" />,
      title: "Community Building",
      description: "Foster stronger school-family relationships with targeted engagement tools and feedback options."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Designed for Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with input from educators and parents to create the most effective school communication platform available.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white p-6 md:p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="bg-fidot-light-green p-4 rounded-full">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Proven Results in Schools</h3>
              <p className="text-gray-600 mb-3">
                A 2023 study of schools using Fidot showed a <span className="font-semibold">47% increase in parent engagement</span> and a <span className="font-semibold">32% reduction in missed announcements</span> compared to traditional communication methods.
              </p>
              <p className="text-fidot-dark-gray text-sm">
                Source: Educational Technology Effectiveness Report, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
