import type { ExperienceRole } from "@/types";

export const EXPERIENCE: ExperienceRole[] = [
  {
    id: "opus",
    company: "Opus Capital Market & Consultant",
    position: "Software Engineer",
    location: "Remote",
    employmentType: "Full-time · Remote",
    start: "Apr 2025",
    end: "Present",
    summary:
      "Software engineering across financial systems — QC Audit, securitization workflows, orchestration services, and multi-tenant finance management platforms.",
    responsibilities: [
      "Backend architecture and API development for financial software",
      "Workflow orchestration across audit and securitization processes",
      "Multi-tenant finance management system work",
      "Performance optimization on backend services",
      "Coordinating development across related workstreams",
    ],
    contributions: [
      "Owned backend work across QC Audit and securitization-related systems",
      "Helped shape workflow orchestration for multi-step financial processes",
      "Contributed to multi-tenant platform design and service boundaries",
    ],
    technologies: [
      "Backend architecture",
      "API development",
      "Workflow orchestration",
      "Multi-tenant systems",
    ],
  },
  {
    id: "suggaa-backend",
    company: "Suggaa",
    position: "Node.js Backend Developer",
    location: "On-site",
    employmentType: "Full-time · Startup",
    start: "Jul 2024",
    end: "Mar 2025",
    summary:
      "Transitioned from internship into a Node.js backend role, owning service work inside a startup engineering team.",
    responsibilities: [
      "Backend development with Node.js",
      "Building and maintaining APIs and service logic",
      "Collaborating on-site with product and engineering",
      "Supporting production systems as features shipped",
    ],
    contributions: [
      "Grew from intern contributions into independent backend ownership",
      "Delivered Node.js service work in a fast-moving startup environment",
    ],
    technologies: ["Node.js", "JavaScript", "Backend APIs"],
  },
  {
    id: "suggaa-intern",
    company: "Suggaa",
    position: "Software Engineering Intern",
    location: "On-site",
    employmentType: "Internship · Startup",
    start: "May 2023",
    end: "Jul 2024",
    summary:
      "Started as an intern and built foundational engineering experience on-site before moving into a backend developer role.",
    responsibilities: [
      "Supported engineering work across the product codebase",
      "Learned production backend patterns in a startup setting",
      "Collaborated closely with the on-site engineering team",
    ],
    contributions: [
      "Built the foundation for the later transition into a Node.js backend role",
      "Developed practical experience shipping inside a real product team",
    ],
    technologies: ["JavaScript", "Backend fundamentals"],
  },
];
