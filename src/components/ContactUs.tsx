import React from "react";
import image from "/public/images/Rectangle.png";
import facebook from "/public/icons/facebook.png";
import insta from "/public/icons/insta.png";
import Image from "next/image";
import { Input } from "./ui/input";

export default function ContactUs() {
    return (
        <div
            className="uppercase mb-36 mx-12 px-[7.5625rem] pt-24 pb-12 rounded-[2rem] relative z-50 flex gap-48"
            style={{ background: "linear-gradient(180deg, #0D468E 0%, #CB7DD3 100%)" }}
        >
            <p
                className="whitespace-nowrap font-bold text-[8rem] leading-[8rem] inline-block text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #FFF 0%, #A3A9AE 100%)" }}
            >
                Contact Us
            </p>

            <div className="">
                <p className="font-bold text-[2.5rem] mb-4 leading-8">Customer Support</p>
                <p className="font-light text-xl mb-12 leading-7">
                    Reach out to us through anytime—phone, email, or live chat. We are here to help answer your questions and navigate any
                    challenges you encounter.
                </p>

                <div className="grid grid-cols-2 gap-[0.95rem] mb-[0.95rem]">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" className="col-span-2" />
                    <Input placeholder="Phone Number" className="col-span-2" />
                    <textarea
                        placeholder="Message"
                        className="placeholder:uppercase flex w-full rounded-md border border-[#FFFFFF33] bg-[#FFFFFF0D] px-[0.94rem] py-3 text-base placeholder:text-[#FFFFFF99] text-[#FFFFFF99] outline-none disabled:cursor-not-allowed disabled:opacity-50 col-span-2"
                    />
                </div>

                <button className="py-[0.8rem] text-[#F8F8F8] text-base w-full bg-[#0D468E] rounded-[0.35rem] mb-9">Send it to the moon</button>

                <p className="text-xl leading-7 mb-3">
                    Connect with us on social media to stay up to date on the latest tips, trends, and services.
                </p>

                <div className="flex items-center gap-3">
                    <Image src={facebook} alt="" className="cursor-pointer" />
                    <Image src={insta} alt="" className="cursor-pointer" />
                </div>
            </div>

            <Image src={image} alt="" className="absolute start-16 bottom-3" />
        </div>
    );
}
