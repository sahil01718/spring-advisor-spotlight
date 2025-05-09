
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-[#0B8A59] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Personalized Financial Planning, Simplified
        </h1>
        <p className="text-xl sm:text-2xl mb-10 font-light">
          Find Your Ideal Financial Advisor and Start Building Your Future Today.
        </p>
        <Link to="/onboarding">
          <Button 
            size="lg" 
            className="bg-white text-[#0B8A59] hover:bg-gray-100 hover:text-[#0B8A59] text-lg px-8 py-6 h-auto font-medium"
          >
            Get Started Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
