import {
  GoIcon,
  NestJS,
  NextJsIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/components/icons";
import { Experience } from "../types";
const tools = [
  {
    name: "Typescript",
    icon: <TypeScriptIcon size={20} />,
    url: "https://www.typescriptlang.org/",
    score: 90,
  },
  {
    name: "Python",
    icon: <PythonIcon size={20} />,
    url: "https://www.python.org/",
    score: 85,
  },
  {
    name: "Go",
    icon: <GoIcon size={26} />,
    url: "https://go.dev/",
    score: 80,
  },
  {
    name: "Next Js Framework",
    icon: <NextJsIcon size={26} />,
    url: "https://nextjs.org/",
    score: 95,
  },
  {
    name: "React Js Library",
    icon: <ReactIcon className="animate-spin" />,
    url: "https://react.dev/",
    score: 95,
  },
  {
    name: "Nest js Framework",
    icon: <NestJS size={26} />,
    url: "https://nestjs.com/",
    score: 90,
  },
  {
    name: "Prisma  ORM",
    icon: <PrismaIcon size={27} />,
    url: "https://www.prisma.io/",
    score: 95,
  },
];

const projects = [
  {
    title: "LMS",
    demo: "https://lms.rw",
    description: "Loan Management System",
  },
  {
    title: "Milo Chat",
    description: "AI Chat Application for accessing all models",
    demo: "https://mini-chat1.vercel.app",
    image:"/images/milochat.png",
    personal: true,
  },
  {
    title: "Ecommerce Application",
    sourceCode: "https://github.com/shemaikuzwe/Ecommerce",
    demo: "https://urban-deals-shop.vercel.app/",
    personal: true,
    image: "/images/ecommerce.png",
  },
  {
    title: "Planify",
    description: "An application for planning and organizing tasks",
    demo: "https://planify2.vercel.app/",
    personal: true,
    image: "/images/planify.png",
  },
];
const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Scripty Labs",
    location: "Kigali,Rwanda",
    period: "2025 - Present",
    highlights: [
      "Implemented core business logic to support key product features and operations",
      "Learned and applied server management practices to ensure reliable application performance",
      "Implemented new features and improved existing ones to enhance user experience",
    ],
  },
];
export { projects, tools, experiences };
