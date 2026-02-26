import { LucideIcon } from 'lucide-react';

export interface LoanOption {
  title: string;
  description: string;
  iconName: string; 
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  title: string;
  secondaryTitle?: string;
  nmls: string;
  companyNmls?: string;
  licenses: string;
  company?: string;
  address?: string;
  directPhone?: string;
  corporatePhone?: string;
  image?: string;
  rating?: number;
  ratingCount?: number;
  slug?: string;
  slugAliases?: string[];
  phone?: string;
  email?: string;
  applyUrl?: string;
  applyLabel?: string;
  social?: string;
  bio?: string;
  seoDescription?: string;
}
