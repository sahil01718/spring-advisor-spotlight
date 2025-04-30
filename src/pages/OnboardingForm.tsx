
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const OnboardingForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-spring-purple hover:text-spring-purple/80 mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to Marketplace
        </Link>
        
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">List Your Advisory Practice</CardTitle>
            <CardDescription className="text-lg">
              Join the Spring Money advisor network and connect with clients who value trusted financial guidance
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="bg-spring-soft-purple/30 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-medium mb-4">Why join Spring Money's RIA Marketplace?</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-spring-purple flex items-center justify-center text-white font-medium">1</div>
                  <div>
                    <h4 className="font-medium">Targeted Visibility</h4>
                    <p className="text-sm text-muted-foreground">Reach clients specifically looking for registered advisors</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-spring-purple flex items-center justify-center text-white font-medium">2</div>
                  <div>
                    <h4 className="font-medium">Trust Badge</h4>
                    <p className="text-sm text-muted-foreground">Spring Money verification increases client confidence</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-spring-purple flex items-center justify-center text-white font-medium">3</div>
                  <div>
                    <h4 className="font-medium">Quality Leads</h4>
                    <p className="text-sm text-muted-foreground">Connect with financially educated clients</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-spring-purple flex items-center justify-center text-white font-medium">4</div>
                  <div>
                    <h4 className="font-medium">Professional Profile</h4>
                    <p className="text-sm text-muted-foreground">Showcase your expertise and services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-6">Complete this form to apply for listing on Spring Money's advisor marketplace. Our team will review your application and get in touch with next steps.</p>
              
              <Button size="lg" className="bg-spring-purple hover:bg-spring-purple/90">
                Apply to Join
              </Button>
              
              <p className="mt-4 text-sm text-muted-foreground">
                By applying, you agree to Spring Money's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingForm;
