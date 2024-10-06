"use client";

import { useLocale } from "next-intl";
import { Locale, localeNames, locales } from "@/i18nconfig";
import { usePathname, useRouter } from "@/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathName = usePathname();

    const switchLocale = (newLocale: Locale) => {
        router.replace(pathName, { locale: newLocale });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="focus-visible:ring-0 focus-visible:ring-offset-0">
                <Button variant="ghost" size="icon" className="rounded-full text-sm md:text-base">
                    {locale.toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-0">
                {locales.map((loc) => (
                    <DropdownMenuItem
                        key={loc}
                        onClick={() => {
                            switchLocale(loc);
                        }}
                    >
                        {localeNames[loc]}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
