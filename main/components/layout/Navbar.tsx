import Link from "next/link";
import Button from "../ui/Button";


export default function Navbar() {
    return (
        <nav className="fixed h-14 top-2 left-0 right-0 flex items-center justify-between px-8 z-50 rounded-full bg-neutral-100 w-full max-w-5xl mx-auto border border-neutral-200 shadow-lg shadow-black/10">
            <Link href="/">
                <p className="text-2xl font-dm-sans font-semibold tracking-tighter italic text-neutral-500">MB Decor Logo</p>
            </Link>
            <ul className="flex items-center gap-6 px-4 py-2 text-dark">
                <li className="text-base">
                    <Link href="/">
                        About
                    </Link>
                </li>
                <li className="text-base">
                    <Link href="/">
                        Services
                    </Link>
                </li>
                <li className="text-base">
                    <Link href="/">
                        Projects
                    </Link>
                </li>
                <li className="text-base">
                    <Link href="/">
                        Testimonials
                    </Link>
                </li>
                <li className="text-base">
                    <Link href="/">
                        Contact
                    </Link>
                </li>
            </ul>
            <Button to="/contact" size="sm" color="secondaryMid" roundSize="sm" className="py-1.5!">
                Request a quote
            </Button>
        </nav>
    )
}