import { useLocale } from "next-intl";

type LocaleDirection = "rtl" | "ltr";

export default function useGetDirection(): LocaleDirection {
    const locale = useLocale();
    return locale == "ar" ? "rtl" : "ltr";
}
