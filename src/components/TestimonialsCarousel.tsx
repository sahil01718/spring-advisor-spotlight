
import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';

interface VideoTestimonial {
  id: string;
  title: string;
  description: string;
  author: string;
  role: string;
  videoUrl: string;
  thumbnailUrl: string;
}

const TestimonialsCarousel: React.FC = () => {
  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "1",
      title: "Your Coach to Wealth",
      description: "Focus on Career, Not Portfolio.",
      author: "Vijit Nima",
      role: "Technology Professional",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      thumbnailUrl: "/lovable-uploads/ee39fa69-9ea2-464e-af3c-50fc4b35cad4.png"
    },
    {
      id: "2",
      title: "Breaking Free from Financial Mistakes",
      description: "From Impulsive to Planned: Financial Freedom.",
      author: "Sandip Mahajan",
      role: "Business Owner",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      thumbnailUrl: "/lovable-uploads/ee39fa69-9ea2-464e-af3c-50fc4b35cad4.png"
    },
    {
      id: "3",
      title: "Making Smarter, Goal-Based Investments",
      description: "Goals Achieved: Beyond Investments, Life Planning.",
      author: "Abhi Kasturi",
      role: "Healthcare Professional",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      thumbnailUrl: "/lovable-uploads/ee39fa69-9ea2-464e-af3c-50fc4b35cad4.png"
    }
  ];

  const textTestimonials = [
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

  const [activeTab, setActiveTab] = useState<'video' | 'text'>('video');
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const openVideoUrl = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-16 px-4 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#272A2B] mb-6">Don't just take our word for it</h2>
          <p className="text-xl text-[#108E66] font-medium mb-8">
            Real People, Real Results.
          </p>
          
          {/* Tabs for switching between video and text testimonials */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-6 py-2 text-sm font-medium rounded-l-lg border ${
                  activeTab === 'video' 
                    ? 'bg-[#108E66] text-white border-[#108E66]' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('video')}
              >
                Video Testimonials
              </button>
              <button
                type="button"
                className={`px-6 py-2 text-sm font-medium rounded-r-lg border ${
                  activeTab === 'text' 
                    ? 'bg-[#108E66] text-white border-[#108E66]' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('text')}
              >
                Client Reviews
              </button>
            </div>
          </div>
        </div>
        
        {/* Video Testimonials */}
        {activeTab === 'video' && (
          <div className="relative px-4">
            <Carousel className="w-full">
              <CarouselContent>
                {videoTestimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <Card className="border border-gray-200 rounded-lg overflow-hidden h-full">
                      <CardContent className="p-0">
                        <div className="flex flex-col h-full">
                          {/* Video Thumbnail with Play Button */}
                          <div className="relative group cursor-pointer" onClick={() => openVideoUrl(testimonial.videoUrl)}>
                            <img 
                              src={testimonial.thumbnailUrl}
                              alt={`${testimonial.author}'s testimonial`}
                              className="w-full aspect-video object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                              <div className="w-12 h-12 rounded-full bg-[#108E66] flex items-center justify-center transition-transform group-hover:scale-110">
                                <Youtube className="text-white w-6 h-6" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Testimonial Content */}
                          <div className="p-5">
                            <h3 className="font-semibold text-xl mb-2 text-[#272A2B]">{testimonial.title}</h3>
                            <p className="text-gray-600 mb-4">{testimonial.description}</p>
                            <div className="mt-auto">
                              <p className="font-medium text-[#272A2B]">{testimonial.author}</p>
                              <p className="text-sm text-gray-500">{testimonial.role}</p>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 border-[#108E66] text-[#108E66] hover:bg-[#108E66] hover:text-white w-full"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openVideoUrl(testimonial.videoUrl);
                                }}
                              >
                                Watch Full Video on Youtube
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="flex justify-center items-center gap-2 mt-8">
                <CarouselPrevious className="static transform-none" />
                
                {/* Pagination Dots */}
                <div className="flex items-center gap-2 mx-4">
                  {videoTestimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        activeTab === 'video' && index === activeIndex ? "w-6 bg-[#108E66]" : "w-2 bg-gray-300"
                      }`}
                      onClick={() => emblaApi && emblaApi.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <CarouselNext className="static transform-none" />
              </div>
            </Carousel>
          </div>
        )}
        
        {/* Text Testimonials */}
        {activeTab === 'text' && (
          <Carousel
            ref={emblaRef}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {textTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full">
                    <div className="h-full rounded-lg border border-gray-200 bg-[#FCFFFE] shadow-sm">
                      <div className="p-6">
                        <div className="text-[#108E66] mb-4">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.13456 8H13.1346L10.1346 16H6.13456L9.13456 8Z" fill="currentColor"/>
                            <path d="M17.1346 8H21.1346L18.1346 16H14.1346L17.1346 8Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <blockquote className="mb-6 italic text-[#272A2B]">
                          "{testimonial.text}"
                        </blockquote>
                        <div>
                          <p className="font-medium text-[#272A2B]">{testimonial.author}</p>
                          {testimonial.designation && (
                            <p className="text-sm text-gray-500">{testimonial.designation}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none" />
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mx-4">
                {textTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      activeTab === 'text' && index === activeIndex ? "w-6 bg-[#108E66]" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
