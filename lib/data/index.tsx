import {
  NextJsIcon,
  PrismaIcon,
  ReactIcon,
  TypeScriptIcon,
} from "@/components/icons";
const tools = [
  {
    name: "Next Js Framework",
    icon: <NextJsIcon size={26} />,
    url: "https://www.python.org",
  },
  {
    name: "React Js Library",
    icon: <ReactIcon className="animate-spin" />,
    url: "https://react.dev/",
  },
  {
    name: "Prisma  ORM",
    icon: <PrismaIcon size={27} />,
    url: "https://www.prisma.io/",
  },

  {
    name: "Typescript Language",
    icon: <TypeScriptIcon size={20} />,
    url: "https://www.typescriptlang.org/",
  },
];

const certificates = [
  {
    name: "Backend Development",
    url: "https://www.freecodecamp.org/certification/_elisa_/back-end-development-and-apis",
  },

  {
    name: "Javascript Algorithms",
    url: "https://www.freecodecamp.org/certification/_elisa_/javascript-algorithms-and-data-structures-v8",
  },
  {
    name: "Forentend Development",
    url: "https://example.com/cert2",
  },
  {
    name: "Typescript Language",
    url: "https://res.cloudinary.com/total-typescript/image/upload/v1732639169/certificate/d8d7574b-c2aa-4193-a06a-eb4366eb37f6/beginners-typescript.png",
  },
];

const projects = [
  {
    title: "Ecommerce Application",
    sourceCode: "https://github.com/shemaikuzwe/Ecommerce",
    demo: "https://urban-deals-shop.vercel.app/",
  },
  {
    title: "Code Copilot Chat bot",
    sourceCode: "https://github.com/Ikuzweshema/code_copilot",
    demo: "https://code-copilot.vercel.app/",
  },
  {
    title: "Authentication App",
    sourceCode: "https://github.com/Ikuzweshema/next-auth-example",
    demo: "https://nextauthappexample.vercel.app/",
  },
  {
    title: "Next Auth Exapmle",
    sourceCode: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
  },
];

export { projects, certificates, tools };
