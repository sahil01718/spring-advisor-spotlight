
import React from 'react';
import { 
  TrendingUp,
  Calculator,
  ShieldCheck,
  Landmark
} from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <img src={image} alt={title} className="h-48 object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      title: "Build Wealth & Secure Your Future",
      description: "Personalized strategies for growth and retirement.",
      icon: <TrendingUp size={48} strokeWidth={1.5} className="text-[#0B8A59]" />,
      image: "/lovable-uploads/eb0e214c-0e4f-4086-b51a-f3aa0c36dff2.png"
    },
    {
      title: "Maximize Returns, Minimize Taxes",
      description: "Expert investment strategies across diverse assets.",
      icon: <Calculator size={48} strokeWidth={1.5} className="text-[#0B8A59]" />,
      image: "/lovable-uploads/eb0e214c-0e4f-4086-b51a-f3aa0c36dff2.png"
    },
    {
      title: "Protect Your Future",
      description: "Tailored insurance planning for you, your family and your assets.",
      icon: <ShieldCheck size={48} strokeWidth={1.5} className="text-[#0B8A59]" />,
      image: "/lovable-uploads/eb0e214c-0e4f-4086-b51a-f3aa0c36dff2.png"
    },
    {
      title: "Secure Your Legacy",
      description: "Plan your estate and ensure a smooth wealth transfer.",
      icon: <Landmark size={48} strokeWidth={1.5} className="text-[#0B8A59]" />,
      image: "/lovable-uploads/eb0e214c-0e4f-4086-b51a-f3aa0c36dff2.png"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expertise, Your Financial Success</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              image={benefit.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
