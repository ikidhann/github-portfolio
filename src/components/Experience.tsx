import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Mobile Developer",
    company: "Propertree Group",
    logo: "/propertree.jpeg",
    duration: "2024 - Present",
    description:
      "Developed user-friendly cross-platform applications with Flutter. Collaborated with designers and backend engineers to deliver seamless mobile experiences. Optimized app performance and ensured code quality through rigorous testing and code reviews.",
    link: "https://propertree.co.id/",
    images: [],
  },
  {
    role: "Mobile Developer & AI Intern",
    company: "Prasimax",
    logo: "/prasimax.jpg",
    duration: "Aug 2023 - Jun 2024",
    description:
      "Developed a mobile application with Kotlin that implements an Automatic Number Plate Recognition (ANPR) system using YOLOv8 model and ML Kit Text Recognition v2. The app detects vehicle license plates, extracts plate numbers, and retrieves vehicle data based on the recognized information.",
    link: "",
    images: [],
  },
  {
    role: "Mobile Development Cohort",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    logo: "/bangkit.jpg",
    duration: "Feb 2023 - Jul 2023",
    description:
      "Led a team of 2 mobile development cohorts, 2 machine learning cohorts, and 2 cloud computing cohorts to develop a capstone project and was able to graduate in the Bangkit program. Completed all the courses/activities during the Bangkit program and successfully graduated with Full Graduate status.",
    link: "",
    images: [],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Work Experience
      </h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
