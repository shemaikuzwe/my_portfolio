import { Github, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import Link from "next/link";
export default function SocialMedias() {
  return (
    <div className="flex justify-center space-x-6 relative z-10">
      <div className="flex items-center gap-2 text-gray-400 ">
        <Github size={28} className="text-pretty" />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ikuzweshema"
          className="hover:text-gray-200 text-sm hover:underline   transition-colors duration-300"
        >
          Github
        </Link>
      </div>
      <div className="flex items-center gap-2 text-gray-400 ">
        <Twitter size={28} />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/home"
          className="hover:text-gray-200 text-sm hover:underline  transition-colors duration-300"
        >
          Twitter
        </Link>
      </div>
      <div className="flex items-center gap-2 text-gray-400 ">
        <Linkedin size={28} />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/el1sa/"
          className="hover:text-gray-200 text-sm hover:underline  transition-colors duration-300"
        >
          LinkedIn
        </Link>
      </div>

      <div className="flex items-center gap-2 text-gray-400 ">
        <Phone size={28} />
        <Link
          href="tel:+254791741371"
          className="hover:text-gray-200 text-sm hover:underline  transition-colors duration-300"
        >
          0791741371
        </Link>
      </div>
      <div className="flex items-center gap-2 text-gray-400 ">
        <Mail size={28} />
        <Link
          target="blank"
          rel="noopener noreferrer"
          href="mailto:elysseshema@gmail.com"
          className="hover:text-gray-200 hover:underline text-sm transition-colors duration-300"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
