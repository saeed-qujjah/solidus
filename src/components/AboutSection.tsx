import Image from "next/image";
import React from "react";
import accessIcon from "/public/icons/Group 5.png";
import securityIcon from "/public/icons/bank-ident-svgrepo-com.png";
import savingsIcon from "/public/icons/noun-saving-2793080 1.png";

const AboutBox = ({ title, icon, description }: { title: string; icon: any; description: string }) => {
    return (
        <div className="space-y-8 text-2xl uppercase">
            <div className="flex items-center gap-4">
                <Image src={icon} alt="" />

                <p>{title}</p>
            </div>

            <p className="font-light leading-7">{description}</p>
        </div>
    );
};

export default function AboutSection() {
    return (
        <div
        id="about"
            className="mx-[3.0625rem] h-[58.5625rem] px-[7.2625rem] py-14 flex flex-col justify-between"
            style={{ backgroundSize: "100% 100%", backgroundImage: "url('/images/backgrounds/about-section-background-image.png')" }}
        >
            <div className="flex items-start gap-16">
                <AboutBox
                    title="Easy Anywhere Access"
                    icon={accessIcon}
                    description="Your financial world in your pocket.  Our mobile app lets you manage your money on the go. anytime, anywhere.  Perfect for the modern you."
                />
                <AboutBox
                    title="Trusted Security"
                    icon={securityIcon}
                    description="Sleep easy knowing your funds are safe with  us. We use the latest security measures to protect you and your money,  around the clock."
                />
                <AboutBox
                    title="Maximize Your Savings"
                    icon={savingsIcon}
                    description="Let your money work for you. Our  high-interest savings accounts and smart investment tools help you grow your  wealth effortlessly "
                />
            </div>

            <div className="flex justify-between items-center">
                <p
                    className="max-w-[23.1875rem] font-bold text-[8rem] leading-[8rem] inline-block text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #FFF 0%, #A3A9AE 100%)" }}
                >
                    About Bank of Solidus{" "}
                </p>

                <p className="font-light text-[1.75rem] max-w-[36.1875rem] leading-7">
                    Driven by innovation and the spirit of adventure, Bank of Solidus is not just a bank; we are your financial partner on
                    the journey to fulfilling your dreams. We&apos;re here to revolutionize banking together.
                </p>
            </div>
        </div>
    );
}
