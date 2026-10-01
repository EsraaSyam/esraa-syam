import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  LayoutGrid,
  Server,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import {
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiSpringboot,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export type ProjectCategory = "Backend" | "Full Stack" | "Personal";
export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
  href: string;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/EsraaSyam", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/esraasyam", icon: FaLinkedin },
  { label: "Email", href: "mailto:esraasyam15@gmail.com", icon: FaMessage },
];

export const projects: Project[] = [
  {
    title: "Moodify",
    description:
      "A personal space to understand moods, habits, and everyday patterns.",
    tags: ["NestJS", "PostgreSQL", "Docker"],
    category: "Personal",
    image: "/images/moodify.svg",
    href: "https://github.com/EsraaSyam/Moodify",
  },
  {
    title: "HealthCare+",
    description:
      "An integrated healthcare platform that centralizes health records, vaccinations, and genetic information while supporting physicians with AI-powered diagnostic assistance.",
    tags: ["Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image: "/images/healthcare.svg",
    href: "https://github.com/Kid-care/Restful-api",
  },
  {
    title: "OpenLearn",
    description:
       "An online learning platform inspired by Coursera, offering interactive courses and seamless user experience.",
    tags: ["NestJS", "PostgreSQL", "TypeORM"],
    category: "Full Stack",
    image: "/images/openlearn.svg",
    href: "https://github.com/EsraaSyam/OpenLearni",
  },
  {
    title: "ATHR Shares",
    description:
      "Platform for real estate investment and property purchasing with secure transactions and flexible payment plans.",
    tags: ["NestJS", "PostgreSQL", "TypeORM"],
    category: "Full Stack",
    image: "/images/athr-shares.svg",
    href: "https://github.com/EsraaSyam/ATHR-Shares",
  }
  
];

export type SkillItem = {
  label: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
};
export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: Server,
    items: [
      { label: "Java", icon: FaJava },
      { label: "Spring Boot", icon: SiSpringboot },
      { label: "NestJS", icon: SiNestjs },
      { label: "Node.js", icon: FaNodeJs },
      { label: "Express", icon: SiExpress },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MongoDB", icon: SiMongodb },
      { label: "MySQL", icon: Database },
      { label: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    items: [
      { label: "Docker", icon: FaDocker },
      { label: "Git", icon: GitBranch },
      { label: "GitHub", icon: FaGithub },
      { label: "Linux", icon: FaLinux },
      { label: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "Other",
    icon: Wrench,
    items: [
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: FaJs },
      { label: "HTML", icon: FaHtml5 },
      { label: "CSS", icon: Braces },
      { label: "Postman", icon: Code2 },
    ],
  },
];

export const experience = [
  {
    company: "Rowad Modern Engineering",
    role: "Document Controller",
    period: "Apr 2026 – Present",
    bullets: [
      "Quality Department",
      "Working on project documentation and verification",
      "12-hour days, 6 days/week",
    ],
  },
  {
    company: "ATHR Software",
    role: "Software Engineer Intern",
    period: "Dec 2024 – Feb 2025",
    bullets: [
      "Backend development with NestJS + TypeScript",
      "30+ endpoints, ERD with approximately 16 tables",
      "PostgreSQL, TypeORM, Flutter integration",
    ],
  },
];

export const achievements = [
  {
    title: "ECPC Finalist",
    detail: "5th at university / Day 6 / 6 problems",
    icon: Trophy,
  },
  { title: "ECPCQ", detail: "9th place", icon: Sparkles },
  { title: "Missed ACPC", detail: "By 1 problem", icon: LayoutGrid },
];

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Suez Canal University (Ismailia)",
  year: "2024",
  result: "GPA 3.20 · Very Good with Honor",
};
