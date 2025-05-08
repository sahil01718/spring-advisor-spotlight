
import React from 'react';
import { Testimonial } from '../data/advisors';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="h-full rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-6">
        <div className="text-green-600 mb-4">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13456 8H13.1346L10.1346 16H6.13456L9.13456 8Z" fill="currentColor"/>
            <path d="M17.1346 8H21.1346L18.1346 16H14.1346L17.1346 8Z" fill="currentColor"/>
          </svg>
        </div>
        <blockquote className="mb-6 italic">
          "{testimonial.text}"
        </blockquote>
        <div>
          <p className="font-medium">{testimonial.author}</p>
          {testimonial.designation && (
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
