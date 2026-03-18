import { Metadata } from "next"
import { } from "react"
import { MapPin, Wrench, House } from "lucide-react"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import Link from "next/link"

export const metadata: Metadata = {
    title: "MB Decor",
    description: "Home page",
}

export default function Home() {
    return (
        <main className="min-h-screen relative bg-background-color text-light">
            <Navbar />

            {/* HERO */}
            <section id="hero" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 w-full h-180 sm:h-220 flex items-end p-24 justify-between mx-8">
                    <h1 className="max-w-4xl text-shadow-lg"><span className="text-secondary-light font-oregano italic text-9xl">Impeccable</span> Work, Zero <span className="text-secondary-light font-oregano italic text-9xl">Disruption</span></h1>
                    <div
                        className="max-w-xl z-50 flex flex-col gap-4 md:gap-6 items-start px-4 relative"
                    >
                        <p>Perfection-painting services. Interior and exterior, domestic and commercial.</p>
                        <p>Contact us today for a free quote.</p>
                        <hr className="border-none bg-neutral-200/60 w-full h-0.5" />
                        <div className="hidden sm:flex flex-col sm:flex-row gap-4 w-max" >
                            <Button size="lg" color="light" to="contact" roundSize="sm">
                                Request a quote
                            </Button>
                            <Button size="lg" variant="outline" color="secondaryLight" to="/projects" roundSize="sm">
                                Projects
                            </Button>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:hidden gap-2 sm:gap-4 w-max" >
                            <Button size="sm" color="secondaryLight" to="contact">
                                Contact
                            </Button>
                            <Button size="sm" variant="outline" color="secondaryLight" to="/projects">
                                Projects
                            </Button>   
                        </div>
                        <Link href="/testimonials" className="text-lg text-neutral-300 underline hover:text-neutral-400 transition-colors">Trusted by homeowners and businesses alike.</Link>
                    </div>
                </div>

                <div className="absolute flex items-center justify-center gap-2 group brightness-60 w-full px-8">
                    <Image alt="Hero image" fetchPriority="high" src="/assets/hero1.jpg" width={1800} height={800} priority className="object-cover h-200 rounded-4xl shadow-lg shadow-black/10" />
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section id="about" className="overflow-hidden min-h-180 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 container w-full flex items-center justify-between gap-4">
                    <div className="bg-secondary-dark w-1/3 h-108 rounded-2xl p-8 flex items-end justify-between">
                        <div className="flex flex-col mb-4">
                            <span className="text-8xl font-extralight text-secondary-mid">20+</span>
                            <p className="text-xl text-secondary-light">Years of experience</p>
                        </div>
                        <div className="flex flex-col mb-4">
                            <span className="text-5xl font-light text-secondary-mid mb-2">150+</span>
                            <p className="text-xl text-secondary-light">Projects completed</p>
                        </div>
                    </div>
                    <div className="relative flex h-108 w-2/3 rounded-2xl bg-secondary-light p-8 overflow-hidden">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-primary-mid max-w-xl shrink-0 z-45">Specialist painting services, with a focus on tidiness.</h2>
                            <p className="text-primary-mid max-w-lg z-45 text-2xl">You wouldn't have even thought we were there. Beautiful, premium results while causing no disruption.</p>
                            <Link href="/about" className="text-primary-mid text-lg underline hover:text-primary-light transition-colors duration-75 w-max">Learn more</Link>
                        </div>
                        <div className="absolute -right-32 -top-8">
                            <Image alt="Value proposition image" src="/assets/hero2.jpg" width={400} height={400} className="absolute right-0 object-cover h-124 w-124 rounded-full z-43 brightness-90" />
                            <div className="h-136 w-136 bg-secondary-mid/30 rounded-full z-42 inset-0 -translate-y-6" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SNAPSHOT */}
            <section id="about" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 container w-full flex items-center justify-center">
                    <h2 className="text-primary-mid max-w-6xl">From small domestic projects to large commercial ones, we've got you covered.</h2>
                </div>
            </section>

            {/* WHY MB DECOR */}
            <section id="about" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 container w-full flex items-center justify-center bg-neutral-200/40">
                    <h2 className="text-primary-mid">WHY MB DECOR</h2>
                </div>
            </section>

            {/* FEATURED */}
            <section id="about" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 container w-full flex items-center justify-center bg-neutral-200/40">
                    <h2 className="text-primary-mid">FEATURED</h2>
                </div>
            </section>

            {/* TESTIMONIAL SNIPPET */}
            <section id="about" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 container w-full flex items-center justify-center bg-neutral-200/40">
                    <h2 className="text-primary-mid">TESTIMONIAL SNIPPET</h2>
                </div>
            </section>

            {/* CTA */}
            <section id="about" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative">
                <div className="z-40 container w-full flex items-center justify-center bg-neutral-200/40">
                    <h2 className="text-primary-mid">CTA</h2>
                </div>
            </section>
        </main>
    )
}
