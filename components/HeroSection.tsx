import React from "react";
import FadeIn from "./motion/FadeIn";

const HeroSection = () => {
  return (
    <div
      className="text-center w-full h-screen items-center space-y-12 justify-center flex flex-col"
      id="#home"
    >
      <FadeIn>
        <h1 className="text-title font-semibold">Welcome to my page</h1>
        <br />
        <h1 className="text-title font-semibold">
          I am Scarlet, a full-stack developer
        </h1>
      </FadeIn>
    </div>
  );
};

export default HeroSection;
