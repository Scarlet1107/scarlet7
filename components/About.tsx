import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="text-title">About</h2>
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
              <p className="text-description">
                I am a full-stack developer with a focus on front-end
                development. I have experience in building web applications
                using React, Next.js, and Tailwind CSS. I am passionate about
                creating user-friendly and responsive web applications. I am
                also interested in learning new technologies and frameworks to
                improve my skills.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
