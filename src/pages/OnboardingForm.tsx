
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const OnboardingForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft size={16} className="mr-1" />
          Back to Marketplace
        </Link>
        
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="text-center p-6 pb-0">
            <h1 className="text-3xl font-bold">List Your Advisory Practice</h1>
            <p className="text-lg text-gray-600 mt-2">
              Join the Spring Money advisor network and connect with clients who value trusted financial guidance
            </p>
          </div>
          
          <div className="p-6">
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-medium mb-4">Why join Spring Money's RIA Marketplace?</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">1</div>
                  <div>
                    <h4 className="font-medium">Targeted Visibility</h4>
                    <p className="text-sm text-gray-500">Reach clients specifically looking for registered advisors</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">2</div>
                  <div>
                    <h4 className="font-medium">Trust Badge</h4>
                    <p className="text-sm text-gray-500">Spring Money verification increases client confidence</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">3</div>
                  <div>
                    <h4 className="font-medium">Quality Leads</h4>
                    <p className="text-sm text-gray-500">Connect with financially educated clients</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-medium">4</div>
                  <div>
                    <h4 className="font-medium">Professional Profile</h4>
                    <p className="text-sm text-gray-500">Showcase your expertise and services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-6">Complete this form to apply for listing on Spring Money's advisor marketplace. Our team will review your application and get in touch with next steps.</p>
              
              <button className="h-11 px-8 py-2 rounded-md bg-green-600 text-white font-medium shadow hover:bg-green-700 transition-colors">
                Apply to Join
              </button>
              
              <p className="mt-4 text-sm text-gray-500">
                By applying, you agree to Spring Money's <a href="#" className="underline hover:text-green-600">Terms of Service</a> and <a href="#" className="underline hover:text-green-600">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
