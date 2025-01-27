import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "./motion/FadeIn";

interface App {
  icon: string;
  title: string;
  description: string;
  content: string;
  url: string;
}

const AppOverview = () => {
  const Apps: App[] = [
    {
      icon: "/sugoi-mojisu-counter.png",
      title: "すごい文字数カウント",
      description: "趣味で開発",
      content:
        "入力した文字をカウントできます。\n目標文字数を設定することができ、現在の文字数が目標に対してどの程度なのかを視覚化する機能付きです。\nまたAIを搭載しており、入力した文字に対してのアドバイスを無料で受けることができます。",
      url: "https://app.scarlet7.net/word-counter",
    },
    {
      icon: "/tire-quotation-app.jpg",
      title: "タイヤ見積もりアプリ",
      description: "仕事で開発",
      content:
        "地域の車会社の社長から「毎回見積書をexcelで作るのが大変」という話を聞き、社内アプリとして開発しました。\nタイヤの情報をあらかじめデータベースに入れておき、条件検索をかけることで、誰でも金額の間違えなく同じクオリティの見積書が作れます。",
      url: "",
    },
  ];
  return (
    <section id="app" className="section-container">
      <h2 className="text-title">今まで開発したアプリ</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {Apps.map((app, index) => (
          <FadeIn key={index} delay={index * 0.1 + 0.3}>
            <Card className="relative h-full">
              {app.icon && (
                <Image
                  src={app.icon}
                  alt="icon"
                  width={70}
                  height={70}
                  className="absolute top-2 right-2"
                />
              )}
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <h3>{app.title}</h3>
                </CardTitle>
                <CardDescription>{app.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-sm md:text-base">
                  {app.content}
                </p>
              </CardContent>
              <CardFooter>
                {app.url && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href={app.url}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-2 text-base rounded-md hover:text-blue-500 font-medium md:text-lg before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-500 before:transition-all before:duration-300 relative before:ease-in-out hover:before:w-full"
                      >
                        {app.url}
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-max h-min">
                      実際に試してみる
                    </HoverCardContent>
                  </HoverCard>
                )}
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default AppOverview;
