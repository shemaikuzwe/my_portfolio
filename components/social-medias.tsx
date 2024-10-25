import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
export default function SocialMedias() {
  return (
    <div className="flex justify-center space-x-6 relative z-10">
      <Link
        href="https://github.com"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <Github size={24} />
      </Link>
      <Link
        href="https://twitter.com"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <Twitter size={24} />
      </Link>
      <Link
        href="https://linkedin.com"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <Linkedin size={24} />
      </Link>
      <Link
        href="https://youtube.com"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <Youtube size={24} />
      </Link>
    </div>
  );
}
