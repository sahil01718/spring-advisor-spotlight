
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';

const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      text: "Working with Spring Money changed my financial future. My advisor helped me create a solid retirement plan and optimize my investments. I've seen a 15% increase in my portfolio over the last year alone!",
      author: "Michael Thompson",
      designation: "Business Owner"
    },
    {
      text: "I was overwhelmed by managing my finances after inheriting my family business. My advisor at Spring Money provided clear guidance that helped me make confident decisions. I feel secure knowing I have expert support.",
      author: "Sarah Williams",
      designation: "Entrepreneur"
    },
    {
      text: "The personalized approach at Spring Money makes all the difference. My advisor takes the time to understand my goals and risk tolerance. They've helped me navigate market volatility with strategies tailored to my needs.",
      author: "David Chen",
      designation: "Healthcare Professional"
    },
    {
      text: "Planning for retirement seemed impossible until I connected with Spring Money. My advisor created a roadmap that gives me confidence I'll be able to maintain my lifestyle when I retire in five years.",
      author: "Jennifer Lopez",
      designation: "Education Director"
    },
    {
      text: "Spring Money advisors excel at explaining complex financial concepts in understandable terms. I finally feel in control of my finances and have a clear path toward my goals.",
      author: "Robert Jackson",
      designation: "Technology Consultant"
    }
  ];

  return (
    <div className="py-16 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#272A2B] mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have transformed their financial futures with Spring Money advisors
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="h-full">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
