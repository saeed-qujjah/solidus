// (Not to be confused with i18n.ts)

// Remember the Locale type is just a
// union: "en-US" | "ar-EG"
export type Locale = "en" | "ar";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "ar"];

export const localeNames: Record<Locale, string> = {
  "en": "English",
  "ar": "العربية",
};