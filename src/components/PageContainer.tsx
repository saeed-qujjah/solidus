"use client";

import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";

type PageContainerProps = {
    className?: HTMLProps<HTMLElement>["className"];
};

export default function PageContainer({ children, className }: PropsWithChildren<PageContainerProps>) {
    return <div className={clsx("px-3 md:px-10 lg:px-[10.325rem]", className)}>{children}</div>;
}
