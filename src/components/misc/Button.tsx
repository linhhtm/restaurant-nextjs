'use client'
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const Button = ({
    children,
    className
}: {
    children: ReactNode,
    className: string
}) => {
    return (
        <button
            className={className}
            onClick={() => redirect("/")}
        >
            {children}
        </button>
    )
}