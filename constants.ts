import { Home, Percent, Shield, DollarSign, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Feature, LoanOption, NavItem, Testimonial, TeamMember } from './types';
import alisonHeadshot from '@/assets/team/alison.png';
import bryanHeadshot from '@/assets/team/bryan-profile.png';
import ericHeadshot from '@/assets/team/eric-profile.png';
import hugoHeadshot from '@/assets/team/hugo.png';
import jesusHeadshot from '@/assets/team/jesus-profile.png';
import katherineHeadshot from '@/assets/team/katherine-profile.png';
import raleighHeadshot from '@/assets/team/raleigh-hs.png';
import scottHeadshot from '@/assets/team/scott-profile.png';
import barbaraHeadshot from '@/assets/team/barbara-jordan.png';
import ashleyHeadshot from '@/assets/team/ashley-rogers.png';
import vivianHeadshot from '@/assets/team/vivian-delgado.png';
import placeholderHeadshot from '@/assets/team/placeholder-silhouette.svg';

export const COMPANY_INFO = {
  name: "Vivian Delgado Mortgage",
  poweredBy: "Loan Factory",
  leader: "Vivian Delgado",
  legalName: "Vivian Hael Delgado",
  role: "Mortgage Loan Officer, The Legends Mortgage Team",
  nmls: "1910685",
  companyNmls: "320841",
  directPhone: "(754) 314-7290",
  mobilePhone: "(754) 314-7290",
  corporatePhone: "(407) 500-6000",
  phone: "(754) 314-7290",
  location: "Florida",
  address: "301 North Fern Creek Avenue, D, Orlando, FL 32803",
  email: "delgado@loanfactory.com",
  teamEmail: "legendsteam@loanfactory.com",
  profileImage: vivianHeadshot,
  tagline: "Built on Trust . Backed by Results",
  slogan: "Efficient, knowledgeable, honest, and passionate service."
};

export const SITE_LINKS = {
  personalSiteUrl: 'https://www.linkedin.com/in/vivian-delgado-609424241',
  teamSiteUrl: 'https://www.legendsmortgage.team',
  applyNowUrl: 'https://www.loanfactory.com/viviandelgado',
  creditRequestUrl: 'https://credit.advcredit.com/smartpay/SmartPay.aspx?uid=e0fd086f-3a20-4bf7-8230-e818d824f094'
};

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/17543147290',
  instagram: 'https://www.instagram.com/listwme/',
  facebookPersonal: 'https://www.facebook.com/profile.php?id=61586738292999',
  facebookBusiness: 'https://www.facebook.com/profile.php?id=61586738292999',
  linkedIn: 'https://www.linkedin.com/in/vivian-delgado-609424241',
  tiktok: 'https://www.tiktok.com/@viviandelgado85',
  googleBusinessProfile: 'https://share.google/kWitfpLHCemZv669m'
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Loan Options", href: "/loan-options" },
  { label: "Property Search", href: "/property-search" },
  { label: "Open Houses", href: "/open-houses" },
  { label: "Home Value", href: "/home-value" },
  { label: "Market Report", href: "/market-report" },
  { label: "Calculator", href: "/calculator" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Apply", href: "/apply" },
];

export const LOAN_OPTIONS: LoanOption[] = [
  {
    title: "Conventional Loans",
    description: "A classic loan for strong credit and steady income.",
    iconName: "Home"
  },
  {
    title: "FHA Loans",
    description: "A flexible option with lower down payments.",
    iconName: "Shield"
  },
  {
    title: "VA Loans",
    description: "A zero down option for eligible service members.",
    iconName: "Award"
  },
  {
    title: "Jumbo Loans",
    description: "A higher limit loan for premium homes.",
    iconName: "DollarSign"
  },
  {
    title: "Non-QM Loans",
    description: "Flexible underwriting for unique income scenarios.",
    iconName: "Users"
  },
  {
    title: "DSCR Loans",
    description: "Investor loans based on property cash flow.",
    iconName: "TrendingUp"
  },
  {
    title: "Reverse Mortgages",
    description: "Home equity solutions for qualified senior homeowners.",
    iconName: "CheckCircle"
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Efficient process",
    description: "Fast pre-approval support and proactive communication through each milestone.",
    icon: Users
  },
  {
    title: "Knowledgeable guidance",
    description: "Program fit and financing strategy explained clearly for your exact scenario.",
    icon: Percent
  },
  {
    title: "Honest recommendations",
    description: "Straight answers with realistic expectations from intake to closing.",
    icon: Award
  },
  {
    title: "Passionate service",
    description: "Dedicated support for first-time buyers, military families, responders, and foreign nationals.",
    icon: CheckCircle
  },
  {
    title: "Programs that fit",
    description: "FHA, VA, Conventional, Jumbo, Non-QM, DSCR, and Reverse options.",
    icon: TrendingUp
  },
  {
    title: "Clear communication",
    description: "Quick answers by phone or text so you always know the next step.",
    icon: CheckCircle
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "First-Time Homebuyer",
    content: "They guided me step by step and earned my trust.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Refinance Client",
    content: "Fast closing and clear updates the whole time.",
    rating: 5
  },
  {
    id: 3,
    name: "David & Elena Rodriguez",
    role: "VA Loan Client",
    content: "They know VA loans and kept everything simple.",
    rating: 5
  }
];

