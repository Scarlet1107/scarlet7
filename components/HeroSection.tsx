import React from "react";
import FadeIn from "./motion/FadeIn";

const HeroSection = () => {
  return (
    <div
      className="text-center w-full h-screen items-center space-y-12 justify-center flex flex-col"
      id="#home"
    >
      <FadeIn>
        <h2 className="text-6xl font-semibold">Welcome to my page</h2>
        <br />
        <h2 className="text-6xl font-semibold">
          I am Scarlet, a full-stack developer
        </h2>
      </FadeIn>
    </div>
  );
};

export default HeroSection;
