"use client"

import { type ButtonHTMLAttributes, type ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "full" | "outline"
    size?: "sm" | "md" | "lg"
    roundSize?: "none" | "sm" | "lg" | "xl" | "full"
    color?: string
    to?: string
    children: ReactNode
}

type ColorProps = {
    [key: string]: {
        [key: string]: string
    }
}

export default function Button({
    variant = "full",
    color = "dark",
    size = "md",
    roundSize = "full",
    className = "",
    to = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "font-body font-normal border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black cursor-pointer active:scale-98"

    const colors: ColorProps = {
        dark: {
            full: "bg-black border-black hover:-translate-y-0.5 focus:ring-black/20 hover:shadow-lg text-neutral-300",
            outline:
                "bg-transparent border-black hover:bg-black focus:ring-black/20 text-dark hover:text-neutral-300",
        },
        light: {
            full: "bg-neutral-200 border-neutral-200 hover:-translate-y-0.5 focus:ring-neutral-200/20 hover:shadow-lg text-dark",
            outline:
                "bg-transparent border-neutral-200 hover:bg-neutral-200 focus:ring-neutral-200/20 text-light hover:text-dark",
        },
        charcoal: {
            full: "bg-tertiary-dark border-tertiary-dark hover:-translate-y-0.5 focus:ring-tertiary-dark/20 hover:shadow-lg text-neutral-300",
            outline:
                "bg-transparent border-tertiary-dark hover:bg-tertiary-dark focus:ring-tertiary-dark/20 text-neutral-300",
        },
        primaryMid: {
            full: "bg-primary-mid border-primary-mid hover:-translate-y-0.5 focus:ring-primary-mid/20 hover:shadow-lg text-white",
            outline:
                "bg-transparent border-primary-mid hover:bg-primary-mid focus:ring-neutral-400/20 text-white hover:text-white",
        },
        secondaryMid: {
            full: "bg-secondary-mid border-secondary-mid hover:-translate-y-0.5 focus:ring-secondary-mid/20 hover:shadow-lg text-light",
            outline:
                "bg-transparent border-secondary-mid hover:bg-secondary-mid focus:ring-neutral-400/20 text-light hover:text-dark",
        },
        secondaryLight: {
            full: "bg-secondary-light border-secondary-light hover:-translate-y-0.5 focus:ring-secondary-light/20 hover:shadow-lg text-dark",
            outline:
                "bg-transparent border-secondary-light hover:bg-secondary-light focus:ring-neutral-400/20 text-light hover:text-dark",
        },
    }

    const sizes = {
        sm: "px-3 py-2 text-base min-w-[9rem]",
        md: "px-5 py-3 text-lg min-w-[12rem]",
        lg: "px-6 py-4 text-xl min-w-[14rem]",
    }

    const roundSizes = {
        none: "",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-2xl",
        full: "rounded-full",
    }

    return (
        <>
            {variant === "outline" ? (
                <button
                    className={`${baseStyles} ${colors[color]?.[variant]} ${sizes[size]} ${roundSizes[roundSize]} ${className}`}
                    onClick={() => {
                        if (to && to.slice(0, 1) === "/") {
                            window.location.href = to
                        } else if (to) {
                            const el = document.getElementById(to)
                            if (el) {
                                el.scrollIntoView({ behavior: "smooth" })
                            }
                        }
                    }}
                    {...props}
                >
                    {children}
                </button>
            ) : (
                <button
                    className={`${baseStyles} ${colors[color]?.[variant]} ${sizes[size]} ${roundSizes[roundSize]} ${className}`}
                    onClick={() => {
                        if (to && to.slice(0, 1) === "/") {
                            window.location.href = to
                        } else if (to) {
                            const el = document.getElementById(to)
                            if (el) {
                                el.scrollIntoView({ behavior: "smooth" })
                            }
                        }
                    }}
                    {...props}
                >
                    {children}
                </button>
            )}
        </>
    )
}