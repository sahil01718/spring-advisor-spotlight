
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden gradient-bg py-16 sm:py-24 px-4 bg-pattern">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Find Your Trusted Financial Advisor
          </h1>
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 mb-8">
            Browse SEBI-Registered Investment Advisors curated by Spring Money
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-spring-purple hover:bg-spring-purple/90 text-white"
              asChild
            >
              <Link to="/onboarding">
                List Your Practice
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-spring-green text-spring-green hover:bg-spring-green/10"
              asChild
            >
              <a href="#advisorList">
                Browse Advisors
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 max-w-md mx-auto flex flex-wrap justify-center gap-3 text-sm text-center">
          <div className="flex items-center">
            <span className="bg-spring-green rounded-full h-2 w-2 mr-2"></span>
            <span>SEBI Registered</span>
          </div>
          <div className="flex items-center">
            <span className="bg-spring-purple rounded-full h-2 w-2 mr-2"></span>
            <span>Verified Credentials</span>
          </div>
          <div className="flex items-center">
            <span className="bg-spring-green rounded-full h-2 w-2 mr-2"></span>
            <span>Transparent Fees</span>
          </div>
          <div className="flex items-center">
            <span className="bg-spring-purple rounded-full h-2 w-2 mr-2"></span>
            <span>Fiduciary Standard</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div 
        className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-spring-soft-green opacity-70 animate-float" 
        style={{ animationDelay: "0s" }}
      ></div>
      <div 
        className="absolute top-1/2 -right-10 w-32 h-32 rounded-full bg-spring-soft-purple opacity-60 animate-float" 
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div 
        className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-spring-soft-green opacity-50 animate-float" 
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default HeroSection;
