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
import FadeIn from "./motion/FadeIn";

interface App {
  icon: string;
  title: string;
  description: string;
  content: string;
  url: string;
}

const AppOverview = () => {
  const Apps: App[] = [
    {
      icon: "/sugoi-mojisu-counter.png",
      title: "Sugoi Mojisu Counter",
      description: "Developed as a hobby",
      content:
        "You can count the characters you input.\nYou can set a target number of characters and visualize how close you are to the target.\nIt also has AI that provides free advice on the text you input.",
      url: "https://app.scarlet7.net/word-counter",
    },
    {
      icon: "/tire-quotation-app.jpg",
      title: "Tire Quotation App",
      description: "Developed for work",
      content:
        "I developed this as an internal app after hearing from the president of a local car company that creating quotations in Excel every time was a hassle.\nBy pre-entering tire information into a database and performing conditional searches, anyone can create quotations with the same quality without making mistakes in the amount.",
      url: "",
    },
  ];
  return (
    <section id="app" className="section-container">
      <h2 className="text-title">Apps Developed So Far</h2>
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
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-2 text-base rounded-md hover:text-blue-500 font-medium md:text-lg before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 relative before:ease-in-out hover:before:w-full"
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
