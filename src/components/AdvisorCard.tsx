
import React from 'react';
import { Advisor } from '../data/advisors';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdvisorCardProps {
  advisor: Advisor;
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({ advisor }) => {
  const { id, firmName, advisorName, tagline, photo, location, specializations, verifiedBySpring } = advisor;
  
  // Display only the first 3 specializations
  const displaySpecializations = specializations.slice(0, 3);
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="aspect-[3/2] overflow-hidden bg-secondary/10">
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
            <Badge variant="outline" className="bg-spring-soft-purple border-spring-purple text-spring-purple flex items-center gap-1 px-2">
              <CheckCircle size={14} />
              <span>Verified</span>
            </Badge>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        
        <h3 className="font-semibold text-xl mb-1">{firmName}</h3>
        <p className="text-sm text-muted-foreground mb-3">{advisorName}</p>
        
        <p className="text-sm mb-4">{tagline}</p>
        
        <div className="flex flex-wrap gap-2">
          {displaySpecializations.map((specialization) => (
            <Badge key={specialization} variant="tag" className="font-normal">
              {specialization}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button asChild className="w-full bg-spring-green hover:bg-spring-green/90">
          <Link to={`/advisor/${id}`}>
            View Profile
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdvisorCard;
