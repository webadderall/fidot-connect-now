
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-fidot-blue text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your School Communications?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join over 500 schools already using Fidot to build stronger, more connected educational communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              className={cn(
                "bg-white text-fidot-blue hover:bg-white/90",
                "text-lg py-6 px-8"
              )}
            >
              Download for iOS
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-white/80 text-sm">
            Available on iOS devices. Android version coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
