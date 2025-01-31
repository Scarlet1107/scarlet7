import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "./motion/FadeIn";
import { Locale } from "@/constants/language";
import { getDictionary } from "@/lib/getDictionary";

const About = async({lang}: {lang: Locale}) => {
  const { About } = await getDictionary(lang);
  return (
    <section id="about" className="section-container">
      <h2 className="text-title">{About.title}</h2>
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
                <h3 className="text-description whitespace-pre-line">
                  {About.content}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </section>
  );
};

export default About;
