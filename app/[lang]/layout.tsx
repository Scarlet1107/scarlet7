import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import DictionaryProvider from "@/context/dictionary-provider";
import { getDictionary } from "@/lib/getDictionary";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

// **動的にメタデータを生成**
export async function generateMetadata({
  params,
}: {
  params: { lang: "ja" | "en" };
}): Promise<Metadata> {
  return metadataMap[params.lang] || metadataMap["ja"]; // デフォルトは日本語
}

// 言語ごとのメタデータ
const metadataMap: Record<string, Metadata> = {
  ja: {
    title: "Scarlet",
    description:
      "WebエンジニアのScarletです。作ったアプリをまとめています。今まで「すごい文字数カウント」、「タイヤ見積もりアプリ」などを開発しました。Next js, React, TypeScriptメインです.お仕事の依頼はフォームからお願いします。",
    openGraph: {
      title: "Scarlet",
      description:
        "WebエンジニアのScarletです。作ったアプリをまとめています。今まで「すごい文字数カウント」、「タイヤ見積もりアプリ」などを開発しました。Next js, React, TypeScriptメインです.お仕事の依頼はフォームからお願いします。",
      type: "website",
      locale: "ja_JP",
      images: [{ url: "/favicon.ico" }],
    },
  },
  en: {
    title: "Scarlet",
    description:
      "I am Scarlet, a web engineer. Here is a collection of applications I have created. I have developed apps such as 'Amazing Word Counter' and 'Tire Estimate App'. My main focus is Next.js, React, and TypeScript. For work inquiries, please contact me via form.",
    openGraph: {
      title: "Scarlet",
      description:
        "I am Scarlet, a web engineer. Here is a collection of applications I have created. I have developed apps such as 'Amazing Word Counter' and 'Tire Estimate App'. My main focus is Next.js, React, and TypeScript. For work inquiries, please contact me via form.",

      type: "website",
      locale: "en_US",
      images: [{ url: "/favicon.ico" }],
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "ja" | "en" };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
        <Toaster />
      </body>
    </html>
  );
}
