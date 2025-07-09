"use client";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}
          Mobile developer with over 2 years of experience in developing and
          deploying mobile app using Kotlin and Flutter. Proficient in all
          stages of the SDLC, applying SOLID principles for maintainable and
          scalable applications. Skilled in developing intuitive and
          user-friendly interfaces, optimizing app performance, and integrating
          backend services like REST APIs and Firebase.
        </p>
      </CardContent>
    </Card>
  );
};
