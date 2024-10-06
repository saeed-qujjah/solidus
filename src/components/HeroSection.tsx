"use client";

import Image from "next/image";
import phone from "/public/images/phone.png";

export default function HeroSection() {
    return (
        <div className="mt-2 mb-10 relative flex flex-col items-center">
            <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_98_331)">
                    <path
                        d="M3.33331 33.3333H36.6666V36.6666H3.33331V33.3333ZM6.66665 20H9.99998V31.6666H6.66665V20ZM15 20H18.3333V31.6666H15V20ZM21.6666 20H25V31.6666H21.6666V20ZM30 20H33.3333V31.6666H30V20ZM3.33331 11.6666L20 3.33331L36.6666 11.6666V18.3333H3.33331V11.6666ZM20 13.3333C20.442 13.3333 20.8659 13.1577 21.1785 12.8452C21.4911 12.5326 21.6666 12.1087 21.6666 11.6666C21.6666 11.2246 21.4911 10.8007 21.1785 10.4881C20.8659 10.1756 20.442 9.99998 20 9.99998C19.558 9.99998 19.134 10.1756 18.8215 10.4881C18.5089 10.8007 18.3333 11.2246 18.3333 11.6666C18.3333 12.1087 18.5089 12.5326 18.8215 12.8452C19.134 13.1577 19.558 13.3333 20 13.3333Z"
                        fill="#41B9B3"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_98_331">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>

            <div className="relative w-[17.75rem] z-10">
                <Image src={phone} alt="" className="w-full" />

                <button className="uppercase absolute left-1/2 bottom-[10.5rem] -translate-x-1/2 text-[#F8F8F8] text-2xl font-bold px-3 py-2 bg-[#0D468E] rounded-[0.38rem]">
                    Join NOW
                </button>
            </div>

            <div
                className="absolute top-[4.8125rem] left-1/2 -translate-x-1/2 w-[27.375rem] h-[27.375rem] rounded-full bg-[#5F6568] "
                style={{ filter: "blur(90px)" }}
            />
            <div className="absolute top-[6rem] left-1/2 -translate-x-1/2 flex flex-col z-20">
                <p
                    className="font-bold text-[7.9375rem] uppercase text-center whitespace-nowrap leading-[8rem] inline-block text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #FFF 0%, #A3A9AE 100%)" }}
                >
                    Discover Smarter Banking
                </p>

                <p className="uppercase font-light text-white text-center text-[2rem] whitespace-nowrap">
                    Join us on a journey to effortless and secure banking, <span className="font-normal">designed just for you</span>
                </p>
            </div>
        </div>
    );
}
