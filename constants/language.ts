export const supportedLanguages = ["ja", "en"] as const;
export type Locale = (typeof supportedLanguages)[number];
