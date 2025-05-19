import type { LucideIcon } from 'lucide-react';

export interface Education {
  degree: string;
  university: string;
  graduationYear: string;
}

export interface IntroductionData {
  fullName: string;
  role: string;
  education: Education;
  bio: string;
  profileImageUrl?: string; 
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon; // Icon for individual skill (optional)
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon; // Icon for the category itself
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuingOrganization: string;
  completionDate?: string; // Optional as per new request
  description?: string; // Added description field
  icon?: LucideIcon;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  dataAiHint?: string;
  githubLink?: string;
  liveDemoLink?: string;
}

export interface NavItem {
  href: string;
  label: string;
}
