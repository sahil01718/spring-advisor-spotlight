
export type Specialization = 
  | 'Retirement Planning' 
  | 'Tax Planning' 
  | 'NRI Services' 
  | 'Estate Planning'
  | 'Mutual Funds' 
  | 'Insurance' 
  | 'Stock Investments' 
  | 'Financial Planning'
  | 'Wealth Management' 
  | 'Debt Management';

export type AudienceType = 
  | 'Salaried' 
  | 'Business Owners' 
  | 'Retired' 
  | 'HNI' 
  | 'NRIs' 
  | 'Young Professionals';

export type Location = 
  | 'Mumbai' 
  | 'Delhi' 
  | 'Bengaluru' 
  | 'Hyderabad' 
  | 'Chennai' 
  | 'Pune' 
  | 'Kolkata' 
  | 'Remote/Virtual';

export interface Testimonial {
  text: string;
  author: string;
  designation?: string;
}

export interface SocialMedia {
  type: 'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'website';
  url: string;
}

export interface Advisor {
  id: string;
  firmName: string;
  advisorName: string;
  photo: string;
  location: Location;
  tagline: string;
  specializations: Specialization[];
  audience: AudienceType[];
  about: string;
  services: string[];
  successStories?: string[];
  testimonials?: Testimonial[];
  socialMedia?: SocialMedia[];
  contactDetails: {
    phone?: string;
    email: string;
    website?: string;
    calendlyLink?: string;
  };
  sebiRegistrationNumber: string;
  verifiedBySpring: boolean;
  grievanceOfficer?: {
    name: string;
    email: string;
  };
}

