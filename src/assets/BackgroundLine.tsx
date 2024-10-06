import React, { HTMLProps } from "react";

export default function BackgroundLine({
    className = "fixed top-0 start-[10rem]",
}: {
    className?: HTMLProps<HTMLElement>["className"];
}) {
    return (
        <svg className={className} width="9" height="2005" viewBox="0 0 10 6505" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_92_142)">
                <path d="M4.99968 7211L5 0" stroke="#474747" />
            </g>
            <defs>
                <filter
                    id="filter0_d_92_142"
                    x="0.499634"
                    y="-4"
                    width="9.00037"
                    height="7219"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.278431 0 0 0 0 0.278431 0 0 0 0 0.278431 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_142" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_142" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
