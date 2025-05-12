
import React from 'react';
import { Testimonial } from '../data/advisors';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white relative">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Rating stars - randomly 4 or 5 stars */}
        <div className="flex mb-4 text-[#108E66]">
          {[...Array(Math.random() > 0.3 ? 5 : 4)].map((_, i) => (
            <Star key={i} size={16} fill="#108E66" className="mr-1" />
          ))}
        </div>

        <div className="text-spring-green mb-4">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13456 8H13.1346L10.1346 16H6.13456L9.13456 8Z" fill="currentColor"/>
            <path d="M17.1346 8H21.1346L18.1346 16H14.1346L17.1346 8Z" fill="currentColor"/>
          </svg>
        </div>

        <blockquote className="mb-6 italic text-[#272A2B] flex-grow">
          "{testimonial.text}"
        </blockquote>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            {/* Avatar circle with initials */}
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 text-[#108E66] font-semibold">
              {testimonial.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <p className="font-medium text-[#272A2B]">{testimonial.author}</p>
              {testimonial.designation && (
                <p className="text-sm text-gray-500">{testimonial.designation}</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
