import Image from "next/image";
import React from "react";
import icon from "/public/icons/3dicons.png";
import icon2 from "/public/icons/3dicons(1).png";
import icon3 from "/public/icons/3dicons(2).png";
import icon4 from "/public/icons/3dicons(3).png";
import icon5 from "/public/icons/3dicons(4).png";

const SecurityBox = ({ title, icon, description }: { title: string; icon: any; description: string }) => {
    return (
        <div
            className="space-y-11 text-[1.75rem] uppercase px-[1.9rem] py-9 rounded-3xl"
            style={{
                background: "linear-gradient(304deg, rgba(13, 70, 142, 0.00) 0%, rgba(13, 70, 142, 0.50) 91.15%)",
                backdropFilter: "blur(7px)",
            }}
        >
            <div className="flex items-center gap-4">
                <Image src={icon} alt="" />

                <p>{title}</p>
            </div>

            <p className="font-light leading-7">{description}</p>
        </div>
    );
};

export default function SecuritySection() {
    return (
        <div
            className="relative overflow-hidden mx-[3.0625rem] px-[7.2625rem] pt-40 pb-20 rounded-[2rem] border-2 border-white"
            style={{
                background: "linear-gradient(113deg, rgba(13, 70, 142, 0.80) 10.29%, rgba(13, 70, 142, 0.80) 100.35%)",
                backdropFilter: "blur(37.5px)",
            }}
        >
            <p className="z-40 relative uppercase text-[8rem] font-bold mb-16 leading-[6.3rem]">Security</p>
            <p className="z-40 relative uppercase text-[2.5rem] font-light leading-10">
                Your security is our top priority. From advanced encryption to continuous
            </p>
            <p className="z-40 relative uppercase text-[2.5rem] font-light mb-8 leading-10 pe-9">
                monitoring, we protect your financial information with industry-leading security measures.
            </p>

            <div className="grid grid-cols-2 gap-40 z-40 relative">
                <SecurityBox
                    icon={icon}
                    title="Encryption and Data Protection"
                    description="Your transactions and personal  data are secured using state-of-the-art encryption technologies, ensuring they  remain confidential."
                />
                <SecurityBox
                    icon={icon2}
                    title="Fraud Prevention"
                    description="Our proactive fraud detection systems  monitor suspicious activities 24/7, safeguarding your account from  unauthorized access."
                />
            </div>

            <div
                className="absolute -top-14 left-[3.8rem] w-[45.875rem] h-[45.875rem] rounded-full z-10"
                style={{ filter: "blur(85px)", backgroundColor: "rgba(42, 42, 42, 0.53)" }}
            />
            <div
                className="absolute top-4 -right-44 w-[29.1875rem] h-[29.1875rem] rounded-full bg-[#2A2A2A]"
                style={{ filter: "blur(75px)" }}
            />

            <div className="absolute -right-1 bottom-[15rem] w-40 h-48 z-20">
                <Image src={icon3} alt="" fill />
            </div>
            <div className="absolute start-0 bottom-0 z-20 w-[15.6rem] h-[15.6rem]">
                <Image src={icon4} alt="" fill />
            </div>
            <div className="absolute top-0 start-64 w-[13rem] h-[13rem]">
                <Image src={icon5} alt="" fill />
            </div>
        </div>
    );
}
