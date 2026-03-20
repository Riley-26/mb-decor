"use client"

import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";
import { useScrollBy } from "@/hooks/useScrollBy";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import NavBurger from "../ui/NavBurger";

type NavLink =
    | { label: string; href: string; dropdown?: never }
    | { label: string; href: null; dropdown: { label: string; href: string }[] }

const navLinks: NavLink[] = [
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: null,
        dropdown: [
            { label: "Interior/Exterior Painting", href: "/painting" },
            { label: "Dustless Sanding", href: "/dustless-sanding" },
            { label: "Wallpapering", href: "/wallpapering" }
        ],
    },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
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
                <ul className="w-full text-xl flex flex-col items-center gap-0">
                    {navLinks.map((link, i) => {
                        if (link.dropdown) {
                            return (
                                <li key={link.label} className="w-full flex flex-col items-center">
                                    {/* Divider above */}
                                    {i > 0 && <div className="w-4/5 h-px bg-neutral-700/40 my-1" />}

                                    <button
                                        className="w-full flex items-center justify-center gap-1.5 py-3 text-sm"
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={12}
                                            className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    {/* Animated sub-menu */}
                                    <AnimatePresence initial={false}>
                                        {servicesOpen && (
                                            <motion.div
                                                key="services-dropdown"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                className="overflow-hidden w-full"
                                            >
                                                <ul className="flex flex-col items-center gap-1 bg-black/50 border-y border-neutral-700/30 py-3 w-full">
                                                    {link.dropdown.map((sub) => (
                                                        <li key={sub.href}>
                                                            <Link
                                                                href={sub.href}
                                                                className="nav-link text-xs! text-light/60 hover:text-light! transition-colors duration-150 relative"
                                                                onClick={() => {
                                                                    setOpenBurger(false)
                                                                    setIsOpen(false)
                                                                    setServicesOpen(false)
                                                                }}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Divider below */}
                                    <div className="w-4/5 h-px bg-neutral-700/40 my-1" />
                                </li>
                            )
                        }
                        return (
                            <li key={link.href} className="w-full flex justify-center">
                                <Link
                                    className="nav-link cursor-pointer relative flex items-center gap-1 py-3"
                                    href={link.href}
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
                    <p className="text-xl md:text-2xl font-dm-sans font-semibold tracking-tighter italic text-neutral-500">MB Decor Logo</p>
                </Link>
                <ul className="hidden xl:flex items-center gap-6 px-4 py-2 text-dark">
                    {
                        navLinks.map((link) => {
                            if (link.dropdown) {
                                return (
                                    <li key={link.label} className="relative group h-full flex items-center">
                                        {/* Trigger */}
                                        <button className="cursor-pointer relative flex items-center gap-1.5">
                                            {link.label}
                                            <ChevronDown
                                                size={12}
                                                className="transition-transform duration-200 group-hover:rotate-180"
                                            />
                                        </button>

                                        {/* Dropdown panel */}
                                        <div className="absolute pt-4 top-full -left-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                            <div className="rounded-b-2xl bg-neutral-100 border border-secondary-mid/30 shadow-xl shadow-black/50 min-w-72 flex flex-col py-1">
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        className="px-5 py-3 hover:bg-secondary-mid/10 transition-colors duration-150 whitespace-nowrap"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                            return (
                                <li key={link.label} className="text-base">
                                    <Link href={link.href || ""}>
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