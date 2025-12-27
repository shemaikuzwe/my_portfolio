import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { Experience } from "@/lib/types";

export function ExperienceCard({
  role,
  company,
  period,
  location,
  highlights,
}: Experience) {
  return (
    <Card className="bg-transparent border-none ">
      <CardHeader className="p-0 gap-1 flex justify-start items-start">
        <CardTitle className="text-xl font-semibold  text-white tracking-tight">
          {role} at {company}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm font-medium">
          {period} | {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 mt-6">
        <ul className="space-y-3">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"
                aria-hidden="true"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
