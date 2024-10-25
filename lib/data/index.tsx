import { Code, Database, Globe, Server } from "lucide-react";

const tools = [
  {
    name: "React Js Library",
    icon: <Code size={16} className="text-blue-400" />,
    url: "https://react.dev/",
  },
  {
    name: "Javascript language",
    icon: <Server size={16} className="text-green-400" />,
    url: "https://react.dev/",
  },
  {
    name: "Typescript Language",
    icon: <Database size={16} className="text-green-600" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Next.js Framework",
    icon: <Globe size={16} className="text-white" />,
    url: "https://nextjs.org/",
  },
];

const certificates = [
  {
    name: "Web Development Bootcamp",
    url: "https://example.com/cert1",
  },
  {
    name: "Web Development Bootcamp",
    url: "https://example.com/cert2",
  },
  {
    name: "Advanced React Course",
    url: "https://example.com/cert2",
  },
  {
    name: "Advanced React Course",
    url: "https://example.com/cert2",
  },
];

const projects = [
  {
    title: "Next Auth Exapmle",
    sourceCode: "https://github.com/username/project1",
    demo: "https://project1-demo.com",
  },
  {
    title: "Next Auth Exapmle",
    sourceCode: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
  },
  {
    title: "Next Auth Exapmle",
    sourceCode: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
  },
  {
    title: "Next Auth Exapmle",
    sourceCode: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
  },
];

export { projects, certificates, tools };
