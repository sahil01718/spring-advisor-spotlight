
import React from 'react';
import { Advisor } from '../data/advisors';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';

interface AdvisorCardProps {
  advisor: Advisor;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({ advisor }) => {
  const { id, firmName, advisorName, tagline, photo, location, specializations, verifiedBySpring } = advisor;
  
  // Display only the first 3 specializations
  const displaySpecializations = specializations.slice(0, 3);
  
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      {/* Card Header/Image */}
      <div className="p-0 relative">
        <div className="aspect-[3/2] overflow-hidden bg-gray-100">
          <img
            src={photo}
            alt={advisorName}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80";
            }}
          />
        </div>
        {verifiedBySpring && (
          <div className="absolute top-2 right-2 bg-[#FCFFFE] rounded-full p-1">
            <div className="inline-flex items-center rounded-full border-transparent bg-green-50 border px-2.5 py-0.5 text-xs font-semibold text-[#108E66]">
              <CheckCircle size={14} className="mr-1" />
              <span>Verified</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Card Content */}
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        
        <h3 className="font-semibold text-xl mb-1 text-[#272A2B]">{firmName}</h3>
        <p className="text-sm text-gray-500 mb-3">{advisorName}</p>
        
        <p className="text-sm mb-4 line-clamp-2 text-[#272A2B]">{tagline}</p>
        
        <div className="flex flex-wrap gap-2">
          {displaySpecializations.map((specialization) => (
            <span key={specialization} className="inline-flex items-center rounded-full bg-[#108E66] px-2.5 py-0.5 text-xs font-semibold text-[#FCFFFE]">
              {specialization}
            </span>
          ))}
        </div>
      </CardContent>
      
      {/* Card Footer */}
      <CardFooter className="p-4 pt-0">
        <Link 
          to={`/advisor/${id}`}
          className="w-full flex justify-center items-center h-10 px-4 py-2 rounded-md bg-[#108E66] text-[#FCFFFE] font-medium hover:bg-opacity-90 transition-colors"
        >
          View Profile
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AdvisorCard;
