import { NextResponse, NextRequest } from "next/server";

const locales = ["en", "ja"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return "en"; // default locale
  const preferredLocale = acceptLanguage.split(",")[0];
  return locales.includes(preferredLocale) ? preferredLocale : "en";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Next.js の内部リクエストを除外
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/static/") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // ロケールを判定
  const locale = getLocale(request);

  // リダイレクト処理
  const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl.origin);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: "/((?!_next|api|static|favicon.ico|robots.txt).*)",
};
