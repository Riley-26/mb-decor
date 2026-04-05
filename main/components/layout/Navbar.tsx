"use client"

import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";
import { useScrollBy } from "@/hooks/useScrollBy";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import NavBurger from "../ui/NavBurger";
import Image from "next/image";

type NavLink =
    | { label: string; href: string; dropdown?: never }
    | { label: string; href: null; dropdown: { label: string; href: string }[] }

const navLinks: NavLink[] = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [openBurger, setOpenBurger] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [servicesOpen, setServicesOpen] = useState<boolean>(false)
    const windowSize = useWindowSize()

    useEffect(() => {
        if (windowSize.width >= 640) {
            setOpenBurger(false)
            setIsOpen(false)
            setServicesOpen(false)
        }
    }, [windowSize])

    return (
        <>
            <div
                className={`bg-primary-dark mt-16 ${openBurger ? "translate-x-0" : "translate-x-100"} -translate-y-16 transition duration-400 fixed top-0 right-0 h-125 w-64 z-95 flex flex-col items-center justify-center gap-6 shadow-black shadow-2xl rounded-bl-xl border-l-4 border-l-secondary-mid`}
            >
                <ul className="w-full text-xl flex flex-col items-center gap-0 text-light">
                    {navLinks.map((link, i) => {
                        return (
                            <li key={link.href} className="w-full flex justify-center">
                                <Link
                                    className="nav-link cursor-pointer relative flex items-center gap-1 py-3"
                                    href={link.href || ""}
                                    onClick={() => {
                                        setOpenBurger(false)
                                        setIsOpen(false)
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                    <Button to="/contact" size="sm" color="secondaryMid" roundSize="sm" className="text-sm py-1.5! block xl:hidden mt-4">
                        Request a quote
                    </Button>
                </ul>
            </div>
            <nav className="fixed h-12 md:h-14 top-2 left-0 right-0 flex items-center justify-center px-6 md:px-8 z-100 rounded-full bg-neutral-100 w-max gap-24 md:gap-40 lg:gap-108 xl:gap-32 mx-auto border border-neutral-200 shadow-lg shadow-black/10">
                <Link href="/">
                    <Image src="/Asset 12.svg" alt="MB Decor Logo" width={180} height={180} />
                </Link>
                <ul className="hidden xl:flex items-center gap-6 px-4 py-2 text-dark">
                    {
                        navLinks.map((link) => {
                            return (
                                <li key={link.label} className="text-base">
                                    <Link href={link.href || ""} className="nav-link cursor-pointer relative">
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <NavBurger className="block xl:hidden" isOpen={isOpen} onClick={() => {
                    setOpenBurger(!openBurger)
                    setIsOpen(!isOpen)
                }} />
                
                <Button to="/contact" size="sm" color="secondaryMid" roundSize="sm" className="py-1.5! hidden xl:block">
                    Request a quote
                </Button>
            </nav>
        </>
    )
}