import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-black border-t border-neutral-800/50 pb-12 pt-8 px-4 z-50 text-light">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Brand */}
                    <Link
                        href={"/"}
                        aria-label="Link to home page"
                        className="flex gap-4 justify-center items-center">
                        <p className="text-2xl font-dm-sans font-semibold tracking-tighter italic text-neutral-500">MB Decor Logo</p>
                    </Link>

                    {/* Copyright */}
                    <div className="flex flex-col gap-2 items-center">
                        <span className="opacity-70 text-sm text-center">
                            © {currentYear} MB Prestige Painting & Decor. All rights reserved.
                        </span>
                        <a href="https://readwebstudio.co.uk" target="_blank" className="absolute bottom-4 opacity-70 text-xs text-center hover:underline">
                            Website by Read Web Studio
                        </a>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col gap-2 items-center">
                        <div className="flex items-center justify-center gap-3">
                            <Link
                                href="https://www.facebook.com/mbdecorUK"
                                aria-label="Link to Facebook"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <Facebook style={{ fontSize: "32px" }} />
                            </Link>
                            <Link
                                href=""
                                aria-label="Link to Instagram"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <Instagram style={{ fontSize: "36px" }} />
                            </Link>
                            <Link
                                href=""
                                aria-label="Link to Email"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <Mail style={{ fontSize: "32px" }} />
                            </Link>
                        </div>
                        <p className="text-sm!">contact@mbprestige.co.uk</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}