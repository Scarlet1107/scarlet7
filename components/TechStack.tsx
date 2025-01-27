import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "./motion/FadeIn";
import Image from "next/image";

interface TechStackList {
  name: string;
  icon: string;
  level: number;
}

const getLevelPercentage = (level: number) => {
  if (level > 70 && level <= 100) {
    return "Advanced";
  } else if (level > 40 && level <= 70) {
    return "Intermediate";
  } else if (level > 0 && level <= 40) {
    return "Beginner";
  } else {
    return 0;
  }
};

const TechStack = () => {
  const techStackList: TechStackList[] = [
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      level: 90,
    },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
      level: 95,
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      level: 80,
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      level: 85,
    },
    {
      name: "Tailwind CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      level: 80,
    },
    {
      name: "C",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      level: 60,
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      level: 60,
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      level: 75,
    },
    {
      name: "Supabase",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      level: 80,
    },
    {
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      level: 75,
    },
    {
      name: "Ruby on Rails",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      level: 40,
    },
    {
      name: "Laravel",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
      level: 30,
    },
    {
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      level: 60,
    },
  ];
  const categories = {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    backend: ["Ruby on Rails", "Laravel", "Python", "Java"],
    languages: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java"],
    cloud: ["AWS", "Supabase"],
  };

  return (
    <section id="tech" className="section-container">
      <h2 className="text-title mb-8">Tech Stack</h2>
      <Tabs defaultValue="all" className="w-full">
        <FadeIn delay={0.3}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
          </TabsList>
        </FadeIn>
        {["all", "frontend", "backend", "languages", "cloud"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStackList
                .filter((tech) =>
                  tab === "all"
                    ? true
                    : categories[tab as keyof typeof categories]?.includes(
                        tech.name
                      )
                )
                .sort((a, b) => b.level - a.level)
                .map((tech, index) => (
                  <FadeIn key={index} delay={index * 0.1 + 0.3}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8">
                              {/* アイコンのイメージコンポーネントをここに */}
                              <Image
                                src={tech.icon}
                                alt="logo"
                                height={50}
                                width={50}
                              />
                            </div>
                            <h3 className="font-semibold text-lg">
                              {tech.name}
                            </h3>
                          </div>
                          <Badge
                            variant={
                              getLevelPercentage(tech.level) === "Advanced"
                                ? "default"
                                : getLevelPercentage(tech.level) ===
                                  "Intermediate"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {getLevelPercentage(tech.level)}
                          </Badge>
                        </div>
                        <Progress value={tech.level} className="h-2" />
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default TechStack;
