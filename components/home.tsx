import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { projects, tools } from "@/lib/data";
import SocialMedias from "./social-medias";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-black text-white relative">
      <div
        className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-0"
        style={{
          transition: "background-position 0.3s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full min-h-screen flex flex-col items-center justify-center p-5 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Image
                src="https://github.com/shemaikuzwe.png"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-2xl"
              />
              <h1 className="text-3xl font-bold mb-4 tracking-tight text-gray-100">
               Ikuzwe Shema Elie
              </h1>
              <p className="text-xl text-gray-300 font-medium mb-2">
                Full Stack Developer With Typescript,Go,Python.
              </p>
              <p className="text-lg text-gray-400 italic">
                I live in Kigali, Rwanda
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-20 px-5 max-w-6xl mx-auto space-y-10"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-900/50 border-gray-800 backdrop-blur text-gray-100"
              >
                <div className="h-48 w-full bg-black/40 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <span className="text-gray-600 text-4xl font-bold">
                    Project
                  </span>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-100">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700"
                    >
                      Personal
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Link
                    target="_blank"
                    href={project.demo}
                    className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors text-gray-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Link>
                  <Link
                    target="_blank"
                    href={project.sourceCode}
                    className="inline-flex items-center text-sm font-medium hover:text-blue-400 transition-colors text-gray-300"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* My Stacks Section */}
        <section
          id="my-stacks"
          className="w-full py-20 px-5 max-w-4xl mx-auto bg-gray-900/30 rounded-3xl my-10 border border-gray-800"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-100">
            My Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-colors group"
              >
                <Link
                  target="_blank"
                  href={tool.url}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="font-medium text-sm text-center text-gray-300">
                    {tool.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-20 px-5 text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-100">Contact Me</h2>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-sm">
            <SocialMedias />
          </div>
        </section>
      </div>
    </div>
  );
}
