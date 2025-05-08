
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';

interface OfferSlideProps {
  title: string;
  description: string;
  ctaText: string;
  bgColor: string;
}

const OfferSlide: React.FC<OfferSlideProps> = ({ 
  title, 
  description, 
  ctaText, 
  bgColor 
}) => {
  return (
    <div className={`h-full w-full rounded-lg p-8 ${bgColor} flex flex-col justify-between`}>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#FCFFFE] mb-3">{title}</h3>
        <p className="text-[#FCFFFE] opacity-90 mb-6 max-w-md">{description}</p>
      </div>
      <Button 
        variant="spring" 
        className="self-start bg-[#FCFFFE] text-[#108E66] hover:bg-[#FCFFFE]/90"
      >
        {ctaText} <ChevronRight className="ml-1" size={16} />
      </Button>
    </div>
  );
};

const PowerPlayCTA: React.FC = () => {
  const offers = [
    {
      title: "Free Financial Health Check",
      description: "Get a comprehensive assessment of your current financial situation and personalized recommendations from our expert advisors.",
      ctaText: "Book Now",
      bgColor: "bg-gradient-to-r from-[#108E66] to-[#1aab80]"
    },
    {
      title: "Retirement Planning Special",
      description: "Limited time offer: Get a detailed retirement readiness report and consultation at 50% off our regular price.",
      ctaText: "Learn More",
      bgColor: "bg-gradient-to-r from-[#108E66] to-[#1aab80]"
    },
    {
      title: "Investment Portfolio Review",
      description: "Have our experts analyze your current investments and identify opportunities to maximize your returns.",
      ctaText: "Get Started",
      bgColor: "bg-gradient-to-r from-[#108E66] to-[#1aab80]"
    }
  ];

  return (
    <div className="py-16 px-4 bg-[#FCFFFE]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#272A2B] mb-3">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take advantage of these limited-time opportunities to enhance your financial future
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {offers.map((offer, index) => (
                <CarouselItem key={index} className="md:basis-3/4 lg:basis-2/3 h-[300px]">
                  <OfferSlide
                    title={offer.title}
                    description={offer.description}
                    ctaText={offer.ctaText}
                    bgColor={offer.bgColor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static relative transform-none rounded-full" />
              <CarouselNext className="static relative transform-none rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PowerPlayCTA;
