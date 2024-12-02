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
    url: "https://nextjs.org/",
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
    url: "https://www.freecodecamp.org/certification/ikuzweshemaelie/back-end-development-and-apis",
  },

  {
    name: "Javascript And  Algorithms",
    url: "https://www.freecodecamp.org/certification/ikuzweshemaelie/javascript-algorithms-and-data-structures-v8",
  },{
    name:"Typescript",
    url:"https://res.cloudinary.com/total-typescript/image/upload/v1733172700/certificate/9a987e1a-4e58-4d50-9554-72f47ab14367/solving-typescript-errors.png"
  },
  {
    name: "Forentend Development",
    url: "https://www.freecodecamp.org/certification/ikuzweshemaelie/front-end-development-libraries",
  },
  {
    name: "Web Design",
    url: "https://www.freecodecamp.org/certification/ikuzweshemaelie/responsive-web-design",
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
