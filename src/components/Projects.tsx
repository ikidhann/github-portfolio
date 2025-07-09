import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Gethome",
    description:
      "A cross-platform mobile application built with Flutter that enables users to buy and rent properties, apply for mortgages, and manage their properties through an integrated and user-friendly application.",
    tech: "Flutter",
    link: "https://play.google.com/store/apps/details?id=id.gethome.myhome&hl=id",
  },
  {
    title: "Rilex",
    description:
      "A mobile application built with Flutter for reserving villas and tent sites, featuring real-time availability, secure booking, and intuitive navigation for seamless outdoor accommodation planning.",
    tech: "Flutter",
    link: "https://play.google.com/store/apps/details?id=id.rilex.rilex_mobile&hl=id",
  },
  {
    title: "HealthyEats",
    description:
      "A mobile application that analyzes food images to detect nutritional content and estimate calorie values.",
    tech: "Kotlin",
    link: "https://github.com/Healthy-Eats",
  },
  {
    title: "ANPR App",
    description:
      "An Automatic Number Plate Recognition (ANPR) mobile application that detects vehicle license plates, extracts plate numbers, and retrieves vehicle data based on the recognized information.",
    tech: "Kotlin",
    link: "https://github.com/ikidhann/anpr-android-app",
  },
];

const techColors = {
  React: "bg-blue-500",
  Flutter: "bg-blue-400",
  "React Native": "bg-green-500",
  "Vue.js": "bg-purple-500",
  Kotlin: "bg-orange-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
