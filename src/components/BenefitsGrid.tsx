
import React from 'react';
import { 
  ShieldCheck,
  TrendingUp,
  HandHeart,
  CalendarCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full overflow-hidden">
      <CardHeader className="pb-2">
        <div className="text-[#108E66] flex justify-center mb-2">
          {icon}
        </div>
        <CardTitle className="text-xl text-center text-[#272A2B]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      title: "Maximize Your Returns",
      description: "Our advisors use proven strategies to help you get the most out of your investments with personalized portfolio management.",
      icon: <TrendingUp size={48} strokeWidth={1.5} />
    },
    {
      title: "Protect Your Future",
      description: "Comprehensive risk assessment and management to safeguard your assets and ensure long-term security.",
      icon: <ShieldCheck size={48} strokeWidth={1.5} />
    },
    {
      title: "Achieve Financial Freedom",
      description: "Tailored roadmaps to help you meet your life goals and secure the financial independence you deserve.",
      icon: <HandHeart size={48} strokeWidth={1.5} />
    },
    {
      title: "Comprehensive Planning",
      description: "Holistic financial planning that addresses all aspects of your financial life, from investments to retirement.",
      icon: <CalendarCheck size={48} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#272A2B] mb-4">Why Choose Spring Money Advisors?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform connects you with verified advisors who provide expert financial guidance tailored to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
