import React from "react";
import dynamic from "next/dynamic";
import Header from "@/components/ui/header";
import HeroSection from "@/components/HeroSection";
import AppOverview from "@/components/AppOverview";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { Locale } from "@/constants/language";
import StarFieldLoading from "@/components/StarFieldLoading";

const StarField = dynamic(() => import("../../components/StarField"), {
  ssr: false, // サーバーサイドレンダリングを無効化（クライアントサイドのみで実行）
  loading: () => <StarFieldLoading />,
});

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
