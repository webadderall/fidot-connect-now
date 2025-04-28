
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-fidot-blue">
            Fidot
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-fidot-blue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-fidot-blue transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-fidot-blue transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-600 hover:text-fidot-blue transition-colors">
            FAQ
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost"
            className="hidden md:inline-flex"
          >
            Log In
          </Button>
          <Button 
            className={cn(
              "bg-fidot-blue hover:bg-fidot-blue/90 text-white", 
              "hidden md:inline-flex"
            )}
          >
            Download App
          </Button>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
