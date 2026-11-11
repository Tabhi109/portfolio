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
  /** Leave empty until a real address is confirmed — never invent one. */
  email: "",
  /** Point to /resume.pdf once the file exists in /public. */
  resumePath: "",
  githubUrl: "https://github.com/Tabhi109",
  linkedinUrl: "",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: SITE.githubUrl,
    external: true,
  },
  ...(SITE.linkedinUrl
    ? [
        {
          label: "LinkedIn",
          href: SITE.linkedinUrl,
          external: true,
        } satisfies SocialLink,
      ]
    : []),
  ...(SITE.email
    ? [
        {
          label: "Email",
          href: `mailto:${SITE.email}`,
        } satisfies SocialLink,
      ]
    : []),
  ...(SITE.resumePath
    ? [
        {
          label: "Resume",
          href: SITE.resumePath,
        } satisfies SocialLink,
      ]
    : []),
];

export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/engineering", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
