import { experiences } from "@/lib/data";
import SocialMedias from "./social-medias";
import { ExperienceCard } from "./ui/experience";
export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 bg-gray-900/30 rounded-3xl border border-gray-800 p-5">
        <h2 className="text-2xl font-bold mb-8">About Me</h2>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-xs">
        <SocialMedias />
      </div>
    </div>
  );
}
