// app/page.tsx (サーバーコンポーネント)
import React from "react";
import StarField from "../../components/StarField";
import Header from "@/components/ui/header";
import HeroSection from "@/components/HeroSection";
import AppOverview from "@/components/AppOverview";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { Locale } from "@/constants/language";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  return (
    <main className="w-screen min-h-screen text-white">
      <StarField />
      <HeroSection lang={lang} />
      <AppOverview lang={lang} />
      <TechStack lang={lang} />
      <About lang={lang} />
      <Contact />
      <Header />
    </main>
  );
}
