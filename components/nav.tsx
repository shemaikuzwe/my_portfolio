"use client";

import { Home, Briefcase, Cpu, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const navItems = [
  { name: "Home", href: "#home", icon: <Home size={20} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
  { name: "Stack", href: "#my-stacks", icon: <Cpu size={20} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
];

export default function Nav() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "my-stacks", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActive(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {navItems.map((item) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  active === item.href
                    ? "bg-white/10 text-white scale-110"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{item.name}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </div>
  );
}
