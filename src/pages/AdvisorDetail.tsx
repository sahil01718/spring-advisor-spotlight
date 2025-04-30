
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Calendar, Link as LinkIcon, ArrowLeft, CheckCircle } from 'lucide-react';
import { Advisor, mockAdvisors } from '../data/advisors';
import SocialLinks from '../components/SocialLinks';
import TestimonialCard from '../components/TestimonialCard';

const AdvisorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [advisor, setAdvisor] = useState<Advisor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchAdvisor = () => {
      setLoading(true);
      try {
        if (!id) return;
        
        const foundAdvisor = mockAdvisors.find(a => a.id === id);
        setAdvisor(foundAdvisor || null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAdvisor();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-spring-purple mx-auto mb-4"></div>
          <p>Loading advisor details...</p>
        </div>
      </div>
    );
  }

  if (!advisor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Advisor Not Found</h1>
          <p className="mb-6">We couldn't find the advisor you're looking for.</p>
          <Link to="/">
            <Button>Return to Marketplace</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-spring-purple hover:text-spring-purple/80">
          <ArrowLeft size={16} className="mr-1" />
          Back to Marketplace
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Advisor Photo */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={advisor.photo}
                  alt={advisor.advisorName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80";
                  }}
                />
              </div>
            </div>
            
            {/* Advisor Info */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{advisor.firmName}</h1>
                {advisor.verifiedBySpring && (
                  <Badge className="bg-spring-soft-purple border-spring-purple text-spring-purple flex items-center gap-1">
                    <CheckCircle size={14} />
                    <span>Verified by Spring Money</span>
                  </Badge>
                )}
              </div>
              
              <p className="text-xl mb-3">{advisor.advisorName}</p>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{advisor.location}</span>
              </div>
              
              <p className="text-lg mb-6 max-w-2xl">{advisor.tagline}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {advisor.specializations.map((specialization) => (
                  <Badge key={specialization} variant="tag">
                    {specialization}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {advisor.contactDetails.calendlyLink && (
                  <Button className="bg-spring-green hover:bg-spring-green/90">
                    <Calendar size={16} className="mr-2" />
                    Book Consultation
                  </Button>
                )}
                
                {advisor.contactDetails.email && (
                  <Button variant="outline">
                    <Mail size={16} className="mr-2" />
                    Contact
                  </Button>
                )}
                
                {advisor.contactDetails.website && (
                  <Button variant="outline" asChild>
                    <a href={advisor.contactDetails.website} target="_blank" rel="noopener noreferrer">
                      <LinkIcon size={16} className="mr-2" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            {/* About */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">About the Firm</h2>
              <div className="prose max-w-none">
                <p>{advisor.about}</p>
              </div>
            </section>
            
            {/* Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {advisor.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-3 mt-1 text-spring-green">
                      <CheckCircle size={16} />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Target Audience */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Who They Serve</h2>
              <div className="flex flex-wrap gap-2">
                {advisor.audience.map((audience) => (
                  <Badge key={audience} variant="tag" className="text-sm">
                    {audience}
                  </Badge>
                ))}
              </div>
            </section>
            
            {/* Success Stories */}
            {advisor.successStories && advisor.successStories.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
                <div className="space-y-3">
                  {advisor.successStories.map((story, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex">
                          <div className="mr-3 text-spring-purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                            </svg>
                          </div>
                          <p>{story}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
            
            {/* Testimonials */}
            {advisor.testimonials && advisor.testimonials.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advisor.testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </section>
            )}
          </div>
          
          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-3">
                  {advisor.contactDetails.phone && (
                    <div className="flex items-start">
                      <Phone size={16} className="mr-3 mt-1 text-spring-purple" />
                      <span>{advisor.contactDetails.phone}</span>
                    </div>
                  )}
                  
                  {advisor.contactDetails.email && (
                    <div className="flex items-start">
                      <Mail size={16} className="mr-3 mt-1 text-spring-purple" />
                      <span>{advisor.contactDetails.email}</span>
                    </div>
                  )}
                  
                  {advisor.contactDetails.website && (
                    <div className="flex items-start">
                      <LinkIcon size={16} className="mr-3 mt-1 text-spring-purple" />
                      <a 
                        href={advisor.contactDetails.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-spring-purple hover:underline truncate"
                      >
                        {advisor.contactDetails.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
                
                {advisor.contactDetails.calendlyLink && (
                  <div className="mt-6">
                    <Button className="w-full bg-spring-green hover:bg-spring-green/90" asChild>
                      <a 
                        href={advisor.contactDetails.calendlyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Calendar size={16} className="mr-2" />
                        Schedule a Meeting
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Social Media */}
            {advisor.socialMedia && advisor.socialMedia.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <SocialLinks socialMedia={advisor.socialMedia} />
                </CardContent>
              </Card>
            )}
            
            {/* SEBI Registration */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Regulatory Information</h3>
                <div className="mb-3">
                  <p className="text-sm text-muted-foreground mb-1">SEBI Registration Number</p>
                  <p className="font-medium">{advisor.sebiRegistrationNumber}</p>
                </div>
                
                {advisor.grievanceOfficer && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Grievance Officer</p>
                    <p className="font-medium">{advisor.grievanceOfficer.name}</p>
                    <p className="text-sm">{advisor.grievanceOfficer.email}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDetail;
