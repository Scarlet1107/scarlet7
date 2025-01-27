// app/page.tsx (サーバーコンポーネント)
import React from "react";
import StarField from "./StarField";
import Header from "@/components/ui/header";
import HeroSection from "@/components/HeroSection";
import AppOverview from "@/components/AppOverview";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-screen min-h-screen text-white">
      <StarField />
      <HeroSection />
      <AppOverview />
      <About />
      <TechStack />
      <Contact />
      <Header />
    </main>
  );
}
