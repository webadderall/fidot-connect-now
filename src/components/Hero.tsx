import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-fidot-light-blue to-white py-12 lg:py-20">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            School Communication,{" "}
            <span className="text-fidot-blue">Simplified</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-xl">
            Fidot connects schools, students, and parents with a secure messaging platform designed specifically for educational communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              className={cn(
                "bg-fidot-blue hover:bg-fidot-blue/90 text-white",
                "text-lg py-6 px-8"
              )}
            >
              Download for iOS
            </Button>
            <Button 
              variant="outline"
              className="text-fidot-blue border-fidot-blue hover:bg-fidot-light-blue text-lg py-6 px-8"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                  style={{ 
                    backgroundImage: `url(https://source.unsplash.com/random/10${i}x10${i}?face)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </div>
            <p>
              <span className="font-semibold">500+</span> schools trust Fidot daily
            </p>
          </div>
        </div>
        
        <div className="relative animate-slide-up">
          <div className="w-full h-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Fidot App Interface" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-fidot-green text-white p-3 rounded-lg shadow-lg">
            <p className="text-sm font-medium">
              "47% improvement in parent engagement"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
