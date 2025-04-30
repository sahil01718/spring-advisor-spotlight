
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, Calendar, Link as LinkIcon, ArrowLeft, CheckCircle, BookOpen } from 'lucide-react';
import { Advisor, mockAdvisors } from '../data/advisors';
import SocialLinks from '../components/SocialLinks';
import TestimonialCard from '../components/TestimonialCard';

// Define a Blog type for the advisor's blogs
interface Blog {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  slug: string;
  coverImage?: string;
}

const AdvisorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [advisor, setAdvisor] = useState<Advisor | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock blogs data - in a real app, this would come from your API
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: '1',
      title: 'Understanding Mutual Fund Expense Ratios',
      excerpt: 'Learn how expense ratios impact your investment returns over time and what to look for when selecting funds.',
      publishDate: '2023-11-15',
      slug: 'understanding-mutual-fund-expense-ratios',
      coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80'
    },
    {
      id: '2',
      title: 'Tax Planning Strategies for Salaried Professionals',
      excerpt: 'Discover how salaried professionals can optimize their tax planning with these actionable strategies.',
      publishDate: '2023-09-22',
      slug: 'tax-planning-strategies-salaried',
      coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21ed1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80'
    },
    {
      id: '3',
      title: 'Retirement Planning in Your 30s: Why It Matters',
      excerpt: "Starting retirement planning early can make a significant difference. Here's why your 30s are crucial.",
      publishDate: '2023-08-05',
      slug: 'retirement-planning-30s',
      coverImage: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80'
    }
  ]);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchAdvisor = () => {
      setLoading(true);
      try {
        if (!id) return;
        
        const foundAdvisor = mockAdvisors.find(a => a.id === id);
        setAdvisor(foundAdvisor || null);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500); // Small timeout to ensure UI elements have time to render
      }
    };
    
    fetchAdvisor();
  }, [id]);

  // Format date for blogs
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-spring-green mx-auto mb-4"></div>
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
            <Button variant="spring">Return to Marketplace</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-spring-green hover:text-spring-green/80">
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
                  <Badge className="bg-spring-soft-green border-spring-green text-spring-green flex items-center gap-1">
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
                  <Button variant="spring" asChild>
                    <a href={advisor.contactDetails.calendlyLink} target="_blank" rel="noopener noreferrer">
                      <Calendar size={16} />
                      Book Consultation
                    </a>
                  </Button>
                )}
                
                {advisor.contactDetails.email && (
                  <Button variant="outline" asChild>
                    <a href={`mailto:${advisor.contactDetails.email}`}>
                      <Mail size={16} />
                      Contact
                    </a>
                  </Button>
                )}
                
                {advisor.contactDetails.website && (
                  <Button variant="outline" asChild>
                    <a href={advisor.contactDetails.website} target="_blank" rel="noopener noreferrer">
                      <LinkIcon size={16} />
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
            <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">About the Firm</h2>
              <div className="prose max-w-none">
                <p>{advisor.about}</p>
              </div>
            </section>
            
            {/* Services */}
            <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
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
            <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
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
              <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
                <div className="space-y-3">
                  {advisor.successStories.map((story, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex">
                          <div className="mr-3 text-spring-green">
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
              <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advisor.testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </section>
            )}
            
            {/* Blog Posts - Enhanced Section */}
            <section className="mb-12 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <BookOpen size={24} className="mr-2 text-spring-green" />
                Latest Insights from {advisor.firmName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                  <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                    {blog.coverImage && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img 
                          src={blog.coverImage} 
                          alt={blog.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-5 flex-grow flex flex-col">
                      <p className="text-sm text-muted-foreground mb-2">
                        {formatDate(blog.publishDate)}
                      </p>
                      <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                        {blog.excerpt}
                      </p>
                      <Button variant="spring" size="sm" className="mt-auto self-start" asChild>
                        <Link to={`/blogs/${blog.slug}`}>
                          Read More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="text-spring-green border-spring-green hover:bg-spring-green/10" asChild>
                  <Link to={`/advisor/${advisor.id}/blogs`}>
                    View All Articles
                  </Link>
                </Button>
              </div>
            </section>
          </div>
          
          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-3">
                  {advisor.contactDetails.phone && (
                    <div className="flex items-start">
                      <Phone size={16} className="mr-3 mt-1 text-spring-green" />
                      <a href={`tel:${advisor.contactDetails.phone}`} className="hover:text-spring-green">
                        {advisor.contactDetails.phone}
                      </a>
                    </div>
                  )}
                  
                  {advisor.contactDetails.email && (
                    <div className="flex items-start">
                      <Mail size={16} className="mr-3 mt-1 text-spring-green" />
                      <a href={`mailto:${advisor.contactDetails.email}`} className="hover:text-spring-green">
                        {advisor.contactDetails.email}
                      </a>
                    </div>
                  )}
                  
                  {advisor.contactDetails.website && (
                    <div className="flex items-start">
                      <LinkIcon size={16} className="mr-3 mt-1 text-spring-green" />
                      <a 
                        href={advisor.contactDetails.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-spring-green hover:underline truncate"
                      >
                        {advisor.contactDetails.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
                
                {advisor.contactDetails.calendlyLink && (
                  <div className="mt-6">
                    <Button variant="spring" className="w-full" asChild>
                      <a 
                        href={advisor.contactDetails.calendlyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Calendar size={16} />
                        Schedule a Meeting
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Social Media */}
            {advisor.socialMedia && advisor.socialMedia.length > 0 && (
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <SocialLinks socialMedia={advisor.socialMedia} />
                </CardContent>
              </Card>
            )}
            
            {/* SEBI Registration */}
            <Card className="shadow-sm">
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
            
            {/* Quick Actions */}
            <Card className="shadow-sm bg-spring-green/5 border-spring-green/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="spring" className="w-full" asChild>
                    <a href="#" onClick={(e) => {
                      e.preventDefault(); 
                      window.location.href = `mailto:${advisor.contactDetails.email}?subject=Request for Financial Consultation`;
                    }}>
                      Request Consultation
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      window.open('https://forms.gle/example', '_blank');
                    }}>
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDetail;
