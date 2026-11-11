export type ProjectStatus = "active" | "in-progress" | "experimental" | "archived";

export type ProjectCategory =
  | "Backend Engineering"
  | "Full Stack"
  | "Developer Tools"
  | "Experiments";

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface ProjectCaseStudy {
  problem: string;
  goals: string[];
  architecture: string;
  technicalDecisions: string[];
  challenges: string[];
  results: string;
  limitations: string;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  featured: boolean;
  year: string;
  accent: string;
  links: ProjectLinks;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceRole {
  id: string;
  company: string;
  position: string;
  location: string;
  employmentType: string;
  start: string;
  end: string;
  summary: string;
  responsibilities: string[];
  contributions: string[];
  technologies: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  status: "published";
  sections: ArticleSection[];
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
}
