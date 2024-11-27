import { Github, Twitter, Linkedin, Phone, Mail } from "lucide-react";
import Link from "next/link";
export default function soSocialMedias() {
  return (
    <div className="flex justify-center space-x-6 relative z-10">
      <div className="flex items-center gap-2 text-gray-400 ">
        <Github size={28} className="text-pretty" />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shemaikuzwe"
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
          href="https://x.com/Shemaelie97"
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
          href="https://www.linkedin.com/in/ikuzwe-shema-elie-791b63304/"
          className="hover:text-gray-200 text-sm hover:underline  transition-colors duration-300"
        >
          LinkedIn
        </Link>
      </div>

      <div className="flex items-center gap-2 text-gray-400 ">
        <Phone size={28} />
        <Link
          href="tel:+250786229031"
          className="hover:text-gray-200 text-sm hover:underline  transition-colors duration-300"
        >
          0786229031
        </Link>
      </div>
      <div className="flex items-center gap-2 text-gray-400 ">
        <Mail size={28} />
        <Link
          target="blank"
          rel="noopener noreferrer"
          href="mailto:eshemaikuzwe@gmail.com"
          className="hover:text-gray-200 hover:underline text-sm transition-colors duration-300"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