export const TEAM_HEADSHOT_PLACEHOLDER = placeholderHeadshot;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Vivian Delgado",
    title: "Mortgage Loan Officer",
    nmls: "1910685",
    companyNmls: "320841",
    licenses: "Florida",
    company: "Loan Factory",
    address: "301 North Fern Creek Avenue, D, Orlando, FL 32803",
    directPhone: "(754) 314-7290",
    corporatePhone: "(407) 500-6000",
    image: COMPANY_INFO.profileImage,
    slug: "vivian-delgado",
    phone: "(754) 314-7290",
    email: "delgado@loanfactory.com",
    applyUrl: "https://www.loanfactory.com/viviandelgado",
    applyLabel: "loanfactory.com/viviandelgado",
    social: "Instagram, Facebook, LinkedIn, TikTok",
    bio:
      "Vivian Delgado is a seasoned Mortgage Loan Officer with over 10 years of experience serving homeowners. She has helped dozens of families secure the right loan and confidently navigate every step of the home buying process as a trusted Real Estate Advisor. With in depth knowledge of a wide range of loan products, Vivian tailors solutions to fit each client's unique needs. She is proudly bilingual and fluent in Spanish."
  },
  {
    name: "Hugo Calvillo",
    title: "Loan Officer",
    nmls: "1808485",
    licenses: "Florida",
    image: hugoHeadshot,
    slug: "hugo-calvillo",
    phone: "(407) 729-3006",
    email: "hugo.calvillo@loanfactory.com",
    applyUrl: "https://houseloans.us",
    applyLabel: "houseloans.us",
    social: "LinkedIn, Instagram",
    bio:
      "I serve Florida with clear guidance and a steady process. I bring experience in real estate investment, bilingual service, and creative loan solutions like fix and flip, bridge, and construction financing."
  },
  {
    name: "Alison McLeod",
    title: "Loan Officer",
    nmls: "2680230",
    licenses: "CA, NV, TX, UT",
    image: alisonHeadshot,
    slug: "alison-mcleod",
    phone: "(702) 608-0633",
    email: "alison.mcleod@loanfactory.com",
    applyUrl: "https://loanfactory.com/alisonmcleod",
    applyLabel: "loanfactory.com/alisonmcleod",
    bio:
      "I make the mortgage process simple and clear. I work across four states and explain options in plain language, then manage the details to keep the experience smooth."
  },
  {
    name: "Katherine Bernal",
    title: "Loan Officer",
    nmls: "2696379",
    licenses: "Florida",
    image: katherineHeadshot,
    slug: "katherine-bernal",
    phone: "(786) 853-0961",
    email: "katherine.bernal@loanfactory.com",
    applyUrl: "https://loanfactory.com/katherinebernal",
    applyLabel: "loanfactory.com/katherinebernal",
    bio:
      "I simplify the mortgage process from the first question to closing. You get clear communication, realistic expectations, and a smooth path forward."
  },
  {
    name: "Eric Jason Ritchie",
    title: "Loan Officer",
    nmls: "2702310",
    licenses: "FL, WI",
    image: ericHeadshot,
    slug: "eric-jason-ritchie",
    phone: "(920) 960-2169",
    email: "eric.ritchie@loanfactory.com",
    applyUrl: "https://loanfactory.com/ericritchie",
    applyLabel: "loanfactory.com/ericritchie",
    bio:
      "I guide buyers through VA, FHA, USDA, conventional, jumbo, and first time programs. I handle the coordination so you get fast communication and a clean path to approval."
  },
  {
    name: "Jesus Urquiza",
    title: "Loan Officer",
    nmls: "2717748",
    licenses: "Florida",
    image: jesusHeadshot,
    slug: "jesus-urquiza",
    phone: "(786) 665-6509",
    email: "jesus.urquiza@loanfactory.com",
    applyUrl: "https://loanfactory.com/jesusurquiza",
    applyLabel: "loanfactory.com/jesusurquiza",
    bio:
      "I simplify the loan process with clear explanations and steady updates. From preapproval to closing, I keep your goals front and center."
  },
  {
    name: "Scott Mason",
    title: "Loan Officer",
    nmls: "2576892",
    licenses: "Florida",
    rating: 5,
    ratingCount: 3,
    image: scottHeadshot,
    slug: "scott-mason",
    phone: "(407) 773-4007",
    email: "scott.mason@loanfactory.com",
    applyUrl: "https://loanfactory.com/scottmason",
    applyLabel: "loanfactory.com/scottmason",
    bio:
      "I handle the heavy lifting behind the scenes and keep your loan moving. I work across FHA, VA, USDA, conventional, and non QM options with clear guidance."
  },
  {
    name: "Bryan Payne",
    title: "Loan Officer",
    nmls: "2360741",
    licenses: "CA, GA, LA, VA",
    image: bryanHeadshot,
    slug: "bryan-payne",
    phone: "(470) 426-3475",
    email: "bryan.payne@loanfactory.com",
    applyUrl: "https://loanfactory.com/bryanpayne",
    applyLabel: "loanfactory.com/bryanpayne",
    bio:
      "After 20 years in the U.S. Navy, I bring discipline and precision to lending. I manage the process efficiently and keep you informed from start to finish."
  },
  {
    name: "Raleigh Morrison",
    title: "Loan Officer",
    nmls: "2511940",
    companyNmls: "320841",
    licenses: "CO",
    rating: 5,
    ratingCount: 19,
    image: raleighHeadshot,
    slug: "raleigh-hs",
    slugAliases: ["raleigh-morrison"],
    phone: "(941) 769-1362",
    directPhone: "(941) 769-1362",
    corporatePhone: "(660) 333-3333",
    address: "2195 Tully Road, San Jose, CA 95122",
    applyUrl: "https://www.loanfactory.com/raleighmorrison",
    applyLabel: "loanfactory.com/raleighmorrison",
    bio:
      "I focus on clear communication and steady progress. You get direct answers and a structured plan to close."
  },
  {
    name: "Barbara Jordan",
    title: "Loan Officer",
    nmls: "2475165",
    companyNmls: "320841",
    licenses: "GA, IL, IN, KY, MO",
    image: barbaraHeadshot,
    slug: "barbara-jordan",
    phone: "(815) 355-1573",
    directPhone: "(815) 355-1573",
    corporatePhone: "(660) 333-3333",
    address: "2195 Tully Road, San Jose, CA 95122",
    applyUrl: "https://www.loanfactory.com/barbarajordan",
    applyLabel: "loanfactory.com/barbarajordan",
    bio:
      "I am Barbara Jordan, a Loan Officer with Loan Factory. My focus is straightforward guidance, clear communication, and a mortgage process you can follow with confidence. I serve clients with home financing and refinancing support across GA, IL, IN, KY, and MO, and I stay hands on from preapproval through closing so each step is organized and clear."
  },
  {
    name: "Ashley Rogers",
    title: "Operations Manager and Lead Processor",
    secondaryTitle: "Loan Processor (TPP)",
    nmls: "1938675",
    companyNmls: "1938675",
    licenses: "Florida",
    company: "First Coast Processing, LLC",
    image: ashleyHeadshot,
    slug: "ashley-rogers",
    phone: "(904) 535-1902",
    directPhone: "(904) 535-1902",
    email: "Ashley.a.rogers.mtgprocessor@gmail.com",
    address: "43397 Ratliff Rd, Callahan, FL 32011",
    bio:
      "I lead processing operations with a focus on structure, communication, and execution. My role is to keep files organized, timelines clear, and every milestone moving from start to close. I work closely with borrowers, agents, and lending partners to resolve issues early, prevent delays, and deliver a smoother mortgage experience.",
    seoDescription:
      "Connect with Ashley Rogers, Operations Manager and Lead Processor at Legends Mortgage Team, supporting a smooth mortgage experience from start to close."
  }
];
