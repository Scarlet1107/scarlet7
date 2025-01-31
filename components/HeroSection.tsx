import React from "react";
import FadeIn from "./motion/FadeIn";
import { getDictionary } from "@/lib/getDictionary";

const HeroSection = async ({ lang }: { lang: "en" | "ja" }) => {
  const { HeroSection } = await getDictionary(lang);
  return (
    <div
      className="text-center w-full h-screen items-center space-y-12 justify-center flex flex-col"
      id="#home"
    >
      <FadeIn>
        <h1 className="text-title font-semibold">{HeroSection.title}</h1>
        <br />
        <h1 className="text-title font-semibold">{HeroSection.subtitle}</h1>
      </FadeIn>
    </div>
  );
};

export default HeroSection;
