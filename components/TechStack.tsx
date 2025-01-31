import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "./motion/FadeIn";
import Image from "next/image";
import { categories, techStackList } from "@/constants/techStack";


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
                  <FadeIn key={index} delay={index * 0.05 + 0.3}>
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
