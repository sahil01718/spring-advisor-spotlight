
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle, Mail, Phone, Calendar, Video } from 'lucide-react';
import { mockAdvisors, Advisor } from '../data/advisors';
import SocialLinks from '../components/SocialLinks';
import TestimonialCard from '../components/TestimonialCard';
import BlogPost, { BlogPostType } from '../components/BlogPost';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Sample blog posts data
const sampleBlogs: BlogPostType[] = [
  {
    id: "1",
    title: "Understanding Mutual Fund Expense Ratios",
    excerpt: "Learn how expense ratios impact your investment returns and what to look for when choosing mutual funds.",
    date: "June 15, 2023",
    slug: "understanding-mutual-fund-expense-ratios",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    author: "John Doe"
  },
  {
    id: "2",
    title: "Tax Planning Strategies for High-Income Professionals",
    excerpt: "Discover effective tax planning strategies specifically designed for doctors, lawyers, and other high-income professionals.",
    date: "May 22, 2023",
    slug: "tax-planning-strategies-high-income",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRheCUyMHBsYW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    author: "Jane Smith"
  },
  {
    id: "3",
    title: "Retirement Planning in Your 40s: What You Need to Know",
    excerpt: "It's never too late to start planning for retirement. Here's what you should focus on if you're beginning in your 40s.",
    date: "April 10, 2023",
    slug: "retirement-planning-40s",
    image: "https://images.unsplash.com/photo-1559519529-0936e4058364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmV0aXJlbWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    author: "Michael Johnson"
  }
];

// Define additional types for services, credentials and fee structures
interface ServiceItem {
  name: string;
  description: string;
}

interface FeeItem {
  service: string;
  amount: string;
}

const AdvisorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const advisor = mockAdvisors.find(a => a.id === id);

  if (!advisor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FCFFFE]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-[#272A2B]">Advisor Not Found</h2>
          <p className="mb-4 text-[#272A2B]">We couldn't find the advisor you're looking for.</p>
          <Link to="/" className="text-spring-green hover:underline">
            Return to Advisor Listing
          </Link>
        </div>
      </div>
    );
  }

  // Access properties from the contactDetails object correctly
  const email = advisor.contactDetails.email || "contact@example.com";
  const phone = advisor.contactDetails.phone || "(555) 123-4567";
  const address = advisor.location || "Location not specified";
  
  // Define default services based on the advisor's specializations
  const services: ServiceItem[] = advisor.services.map(service => ({
    name: service,
    description: `Professional ${service} services tailored to your needs.`
  })) || [];
  
  // Default values for properties not in Advisor type
  const yearsExperience = 10; // Default value
  const philosophy = advisor.about || "Our approach is centered around understanding your unique financial situation and goals.";
  const approach = advisor.tagline || "We believe in a personalized approach to financial planning.";
  
  // Default fee structure based on specializations
  const feeStructure: FeeItem[] = [
    { service: "Financial Planning", amount: "₹15,000 - ₹35,000" },
    { service: "Investment Management", amount: "0.75% - 1.25% of AUM" },
    { service: "Hourly Consultation", amount: "₹2,500/hour" }
  ];
  
  // Default credentials based on specializations
  const credentials: string[] = [
    "Certified Financial Planner (CFP)",
    "SEBI Registered Investment Advisor"
  ];

  // Sample advisor video URL (YouTube embed)
  const advisorVideo = advisor.id === "1" ? "https://www.youtube.com/embed/JWcG7FCQu1w" : 
                      advisor.id === "2" ? "https://www.youtube.com/embed/TvnX-xEjQYk" : 
                      null;

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section with Advisor Info */}
      <div className="bg-[#FCFFFE] border-b border-gray-200 pb-6">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <Link to="/" className="inline-flex items-center text-spring-green hover:text-opacity-80 mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Back to Advisors
          </Link>
          
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Advisor Photo */}
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-md">
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
                <div className="md:w-2/3">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold text-[#272A2B]">{advisor.firmName}</h1>
                    {advisor.verifiedBySpring && (
                      <div className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-spring-green">
                        <CheckCircle size={14} className="mr-1" />
                        <span>Verified by Spring</span>
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-xl text-gray-600 mb-4">{advisor.advisorName}</h2>
                  
                  <div className="flex items-center text-gray-500 mb-6">
                    <MapPin size={16} className="mr-1" />
                    <span>{address}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{advisor.about}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {advisor.specializations.map((spec) => (
                      <span key={spec} className="inline-flex items-center rounded-full bg-spring-green px-2.5 py-0.5 text-xs font-semibold text-[#FCFFFE]">
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={`mailto:${email}`}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-spring-green px-4 font-medium text-[#FCFFFE] shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#108E66] focus:ring-offset-2"
                    >
                      <Mail size={16} className="mr-2" />
                      Contact via Email
                    </a>
                    {advisor.contactDetails.phone && (
                      <a 
                        href={`tel:${phone}`}
                        className="inline-flex h-10 items-center justify-center rounded-md border border-spring-green bg-transparent px-4 font-medium text-spring-green hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[#108E66] focus:ring-offset-2"
                      >
                        <Phone size={16} className="mr-2" />
                        Call Advisor
                      </a>
                    )}
                    {advisor.contactDetails.calendlyLink && (
                      <a 
                        href={advisor.contactDetails.calendlyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-[#FCFFFE] px-4 font-medium text-[#272A2B] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        <Calendar size={16} className="mr-2" />
                        Schedule Meeting
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Advisor Video (if available) */}
            {advisorVideo && (
              <Card className="mb-8 overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-2xl font-semibold text-[#272A2B]">
                    <Video size={24} className="mr-2 text-spring-green" />
                    Meet {advisor.advisorName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full overflow-hidden rounded-md">
                    <AspectRatio ratio={16/9}>
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={advisorVideo}
                        title={`${advisor.advisorName} introduction video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="object-cover"
                      ></iframe>
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {/* Services Section */}
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#272A2B]">Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-spring-green">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#272A2B]">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* About Section */}
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#272A2B]">About {advisor.firmName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-[#272A2B]">
                    With {yearsExperience} years of experience in financial advisory, {advisor.advisorName} has helped numerous clients achieve their financial goals through personalized strategies and dedicated service.
                  </p>
                  <p className="mb-4 text-[#272A2B]">
                    {philosophy}
                  </p>
                  <p className="text-[#272A2B]">
                    {approach}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Client Types Section */}
            <Card className="mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-[#272A2B]">Ideal Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advisor.audience.map((type, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-spring-green mr-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[#272A2B]">{type}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonials Section */}
            {advisor.testimonials && advisor.testimonials.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#272A2B]">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advisor.testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            )}
            
            {/* Blog Posts Section - Improved layout */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-[#272A2B]">Latest Articles</h2>
                <Link 
                  to={`/advisor/${advisor.id}/blogs`} 
                  className="text-spring-green hover:underline text-sm font-medium"
                >
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleBlogs.map(post => (
                  <BlogPost key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div>
            {/* Contact Card - No longer sticky */}
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-[#272A2B]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-spring-green mt-0.5 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${email}`} className="text-spring-green hover:underline">
                        {email}
                      </a>
                    </div>
                  </div>
                  
                  {advisor.contactDetails.phone && (
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-spring-green mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href={`tel:${phone}`} className="hover:underline text-[#272A2B]">
                          {phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-spring-green mt-0.5 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Office Location</p>
                      <address className="not-italic text-[#272A2B]">
                        {address}
                      </address>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                {advisor.socialMedia && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">Connect with {advisor.advisorName}</p>
                    <SocialLinks socialMedia={advisor.socialMedia} />
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Fee Structure */}
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-[#272A2B]">Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-2">
                  {feeStructure.map((fee, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-[#272A2B]">{fee.service}</span>
                      <span className="font-medium text-[#272A2B]">{fee.amount}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Fees may vary based on complexity and scope of work
                </p>
              </CardContent>
            </Card>
            
            {/* Credentials */}
            {credentials.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-[#272A2B]">Credentials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {credentials.map((credential, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-spring-green mr-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-[#272A2B]">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDetail;
