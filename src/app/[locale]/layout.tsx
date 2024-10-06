import useGetDirection from "@/utils/hooks/useGetDirection";
import Providers from "./providers";
import localFont from "next/font/local";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BackgroundLine from "@/assets/BackgroundLine";

const bebasNeue = localFont({
    src: [
        {
            path: "../../../public/font/BebasNeue-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../../public/font/BebasNeue-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/font/BebasNeue-Book.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../../public/font/BebasNeue-Bold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-bebasNeue",
});

export const metadata: Metadata = {
    title: "Solidus",
    description: "Solidus",
};

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    const dir = useGetDirection();
    const messages = useMessages();

    return (
        <html lang={locale} dir={dir} className={bebasNeue.className}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Providers>
                        <div className="relativ min-h-screen flex flex-col justify-between" id="#home">
                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />

                            <BackgroundLine />
                            <BackgroundLine className="fixed top-0 start-[27.5rem]" />
                            <BackgroundLine className="fixed top-0 end-[27.5rem]" />
                            <BackgroundLine className="fixed top-0 end-[10rem]" />
                        </div>
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
