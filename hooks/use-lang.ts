"use client";

import { Locale, supportedLanguages } from "@/constants/language";
import { usePathname } from "next/navigation";

export const useLocale = (): Locale => {
  const pathname = usePathname();

  // URLの先頭の言語部分を取得（例: "/ja/about" -> "ja"）
  const lang = pathname.split("/")[1];

  // サポートされている言語であれば返し、そうでなければデフォルトを返す
  return supportedLanguages.includes(lang as Locale)
    ? (lang as Locale)
    : "ja";
};
