
import React from 'react';
import { Advisor } from '../data/advisors';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin } from 'lucide-react';

interface AdvisorCardProps {
  advisor: Advisor;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({ advisor }) => {
  const { id, firmName, advisorName, tagline, photo, location, specializations, verifiedBySpring } = advisor;
  
  // Display only the first 3 specializations
  const displaySpecializations = specializations.slice(0, 3);
  
  return (
    <div className="h-full flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 animate-fade-in">
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
          <div className="absolute top-2 right-2 bg-white rounded-full p-1">
            <div className="inline-flex items-center rounded-full border-transparent bg-green-50 border px-2.5 py-0.5 text-xs font-semibold text-green-600">
              <CheckCircle size={14} className="mr-1" />
              <span>Verified</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Card Content */}
      <div className="p-4 flex-grow">
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        
        <h3 className="font-semibold text-xl mb-1">{firmName}</h3>
        <p className="text-sm text-gray-500 mb-3">{advisorName}</p>
        
        <p className="text-sm mb-4 line-clamp-2">{tagline}</p>
        
        <div className="flex flex-wrap gap-2">
          {displaySpecializations.map((specialization) => (
            <span key={specialization} className="inline-flex items-center rounded-full bg-green-500 px-2.5 py-0.5 text-xs font-semibold text-white">
              {specialization}
            </span>
          ))}
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="p-4 pt-0 mt-auto">
        <Link 
          to={`/advisor/${id}`}
          className="w-full flex justify-center items-center h-10 px-4 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default AdvisorCard;
