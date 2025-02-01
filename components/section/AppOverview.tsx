import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "../motion/FadeIn";
import { getDictionary } from "@/lib/getDictionary";
import { Locale } from "@/constants/language";

const AppOverview = async ({ lang }: { lang: Locale }) => {
  const { AppOverview } = await getDictionary(lang);
  const Apps = AppOverview.apps;
  return (
    <section id="app" className="section-container">
      <h2 className="text-title">{AppOverview.title}</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Apps.map((app, index) => (
          <FadeIn key={index} delay={index * 0.1 + 0.3}>
            <Card className="relative h-full">
              {app.icon && (
                <Image
                  src={app.icon}
                  alt="icon"
                  width={70}
                  height={70}
                  className="absolute top-2 right-2"
                />
              )}
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <h3>{app.title}</h3>
                </CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-sm md:text-base">
                  {app.content}
                </p>
              </CardContent>
              <CardFooter>
                {app.url && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-3 py-1 rounded-md hover:text-blue-500 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 relative before:ease-in-out hover:before:w-full flex items-center"
                      >
                        {app.url}
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-max h-min">
                      Try it out
                    </HoverCardContent>
                  </HoverCard>
                )}
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default AppOverview;
