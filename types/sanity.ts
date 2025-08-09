// Types for Sanity schemas

export interface About {
  _id: string;
  title: string;
  content: any[];
  image?: {
    asset: { url: string }
  };
}

export interface Admissions {
  _id: string;
  title: string;
  requirements: any[];
  process: any[];
  contact: string;
}

export interface Faculty {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo?: {
    asset: { url: string }
  };
  email?: string;
  phone?: string;
}

export interface Gallery {
  _id: string;
  title: string;
  images: { asset: { url: string } }[];
}

export interface News {
  _id: string;
  title: string;
  date: string;
  content: any[];
  image?: {
    asset: { url: string }
  };
}

export interface Partner {
  _id: string;
  name: string;
  logo?: {
    asset: { url: string }
  };
  website?: string;
}

export interface Program {
  _id: string;
  id: string;
  name: string;
  title: string;
  subtitle: string;
  duration: string;
  intake: string;
  nextIntake: string;
  description: string;
  highlights: string[];
  image?: {
    asset: { url: string }
  };
  color?: string;
}

export interface Success {
  _id: string;
  name: string;
  program: string;
  quote: string;
  fullStoryLink?: string;
  image?: {
    asset: { url: string }
  };
}

export interface Hero {
  _id: string;
  headline: string;
  subheadline: string;
  backgroundImage?: {
    asset: { url: string }
  };
  ctaText?: string;
  ctaLink?: string;
}

export interface SiteSettings {
  _id: string;
  siteTitle: string;
  navbarLinks: { label: string; href: string }[];
  footerText: string;
  footerLinks: { label: string; href: string }[];
}

export interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}
