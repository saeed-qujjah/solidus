import React from "react";
import PageContainer from "./PageContainer";
import Image from "next/image";
import logo from "/public/images/BANK_OF_SOLIDUS_A_LOGO.png";
import text from "/public/images/BANK_OF_SOLIDUS_A_TEXT.png";

export default function AboutUsSection() {
    return (
        <PageContainer className="flex gap-44 mt-72 mb-64 uppercase">
            <div className="pt-7 space-y-9">
                <div className="flex items-center gap-4">
                    <Image src={logo} alt="" />
                    <Image src={text} alt="" />
                </div>

                <p
                    className="max-w-[23.1875rem] whitespace-nowrap font-bold text-[8rem] leading-[8rem] inline-block text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #FFF 0%, #A3A9AE 100%)" }}
                >
                    About us
                </p>
            </div>

            <div className="space-y-[3.25rem]">
                <p className="font-bold text-[2.5rem]">Our Mission</p>

                <div className="text-[1.75rem] font-light space-y-3 leading-8">
                    <p className="max-w-[35rem]">To redefine what you expect from a bank, transforming everyday banking into an extraordinary experience for you.</p>
                    <p className="max-w-[35rem]">
                        We have built a bank to provide you with an entirely new banking experience. With all the latest technologies at
                        your fingertips and our focus on you, there is nothing to stop you achieving financial security.
                    </p>
                </div>
            </div>
        </PageContainer>
    );
}
