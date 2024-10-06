"use client";

import Image from "next/image";
import LocaleSwitcher from "../LocaleSwitcher";
import PageContainer from "../PageContainer";
import Logo from "/public/images/BANK_OF_SOLIDUS_WHITE_A.png";
import line from "/public/images/backgrounds/line-under-nav.png";
import { Link } from "@/navigation";

const links = [
    { href: "/", title: "HOME" },
    { href: "/#about", title: "ABOUT US" },
    { href: "/#products", title: "Products" },
    { href: "/#services", title: "Services" },
];

export default function Navbar() {
    return (
        <header>
            <nav>
                <PageContainer className="relative pt-8 pb-4 flex items-center justify-between text-white font-light text-2xl">
                    {/* <LocaleSwitcher /> */}
                    <div className="relative w-12 h-16">
                        <Image src={Logo} alt="logo" fill />
                    </div>

                    <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[3.81rem]">
                        {links.map((link) => (
                            <Link key={link.title} href={link.href} className="uppercase hover:opacity-75 transition-all">
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <p className="pb-4">+971 99 999 9999</p>
                </PageContainer>

                <Image src={line} alt="" className="w-full" />
            </nav>
        </header>
    );
}
