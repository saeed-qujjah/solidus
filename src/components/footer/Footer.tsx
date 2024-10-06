"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import logo from "/public/images/BANK_OF_SOLIDUS_A_LOGO.png";
import text from "/public/images/BANK_OF_SOLIDUS_A_TEXT.png";
import { Link } from "@/navigation";

const aboutUsLinks = [
    {
        href:"/",
        title:"Features",
    },
    {
        href:"/",
        title:"Book a demo",
    },
    {
        href:"/",
        title:"Security ",
    },
]

const productsLinks = [
    {
        href:"/",
        title:"Credits Cards",
    },
    {
        href:"/",
        title:"Gift Cards",
    },
    {
        href:"/",
        title:"Savings accounts",
    },
]

const usefulLinks = [
    {
        href:"/",
        title:"Documentation",
    },
    {
        href:"/",
        title:"Affiliate program",
    },
]

const socialLinks = [
    {
        href:"/",
        title:"License",
    },
    {
        href:"/",
        title:"News",
    },
]

const NavigationGroup = ({ title, links }: { title: string; links: { href: string; title: string }[] }) => {
    return (
        <div className="text-sm">
            <p className="font-bold mb-5">{title}</p>

            <div className="flex flex-col gap-3 text-[#ADB2B1]">
                {links.map((link) => (
                    <Link key={link.title} href={link.href} className="hover:opacity-75 transition-all">
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default function Footer() {
    return (
        <footer
            className="z-50 relative uppercase m-12 rounded-[2rem] border-4 border-[#0D468E] pt-14 pb-8 ps-24 pe-28 flex flex-col gap-28"
            style={{ backgroundColor: "rgba(13, 70, 142, 0.20)" }}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <Image src={logo} alt="" className="w-11" />
                    <Image src={text} alt="" className="h-[1.1rem]" />
                </div>

                <div className="w-[60%] grid grid-cols-4 -me-36">
                    <NavigationGroup title="About us" links={aboutUsLinks}/>
                    <NavigationGroup title="Products" links={productsLinks}/>
                    <NavigationGroup title="Useful Links" links={usefulLinks}/>
                    <NavigationGroup title="Social" links={socialLinks}/>
                </div>
            </div>

            <div className="flex items-center justify-between text-[#ADB2B1] text-base">
                <p>&#169; 2024 Bank of Solidus . All Rights Reserved</p>

                <p>This page uses cookies. See cookies details here</p>
            </div>
        </footer>
    );
}
