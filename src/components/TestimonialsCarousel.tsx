
import React, { useState, useEffect } from 'react';
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
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../data/advisors';

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
      thumbnailUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "Breaking Free from Financial Mistakes",
      description: "From Impulsive to Planned: Financial Freedom.",
      author: "Sandip Mahajan",
      role: "Business Owner",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      thumbnailUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Making Smarter, Goal-Based Investments",
      description: "Goals Achieved: Beyond Investments, Life Planning.",
      author: "Abhi Kasturi",
      role: "Healthcare Professional",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      thumbnailUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Retirement Planning Made Simple",
      description: "Securing Your Future with Expert Guidance.",
      author: "Priya Sharma",
      role: "Education Professional",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
    },
    {
      id: "5",
      title: "Financial Independence Journey",
      description: "From Debt to Freedom: My Financial Transformation.",
      author: "Rahul Kapoor",
      role: "Marketing Executive",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "6",
      title: "Tax Optimization Strategies That Work",
      description: "Legal Ways to Minimize Tax Burden and Maximize Wealth.",
      author: "Anjali Desai",
      role: "Financial Consultant",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      thumbnailUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      id: "7",
      title: "Building Wealth Through Market Cycles",
      description: "Staying Calm During Market Turbulence for Long-Term Growth.",
      author: "Aarav Patel",
      role: "IT Director",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      thumbnailUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "8",
      title: "Family Financial Planning",
      description: "Creating a Secure Future for Your Children and Beyond.",
      author: "Meera Verma",
      role: "Healthcare Administrator",
      videoUrl: "https://www.youtube.com/watch?v=example8",
      thumbnailUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "9",
      title: "From Confusion to Clarity",
      description: "How a Financial Advisor Changed My Investment Approach.",
      author: "Kiran Singh",
      role: "Entrepreneur",
      videoUrl: "https://www.youtube.com/watch?v=example9",
      thumbnailUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "10",
      title: "Early Retirement Success Story",
      description: "How Smart Planning Let Me Retire at 45.",
      author: "Vikram Khanna",
      role: "Early Retiree",
      videoUrl: "https://www.youtube.com/watch?v=example10",
      thumbnailUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const textTestimonials: Testimonial[] = [
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
    },
    {
      text: "After working with my Spring Money advisor, I've doubled my savings rate without feeling deprived. Their practical approach to budgeting has been transformative for my family.",
      author: "Emma Watson",
      designation: "Project Manager"
    },
    {
      text: "My advisor's strategic approach to debt management helped me eliminate $50,000 in high-interest debt in just two years. Now I'm building wealth instead of paying interest.",
      author: "James Wilson",
      designation: "Sales Director"
    },
    {
      text: "As someone who always found investing intimidating, I appreciate how my Spring Money advisor makes complex concepts accessible and builds my confidence in financial decision-making.",
      author: "Sophia Garcia",
      designation: "Creative Director"
    },
    {
      text: "My family's multi-generational wealth plan gives me peace of mind about our future. Spring Money's comprehensive approach addresses every aspect of our financial life.",
      author: "Daniel Lee",
      designation: "Business Consultant"
    },
    {
      text: "Working with Spring Money helped me align my investments with my values without sacrificing returns. ESG investing with expert guidance has been rewarding both financially and personally.",
      author: "Olivia Martinez",
      designation: "Environmental Scientist"
    }
  ];

  const [activeTab, setActiveTab] = useState<'video' | 'text'>('video');
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    watchDrag: false
  });
  const [emblaRefText, emblaApiText] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    watchDrag: false
  });

  // Auto-scroll for video testimonials
  useEffect(() => {
    if (emblaApi && activeTab === 'video') {
      const autoScrollInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      
      return () => clearInterval(autoScrollInterval);
    }
  }, [emblaApi, activeTab]);

  // Auto-scroll for text testimonials
  useEffect(() => {
    if (emblaApiText && activeTab === 'text') {
      const autoScrollInterval = setInterval(() => {
        emblaApiText.scrollNext();
      }, 5000);
      
      return () => clearInterval(autoScrollInterval);
    }
  }, [emblaApiText, activeTab]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApiText) {
      emblaApiText.on('select', () => {
        setActiveIndex(emblaApiText.selectedScrollSnap());
      });
    }
  }, [emblaApiText]);

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
            <Carousel ref={emblaRef} className="w-full">
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
            ref={emblaRefText}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {textTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TestimonialCard testimonial={testimonial} />
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
                    onClick={() => emblaApiText && emblaApiText.scrollTo(index)}
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
