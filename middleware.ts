import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

const locales = ["en", "ja"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request: { headers: { get: (arg0: string) => string } }) {
  // Example implementation to get the locale from the request headers
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return "en"; // default locale
  const preferredLocale = acceptLanguage.split(",")[0];
  return locales.includes(preferredLocale) ? preferredLocale : "en";
}

export function middleware(request: {
  nextUrl: string | NextURL | URL;
  headers: { get: (arg0: string) => string };
}) {
  // Check if there is any supported locale in the pathname
  const { pathname } =
    request.nextUrl instanceof URL ? request.nextUrl : new URL(request.nextUrl);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  if (request.nextUrl instanceof URL || request.nextUrl instanceof NextURL) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
  }
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
