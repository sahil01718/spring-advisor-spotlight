
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#FCFFFE]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#108E66] text-center mb-12">How it works?</h2>
        
        <div className="border border-gray-200 rounded-lg p-4 md:p-8 bg-white shadow-sm">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Video/Image Column */}
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/f223bea3-ee17-4bbe-bc19-a6c82a7793c0.png" 
                alt="CEO explaining financial planning" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            {/* Content Column */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#272A2B] mb-4">
                Financial Planning, Simplified: A Step-by-Step Guide
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg">
                Learn how Spring Money simplifies financial planning. 
                This video guides you through the process, from goal 
                setting to expert advisor support. Gain clarity and 
                achieve your financial aspirations.
              </p>
              
              <Button 
                variant="outline" 
                className="self-start border-[#108E66] text-[#108E66] hover:bg-[#108E66] hover:text-[#FCFFFE] transition-colors flex items-center gap-2"
              >
                Watch full video on Youtube
                <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
