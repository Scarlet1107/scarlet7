import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "./motion/FadeIn";
import Image from "next/image";
import { categories, techStackList } from "@/constants/techStack";
import { Locale } from "@/constants/language";
import { getDictionary } from "@/lib/getDictionary";

const TechStack = async ({ lang }: { lang: Locale }) => {
  const { TechStack } = await getDictionary(lang);

  const getLevelPercentage = (level: number) => {
    if (level > 70 && level <= 100) {
      return `${TechStack.advanced}`;
    } else if (level > 40 && level <= 70) {
      return `${TechStack.intermediate}`;
    } else if (level > 0 && level <= 40) {
      return `${TechStack.beginner}`;
    } else {
      return 0;
    }
  };
  return (
    <section id="tech" className="section-container">
      <h2 className="text-title mb-8 pt-8 md:pt-0">{TechStack.title}</h2>
      <Tabs defaultValue="all" className="w-full">
        <FadeIn delay={0.3}>
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-5 mb-8">
            <TabsTrigger value="all" className="hidden md:flex">{TechStack.all}</TabsTrigger>
            <TabsTrigger value="frontend">{TechStack.frontend}</TabsTrigger>
            <TabsTrigger value="backend">{TechStack.backend}</TabsTrigger>
            <TabsTrigger value="languages">{TechStack.languages}</TabsTrigger>
            <TabsTrigger value="cloud">{TechStack.cloud}</TabsTrigger>
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