export const mockAdvisors: Advisor[] = [
  {
    id: "1",
    firmName: "Wealth Wisdom Advisory",
    advisorName: "Rajiv Mehta",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    location: "Mumbai",
    tagline: "Building wealth strategies for your peace of mind",
    specializations: ["Financial Planning", "Retirement Planning", "Tax Planning"],
    audience: ["Salaried", "HNI"],
    about: "Wealth Wisdom Advisory has been helping clients achieve their financial goals for over 15 years. Our personalized approach ensures that each client receives a customized financial strategy that works for their unique situation.",
    services: ["Comprehensive Financial Planning", "Retirement Strategy", "Tax Optimization", "Investment Portfolio Design"],
    successStories: [
      "Helped a client retire 5 years early through strategic planning and investment management",
      "Created a tax-efficient portfolio that saved clients an average of 3.5% annually"
    ],
    testimonials: [
      {
        text: "Rajiv's financial guidance has completely transformed our approach to retirement planning. We now feel confident about our future.",
        author: "Priya Sharma",
        designation: "IT Professional"
      },
      {
        text: "Working with Wealth Wisdom has been the best financial decision we've made. Their tax strategies alone paid for their services multiple times over.",
        author: "Amit Patel",
        designation: "Business Owner"
      }
    ],
    socialMedia: [
      { type: "linkedin", url: "https://linkedin.com/in/rajivmehta" },
      { type: "website", url: "https://wealthwisdom.in" }
    ],
    contactDetails: {
      phone: "+91 9876543210",
      email: "rajiv@wealthwisdom.in",
      website: "https://wealthwisdom.in",
      calendlyLink: "https://calendly.com/rajivmehta"
    },
    sebiRegistrationNumber: "INH000001234",
    verifiedBySpring: true,
    grievanceOfficer: {
      name: "Suman Joshi",
      email: "grievance@wealthwisdom.in"
    }
  },
  {
    id: "2",
    firmName: "Future Forward Financial",
    advisorName: "Priya Singh",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    location: "Bengaluru",
    tagline: "Tech-driven financial solutions for modern professionals",
    specializations: ["Stock Investments", "Mutual Funds", "Financial Planning"],
    audience: ["Young Professionals", "Salaried"],
    about: "Future Forward Financial specializes in helping tech professionals and young earners build wealth through strategic investments and methodical financial planning. We leverage technology to create transparent, accessible solutions.",
    services: ["Robo-advisory Services", "Tech Stock Analysis", "ESOP Planning", "First-time Investor Guidance"],
    testimonials: [
      {
        text: "Priya helped me understand my company ESOPs and create a diversification strategy that made a huge difference to my portfolio.",
        author: "Karthik Raman",
        designation: "Software Engineer"
      }
    ],
    socialMedia: [
      { type: "twitter", url: "https://twitter.com/futureforwardfin" },
      { type: "website", url: "https://futureforwardfinancial.in" }
    ],
    contactDetails: {
      email: "priya@futureforwardfinancial.in",
      website: "https://futureforwardfinancial.in",
      calendlyLink: "https://calendly.com/priyasingh"
    },
    sebiRegistrationNumber: "INH000002345",
    verifiedBySpring: true
  },
  {
    id: "3",
    firmName: "Global Indian Advisors",
    advisorName: "Vikram Khanna",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    location: "Delhi",
    tagline: "Specializing in NRI financial planning and investments",
    specializations: ["NRI Services", "Tax Planning", "Estate Planning"],
    audience: ["NRIs", "HNI"],
    about: "Global Indian Advisors focuses exclusively on the unique financial challenges faced by Non-Resident Indians. From tax implications to repatriation strategies, we handle the complexities of cross-border finances.",
    services: ["NRI Investment Advisory", "FEMA Compliance", "Estate Planning for Global Assets", "Repatriation Strategy"],
    successStories: [
      "Helped 200+ NRI families navigate complex cross-border tax implications",
      "Successfully managed repatriation of assets worth over ₹500 crores for clients returning to India"
    ],
    testimonials: [
      {
        text: "Vikram's expertise in NRI taxation saved us from several costly mistakes when we were investing in India while living abroad.",
        author: "Rohan Mehra",
        designation: "NRI, Singapore"
      }
    ],
    socialMedia: [
      { type: "linkedin", url: "https://linkedin.com/in/vikramkhanna" },
      { type: "website", url: "https://globalindianadvisors.com" }
    ],
    contactDetails: {
      phone: "+91 9867452310",
      email: "vikram@globalindianadvisors.com",
      website: "https://globalindianadvisors.com"
    },
    sebiRegistrationNumber: "INH000003456",
    verifiedBySpring: true,
    grievanceOfficer: {
      name: "Neha Kapoor",
      email: "grievance@globalindianadvisors.com"
    }
  },
  {
    id: "4",
    firmName: "RetireRight Planners",
    advisorName: "Ajay Vaidya",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    location: "Pune",
    tagline: "Planning for the retirement you deserve",
    specializations: ["Retirement Planning", "Financial Planning", "Insurance"],
    audience: ["Retired", "Salaried"],
    about: "RetireRight Planners specializes in creating sustainable retirement strategies that ensure financial security and peace of mind for your golden years. We focus on inflation-beating portfolios with appropriate risk management.",
    services: ["Retirement Corpus Planning", "Pension Optimization", "Post-retirement Tax Planning", "Senior Citizen Investment Advisory"],
    testimonials: [
      {
        text: "Thanks to Ajay's methodical approach, we've not only secured our retirement but are able to help our children financially as well.",
        author: "Suresh & Lalita Murthy",
        designation: "Retired Government Officials"
      }
    ],
    socialMedia: [
      { type: "facebook", url: "https://facebook.com/retireright" },
      { type: "website", url: "https://retireright.in" }
    ],
    contactDetails: {
      phone: "+91 9844556677",
      email: "ajay@retireright.in",
      website: "https://retireright.in"
    },
    sebiRegistrationNumber: "INH000004567",
    verifiedBySpring: true
  },
  {
    id: "5",
    firmName: "Elite Wealth Managers",
    advisorName: "Nisha Agarwal",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    location: "Chennai",
    tagline: "Sophisticated strategies for substantial wealth",
    specializations: ["Wealth Management", "Estate Planning", "Tax Planning"],
    audience: ["HNI", "Business Owners"],
    about: "Elite Wealth Managers caters to high-net-worth individuals requiring sophisticated wealth management, estate planning, and tax optimization strategies. We take a holistic approach to preserving and growing substantial wealth.",
    services: ["Family Office Services", "Business Succession Planning", "Alternative Investments", "Philanthropic Advisory"],
    testimonials: [
      {
        text: "Nisha's expertise in structuring our family wealth has been invaluable, especially in creating a smooth business succession plan across generations.",
        author: "Raj Malhotra",
        designation: "Business Owner"
      }
    ],
    socialMedia: [
      { type: "linkedin", url: "https://linkedin.com/in/nishaagarwal" },
      { type: "website", url: "https://elitewealthmanagers.com" }
    ],
    contactDetails: {
      phone: "+91 9833221144",
      email: "nisha@elitewealthmanagers.com",
      website: "https://elitewealthmanagers.com",
      calendlyLink: "https://calendly.com/nishaagarwal"
    },
    sebiRegistrationNumber: "INH000005678",
    verifiedBySpring: true,
    grievanceOfficer: {
      name: "Rahul Mehta",
      email: "grievance@elitewealthmanagers.com"
    }
  },
  {
    id: "6",
    firmName: "Digital Finance Advisors",
    advisorName: "Arjun Kapoor",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    location: "Remote/Virtual",
    tagline: "Next-gen financial planning for digital natives",
    specializations: ["Mutual Funds", "Stock Investments", "Financial Planning"],
    audience: ["Young Professionals", "Salaried"],
    about: "Digital Finance Advisors is India's first fully-digital financial advisory firm, leveraging technology to make professional financial planning accessible and affordable for millennials and Gen Z professionals.",
    services: ["Goal-based Financial Planning", "SIP Strategy Design", "Digital Assets Consulting", "Micro-investing Guidance"],
    successStories: [
      "Helped over 5,000 first-time investors start their investment journey",
      "Created an award-winning financial literacy podcast with 2M+ downloads"
    ],
    testimonials: [
      {
        text: "Arjun's app-based advisory makes investing feel approachable. The quarterly video reviews help me stay on track without feeling overwhelmed.",
        author: "Tanya Sharma",
        designation: "Marketing Professional"
      }
    ],
    socialMedia: [
      { type: "instagram", url: "https://instagram.com/digitalfinance" },
      { type: "twitter", url: "https://twitter.com/digifinance" },
      { type: "website", url: "https://digitalfinanceadvisors.in" }
    ],
    contactDetails: {
      email: "arjun@digitalfinanceadvisors.in",
      website: "https://digitalfinanceadvisors.in",
      calendlyLink: "https://calendly.com/arjunkapoor"
    },
    sebiRegistrationNumber: "INH000006789",
    verifiedBySpring: true
  }
];

export const specializations: Specialization[] = [
  "Retirement Planning", 
  "Tax Planning", 
  "NRI Services", 
  "Estate Planning",
  "Mutual Funds", 
  "Insurance", 
  "Stock Investments", 
  "Financial Planning",
  "Wealth Management", 
  "Debt Management"
];

export const audienceTypes: AudienceType[] = [
  "Salaried", 
  "Business Owners", 
  "Retired", 
  "HNI", 
  "NRIs", 
  "Young Professionals"
];

export const locations: Location[] = [
  "Mumbai", 
  "Delhi", 
  "Bengaluru", 
  "Hyderabad", 
  "Chennai", 
  "Pune", 
  "Kolkata", 
  "Remote/Virtual"
];
