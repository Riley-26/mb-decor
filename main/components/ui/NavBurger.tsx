import React, { useState } from "react"

interface NavBurgerProps {
    onClick?: () => void
    isOpen?: boolean
    className?: string
}

export default function NavBurger({
    onClick,
    isOpen: isOpenProp,
    className = "",
}: NavBurgerProps) {
    const [internalOpen, setInternalOpen] = useState(false)
    const isControlled = typeof isOpenProp === "boolean"
    const isOpen = isControlled ? isOpenProp : internalOpen

    const handleClick = () => {
        if (!isControlled) setInternalOpen((prev) => !prev)
        if (onClick) onClick()
    }

    return (
        <button
            aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={handleClick}
            className={`relative w-8 h-8 flex flex-col justify-center items-center cursor-pointer focus:outline-none ${className}`}
            type="button"
        >
            <span
                className={`block w-7 h-0.5 bg-secondary-mid transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
                className={`block w-7 h-0.5 bg-secondary-mid my-1 transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
                className={`block w-7 h-0.5 bg-secondary-mid transition-transform duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
        </button>
    )
}