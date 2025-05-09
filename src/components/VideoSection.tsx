
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection: React.FC = () => {
  const videoUrl = "https://youtu.be/0LTAmuIidsI?si=AO06qWaUgZfHD0ou";
  
  const openYoutubeVideo = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="py-16 px-4 bg-[#FCFFFE]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#108E66] text-center mb-12">How it works?</h2>
        
        <Card className="border-gray-200 overflow-hidden">
          <CardContent className="p-4 md:p-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              {/* Video Column */}
              <div className="lg:w-1/2 relative">
                <div className="rounded-lg overflow-hidden shadow-md relative group">
                  {/* YouTube Thumbnail with Play Button Overlay */}
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src="/lovable-uploads/f223bea3-ee17-4bbe-bc19-a6c82a7793c0.png" 
                      alt="CEO explaining financial planning" 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
                      onClick={openYoutubeVideo}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#108E66] flex items-center justify-center transition-transform group-hover:scale-110">
                        <Youtube className="text-white w-8 h-8 md:w-10 md:h-10" />
                      </div>
                    </div>
                  </div>
                </div>
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
                  onClick={openYoutubeVideo}
                >
                  Watch full video on Youtube
                  <Youtube size={16} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoSection;
