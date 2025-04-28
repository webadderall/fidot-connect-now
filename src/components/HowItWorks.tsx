import React from 'react';
import { cn } from "@/lib/utils";

interface StepProps {
  number: number;
  title: string;
  description: string;
  userType: 'school' | 'parent' | 'student';
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({ 
  number, 
  title, 
  description, 
  userType, 
  isActive,
  onClick
}) => (
  <div 
    className={cn(
      "border rounded-lg p-5 cursor-pointer transition-all duration-300",
      isActive 
        ? "border-fidot-blue bg-fidot-light-blue" 
        : "border-gray-200 hover:border-fidot-blue/50 hover:bg-fidot-light-blue/50"
    )}
    onClick={onClick}
  >
    <div className="flex items-center mb-3">
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white font-medium",
        userType === 'school' ? "bg-fidot-blue" : 
        userType === 'parent' ? "bg-fidot-green" : 
        "bg-fidot-dark-gray"
      )}>
        {number}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const [activeUserType, setActiveUserType] = React.useState<'school' | 'parent' | 'student'>('school');
  
  const schoolSteps = [
    {
      number: 1,
      title: "Register Your School",
      description: "Create your school account and invite staff members to join as administrators."
    },
    {
      number: 2,
      title: "Import Community Data",
      description: "Securely upload student and parent information or send invitation links."
    },
    {
      number: 3,
      title: "Create Communication Groups",
      description: "Set up classes, grade levels, and special interest groups for targeted messaging."
    },
    {
      number: 4,
      title: "Start Sending Updates",
      description: "Publish announcements, events, and resources to keep your community informed."
    }
  ];
  
  const parentSteps = [
    {
      number: 1,
      title: "Download the App",
      description: "Get Fidot from the App Store and create your parent account."
    },
    {
      number: 2,
      title: "Connect to Your School",
      description: "Accept the invitation from your school or search for your school code."
    },
    {
      number: 3,
      title: "Add Your Children",
      description: "Link your account to your children's profiles for personalized updates."
    },
    {
      number: 4,
      title: "Stay Informed",
      description: "Receive important announcements, calendar events, and more in real-time."
    }
  ];
  
  const studentSteps = [
    {
      number: 1,
      title: "Get the App",
      description: "Download Fidot and create your student account with parent approval."
    },
    {
      number: 2,
      title: "Join Your School",
      description: "Connect to your school community using the provided code."
    },
    {
      number: 3,
      title: "Customize Notifications",
      description: "Choose which types of announcements and updates you want to prioritize."
    },
    {
      number: 4,
      title: "Access Resources",
      description: "View important information, events, and educational materials anytime."
    }
  ];

  const getSteps = () => {
    switch (activeUserType) {
      case 'school': return schoolSteps;
      case 'parent': return parentSteps;
      case 'student': return studentSteps;
      default: return schoolSteps;
    }
  };

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Fidot Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple setup and intuitive design make Fidot accessible for all members of your educational community.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-l-lg",
                activeUserType === 'school'
                  ? "bg-fidot-blue text-white"
                  : "bg-white text-gray-700 hover:bg-fidot-light-blue"
              )}
              onClick={() => setActiveUserType('school')}
            >
              For Schools
            </button>
            <button
              type="button"
              className={cn(
                "px-5 py-2 text-sm font-medium",
                activeUserType === 'parent'
                  ? "bg-fidot-green text-white"
                  : "bg-white text-gray-700 hover:bg-fidot-light-blue"
              )}
              onClick={() => setActiveUserType('parent')}
            >
              For Parents
            </button>
            <button
              type="button"
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-r-lg",
                activeUserType === 'student'
                  ? "bg-fidot-dark-gray text-white"
                  : "bg-white text-gray-700 hover:bg-fidot-light-blue"
              )}
              onClick={() => setActiveUserType('student')}
            >
              For Students
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid gap-4">
            {getSteps().map((step) => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                userType={activeUserType}
                isActive={true}
                onClick={() => {}}
              />
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img 
              src={activeUserType === 'school' 
                ? "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                : activeUserType === 'parent'
                ? "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                : "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              } 
              alt={`Fidot for ${activeUserType}s`}
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
