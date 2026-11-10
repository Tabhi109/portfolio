import type { SocialLink } from "@/types";

export const SITE = {
  name: "Abhinav Tripathi",
  role: "Software Engineer",
  location: "India",
  domain: "abhinavtrip3.space",
  tagline:
    "An unfinished collection of things I've built, things I've learned, and things I'm curious about.",
  intro:
    "I'm Abhinav, a software engineer who enjoys building systems, exploring complex problems, and turning ideas into working products.",
  email: "hello@abhinavtrip3.space", // placeholder — replace with real email
  resumePath: "/resume.pdf", // placeholder file until real resume is added
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/", // placeholder
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/", // placeholder
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@abhinavtrip3.space", // placeholder
  },
  {
    label: "Resume",
    href: "/resume.pdf", // placeholder
  },
];

export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/engineering", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
