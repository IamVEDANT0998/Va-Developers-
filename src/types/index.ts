export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: 'In Development' | 'Planned' | 'Alpha' | 'Beta' | 'Live';
  features: string[];
  detailedFeatures: ProductFeature[];
  technologies: string[];
  icon: string;
  previewType: 'creator' | 'editor';
  faq: { question: string; answer: string }[];
  targetAudience: string;
};

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
};

export type TechCategory = {
  category: string;
  description: string;
  items: {
    name: string;
    focus: string;
    level: string;
  }[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type PortfolioProject = {
  id: string;
  name: string;
  category: 'Apps' | 'AI' | 'Software' | 'Web';
  status: 'In Development' | 'Prototype' | 'Concept';
  shortDescription: string;
  technologies: string[];
  productId?: string;
  highlights: string[];
};

export type StudioUpdate = {
  id: string;
  date: string;
  title: string;
  category: string;
  summary: string;
  content: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
