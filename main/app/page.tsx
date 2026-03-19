import { Metadata } from "next"
import { } from "react"
import { MapPin, Wrench, House, CheckIcon } from "lucide-react"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import Link from "next/link"
import Video from "@/components/layout/Video"

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
                <div className="z-40 w-full h-180 sm:h-220 flex items-end p-24 justify-center gap-48 mx-8">
                    <h1 className="max-w-4xl text-shadow-lg"><span className="text-secondary-light font-oregano italic text-9xl">Impeccable</span> Work, Zero <span className="text-secondary-light font-oregano italic text-9xl">Disruption</span></h1>
                    <div className="max-w-xl z-50 flex flex-col gap-4 md:gap-6 items-start px-4 relative">
                        <p>Immaculate painting services. Interior and exterior, domestic and commercial.</p>
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
                    <Image alt="Hero image" fetchPriority="high" src="/assets/hero1-upscaled.jpg" width={1800} height={800} priority className="object-cover h-200 rounded-4xl shadow-lg shadow-black/10" />
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
                <div className="z-40 container w-full max-w-7xl flex flex-col gap-12 items-center justify-center">
                    <h2 className="text-primary-mid max-w-6xl mr-auto">Flawless finishes with meticulous attention to detail.</h2>
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 w-full text-dark">
                        <div className="flex flex-col gap-4">
                            <div className="w-76 h-68 bg-black/50 rounded-2xl" />
                            <div className="ml-2 flex flex-col gap-2">
                                <h3>Interior painting</h3>
                                <p className="text-lg! max-w-66">We'll transform your space with a fresh coat of paint, leaving it looking brand new.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-76 h-68 bg-black/50 rounded-2xl" />
                            <div className="ml-2 flex flex-col gap-2">
                                <h3>Exterior painting</h3>
                                <p className="text-lg! max-w-66">Restorative and protective treatments for your property.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-76 h-68 bg-black/50 rounded-2xl" />
                            <div className="ml-2 flex flex-col gap-2">
                                <h3>Dustless sanding</h3>
                                <p className="text-lg! max-w-66">Creating no mess and no dust, whilst providing a perfect surface for painting.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="w-76 h-68 bg-black/50 rounded-2xl" />
                            <div className="ml-2 flex flex-col gap-2">
                                <h3>Wallpapering</h3>
                                <p className="text-lg! max-w-66">Seamless wallpaper application and removal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center w-full gap-8">
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/services" roundSize="sm" className="w-max">
                            View all services
                        </Button>
                    </div>
                </div>
            </section>

            {/* WHY MB DECOR */}
            <section id="about" className="overflow-hidden min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative mt-16">
                <div className="z-40 container w-full flex flex-col items-center justify-center gap-12 max-w-6xl">
                    <div className="grid grid-cols-2 items-end gap-12">
                        <h2 className="text-primary-mid">Prestigious painting services in London and the South East</h2>
                        <p className="text-primary-mid text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nulla eius maxime magni sunt labore eligendi consequatur itaque quos voluptatibus.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-12 text-primary-dark">
                        <Video id="why-mb" src={"/assets/why-mb.mov"} className={"w-full aspect-square object-cover rounded-2xl brightness-90"} />
                        <ul className="flex flex-col items-center justify-center gap-8 bg-secondary-light px-8 rounded-2xl">
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <CheckIcon className="text-base" />
                                </div>
                                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <CheckIcon className="text-base" />
                                </div>
                                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <CheckIcon className="text-base" />
                                </div>
                                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <CheckIcon className="text-base" />
                                </div>
                                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <CheckIcon className="text-base" />
                                </div>
                                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <CheckIcon className="text-base" />
                                </div>
                                <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </li>
                        </ul>
                    </div>
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
