
import React from 'react';
import { Testimonial } from '../data/advisors';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-spring-green mb-4">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13456 8H13.1346L10.1346 16H6.13456L9.13456 8Z" fill="currentColor"/>
            <path d="M17.1346 8H21.1346L18.1346 16H14.1346L17.1346 8Z" fill="currentColor"/>
          </svg>
        </div>
        <blockquote className="mb-6 italic text-[#272A2B] flex-grow">
          "{testimonial.text}"
        </blockquote>
        <div className="mt-auto">
          <p className="font-medium text-[#272A2B]">{testimonial.author}</p>
          {testimonial.designation && (
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
