import React from "react";
// import FadeIn from "./motion/FadeIn";
import { getDictionary } from "@/lib/getDictionary";

const HeroSection = async ({ lang }: { lang: "en" | "ja" }) => {
  const { HeroSection } = await getDictionary(lang);
  return (
    <div
      className="text-center w-full h-screen items-center px-4 md:space-y-12 justify-center flex flex-col"
      id="#home"
    >
      <h1 className="text-title whitespace-pre-line animate-fadeUp">
        {HeroSection.title}
      </h1>
      <h1 className="text-title whitespace-pre-line animate-fadeUp">
        {HeroSection.subtitle}
      </h1>
    </div>
  );
};

export default HeroSection;
