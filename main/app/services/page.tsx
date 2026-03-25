import Navbar from "@/components/layout/Navbar"
import Button from "@/components/ui/Button"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Services | MB Prestige Painting",
    description:
        "Services MB Prestige Painting.",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen relative bg-background-color text-primary-dark">
            <Navbar />
            <div className="fixed top-24 left-36 w-140 h-140 bg-secondary-light rounded-full opacity-40" />
            <div className="fixed hidden xl:block bottom-12 right-36 w-180 h-180 bg-secondary-light rounded-full opacity-80" />

            {/* HERO */}
            <section id="hero" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h1 className="text-primary-mid mr-auto">Our Services</h1>
                    </div>
                </div>
            </section>

            {/* INTERIOR PAINTING */}
            <section id="interior" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid mr-auto">Interior Painting</h2>
                    </div>
                </div>
            </section>

            {/* EXTERIOR PAINTING */}
            <section id="exterior" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid mr-auto">Exterior Painting</h2>
                    </div>
                </div>
            </section>

            {/* WALLPAPERING */}
            <section id="wallpapering" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid mr-auto">Wallpapering</h2>
                    </div>
                </div>
            </section>

            {/* PROPERTY TYPES */}
            <section id="properties" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid mr-auto">Property Types</h2>
                    </div>
                </div>
            </section>
        </main>
    )
}