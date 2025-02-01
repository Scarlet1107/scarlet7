import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "../motion/FadeIn";
import { Locale } from "@/constants/language";
import { getDictionary } from "@/lib/getDictionary";
import Link from "next/link";

const About = async ({ lang }: { lang: Locale }) => {
  const { About } = await getDictionary(lang);
  return (
    <section id="about" className="section-container">
      <h2 className="text-title mb-8 pt-8 md:pt-0">{About.title}</h2>
      <FadeIn>
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="flex items-center md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <Image
                  src={"/my-icon.png"}
                  alt="my-icon"
                  height={150}
                  width={150}
                  className="rounded-full border-4 border-muted shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl mb-2 font-semibold">
                  {About.greeting}
                </h2>
                <h3 className="whitespace-pre-line mb-4 text-description">
                  {About.content}
                </h3>
                <Link
                  href="https://github.com/Scarlet1107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex pr-2 space-x-2 rounded-md text-description before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 hover:text-blue-500 before:transition-all before:duration-300 relative before:ease-in-out hover:before:w-full items-center w-max"
                >
                  <p>https://github.com/Scarlet1107</p>
                  <Image
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    }
                    alt="icon"
                    height={30}
                    width={30}
                  />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
};

export default About;
