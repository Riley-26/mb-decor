"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface AccordionItemProps {
    name: string
    children: React.ReactNode
}

export default function AccordionItem({ name, children }: AccordionItemProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col border-b-2 border-secondary-mid pb-2 md:pb-4">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex justify-between items-center w-full pb-2 cursor-pointer"
            >
                <h3 className="lg:text-2xl">{name}</h3>
                <ChevronDown
                    strokeWidth={1.5}
                    className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="text-lg text-start pt-1">{children}</div>
            </div>
        </div>
    )
}
