import Navbar from "@/components/layout/Navbar"
import Button from "@/components/ui/Button"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, BrushCleaning, ChevronDown, ChevronRight, CornerDownLeft, Focus, Paintbrush, PaintBucket, PaintRoller, SearchCheck, UserCheck } from "lucide-react"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
    title: "About Us | MB Prestige Painting",
    description:
        "About MB Prestige Painting.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen relative bg-background-color text-primary-dark">
            <Navbar />
            <div className="fixed top-24 left-36 w-140 h-140 bg-secondary-light rounded-full opacity-40" />
            <div className="fixed hidden xl:block bottom-12 right-36 w-180 h-180 bg-secondary-light rounded-full opacity-80" />

            {/* HERO */}
            <section id="hero" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col gap-16 xl:gap-0 max-w-6xl xl:max-w-7xl relative text-center xl:text-left">
                    <div className="z-40">
                        <span className="font-semibold text-secondary-mid sm:ml-4">ABOUT US</span>
                        <h1 className="mt-2 xl:max-w-3xl">Experienced perfection painting.</h1>
                        <div className="flex flex-col gap-2 mt-6 sm:mt-8 xl:max-w-2xl rounded-2xl">
                            <p>Delivering high quality painting and decorating services for over 25 years.</p>
                            <p>Operating in London, Kent and the South East.</p>
                        </div>
                        <hr className="border-none bg-neutral-300/50 w-full max-w-xs lg:max-w-sm mx-auto xl:mx-0 h-0.5 my-6" />
                        <div className="hidden lg:flex flex-col gap-2 sm:gap-4 w-full max-w-sm mx-auto xl:ml-0" >
                            <Button size="lg" color="primaryDark" to="/contact" roundSize="sm" className="">
                                Request a Quote
                            </Button>
                            <Button size="lg" variant="outline" color="secondaryMid" to="/projects" roundSize="sm" className=" text-dark!">
                                Projects
                            </Button>
                        </div>
                        <div className="flex lg:hidden flex-col gap-2 sm:gap-4 w-full max-w-xs lg:max-w-sm mx-auto xl:ml-0" >
                            <Button size="sm" color="primaryDark" to="/contact" roundSize="sm" className="py-3 sm:py-4 mx-auto xl:mx-0 w-54 sm:w-64">
                                Request a Quote
                            </Button>
                            <Button size="sm" variant="outline" color="secondaryMid" to="/projects" roundSize="sm" className="py-3 sm:py-4 mx-auto xl:mx-0 w-54 sm:w-64 text-dark!">
                                Projects
                            </Button>
                        </div>
                    </div>
                    <div className="xl:absolute top-1/2 xl:-translate-y-1/2 right-0 group z-30 mx-auto xl:mx-0 w-full max-w-sm sm:max-w-lg lg:max-w-max">
                        <Image src="/assets/about-hero.jpg" alt="About Hero" width={700} height={700} className="object-cover rounded-4xl shadow-lg shadow-black/10 " />
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section id="story" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0 bg-background-color/80">
                <div className="z-40 container w-full flex flex-col justify-center gap-12 max-w-2xl lg:max-w-4xl xl:max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30 max-w-4xl">
                        <h2>How we've grown to be able to deliver perfect results.</h2>
                    </div>
                    <div className="grid grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-4 min-h-120 w-full">
                        <div className="col-span-2 md:col-span-1 row-span-1 bg-secondary-light rounded-2xl w-full overflow-hidden p-4 flex flex-col gap-4">
                            <h3>Practice</h3>
                            <p className="lg:text-xl">We have seen everything, and done it hundreds of times. Repetition breeds perfect painting.</p>
                        </div>
                        <div className="col-span-2 md:col-span-1 row-span-1 bg-secondary-light rounded-2xl w-full overflow-hidden p-4 flex flex-col gap-4">
                            <h3>Specialty</h3>
                            <p className="lg:text-xl">You do not want a jack of all trades. You need a specialist that can create premium paintwork.</p>
                        </div>
                        <div className="col-span-2 xl:col-span-1 row-span-2 bg-linear-to-br from-primary-dark to-primary-mid rounded-2xl w-full overflow-hidden p-4 relative flex flex-col gap-4">
                            <h3 className="text-secondary-light z-40">Feedback</h3>
                            <p className="lg:text-xl text-light/90">Through our clients feedback, we know exactly what works and what doesn't - what you need and what you don't.</p>
                            <p className="lg:text-xl text-light/90">Refinement over the years has led to a process that is as close to perfect as possible.</p>
                            <CornerDownLeft strokeWidth={1} className="hidden xl:block w-54 h-54 text-light opacity-50 absolute bottom-6 left-8" />
                        </div>
                        <div className="col-span-2 row-span-1 bg-secondary-light rounded-2xl w-full overflow-hidden relative">
                            <div className="z-40 p-4 flex flex-col gap-4">
                                <h3 className="text-secondary-light z-40">Results</h3>
                                <p className="lg:text-xl text-light z-40">Flawless finishes using the best materials and techniques.</p>
                                <p className="lg:text-xl text-light z-40">We are proud of every project we have completed. And as long as our clients are happy, we are happy.</p>
                            </div>
                            <Image src="/assets/about/about-hero.jpg" alt="Story 1" width={900} height={900} className="absolute top-0 left-0 object-cover rounded-2xl w-full h-full brightness-40 sepia-20 z-30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section id="approach" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col justify-center gap-12 max-w-8xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid mr-auto max-w-5xl text-center xl:text-left">A modern approach that always results in a flawless finish.</h2>
                    </div>
                    <div className="max-w-xl md:max-w-2xl xl:max-w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 w-full text-dark mx-auto">
                        <div className="flex flex-col items-center xl:items-start gap-4 w-full pb-12 p-4 lg:p-6 bg-primary-dark rounded-2xl text-secondary-light">
                            <div className="flex items-center justify-center bg-primary-mid/50 rounded-full p-2 border border-secondary-mid/40">
                                <BrushCleaning strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-secondary-light">01 - Preparation</h3>
                            <p className="text-base lg:text-lg text-center xl:text-start">We prepare the surface and the environment to make sure that we can work at our best, while keeping the mess to a minimum.</p>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-4 w-full pb-12 p-4 lg:p-6 bg-primary-dark rounded-2xl text-secondary-light">
                            <div className="flex items-center justify-center bg-primary-mid/50 rounded-full p-2 border border-secondary-mid/40">
                                <PaintRoller strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-secondary-light">02 - Application</h3>
                            <p className="text-base lg:text-lg text-center xl:text-start">We apply the paint optimally to look perfect whilst maximising its lifespan.</p>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-4 w-full pb-12 p-4 lg:p-6 bg-primary-dark rounded-2xl text-secondary-light">
                            <div className="flex items-center justify-center bg-primary-mid/50 rounded-full p-2 border border-secondary-mid/40">
                                <Paintbrush strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-secondary-light">03 - Finishing</h3>
                            <p className="text-base lg:text-lg text-center xl:text-start">After the paint is applied, we ensure that it is finished to a high standard and that you are happy with the result.</p>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-4 w-full pb-12 p-4 lg:p-6 bg-primary-dark rounded-2xl text-secondary-light">
                            <div className="flex items-center justify-center bg-primary-mid/50 rounded-full p-2 border border-secondary-mid/40">
                                <SearchCheck strokeWidth={1.5} className="w-8 h-8" />
                            </div>
                            <h3 className="text-secondary-light">04 - Inspection</h3>
                            <p className="text-base lg:text-lg text-center xl:text-start">Through touch-ups and your feedback, we achieve the perfect finish.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center xl:justify-start w-full gap-8">
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/contact" roundSize="sm" className="w-max inline-flex items-center justify-center gap-2">
                            Inquiries <ArrowRight className="w-4 h-4" />
                        </Button>
                        <hr className="block xl:hidden w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                </div>
            </section>

            {/* PROPERTY TYPES */}
            <section id="properties" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col items-center justify-center gap-16 max-w-7xl relative text-center">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid">Property types that we focus on.</h2>
                        <p>We have worked on both domestic and commercial projects across London and the South East, from single rooms to large-scale office and retail spaces.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-16">
                        <div className=" w-full md:w-1/2 max-w-sm md:max-w-lg">
                            <Image src="/assets/about/about-hero.jpg" alt="Domestic Work 1" width={600} height={600} className="object-cover rounded-2xl z-30" />
                        </div>
                        <div className="md:my-6 flex flex-col gap-12 w-full md:w-1/2 max-w-sm md:max-w-md">
                            <div className="flex items-center justify-between border-b-2 border-secondary-mid pb-2 md:pb-4">
                                <h3 className="lg:text-2xl">Domestic Work</h3>
                                <ChevronRight strokeWidth={1.5} className="w-6 h-6" />
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-secondary-mid pb-2 md:pb-4">
                                <h3 className="lg:text-2xl">Commercial Work</h3>
                                <ChevronRight strokeWidth={1.5} className="w-6 h-6" />
                            </div>
                            <div className="flex items-center justify-between border-b-2 border-secondary-mid pb-2 md:pb-4">
                                <h3 className="lg:text-2xl">Heritage Work</h3>
                                <ChevronRight strokeWidth={1.5} className="w-6 h-6" />
                            </div>
                            <Button size="md" color="primaryDark" to="/contact" roundSize="sm" className="w-max hidden md:block mx-auto lg:mx-0">
                                See Projects
                            </Button>
                            <Button size="sm" color="primaryDark" to="/contact" roundSize="sm" className="w-max block md:hidden mx-auto">
                                See Projects
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST */}
            <section id="trust" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col justify-center gap-16 max-w-3xl lg:max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30 text-center">
                        <h2 className="text-primary-mid">Trusted by homeowners and businesses to deliver a top-notch service.</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 lg:gap-6 max-w-72 lg:max-w-4xl mx-auto">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-center h-52 lg:h-64 bg-secondary-dark rounded-2xl border-b-6 border-secondary-mid">
                                <span className="text-5xl lg:text-6xl xl:text-7xl font-light text-secondary-light">25+</span>
                            </div>
                            <h3 className="text-center mt-4 max-w-48 mx-auto">Years of Experience</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-center h-52 lg:h-64 bg-secondary-dark rounded-2xl border-b-6 border-secondary-mid">
                                <Focus strokeWidth={1.5} className="w-20 h-20 text-secondary-light" />
                            </div>
                            <h3 className="text-center mt-4 max-w-48 mx-auto">Flawless Accuracy</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-center h-52 lg:h-64 bg-secondary-dark rounded-2xl border-b-6 border-secondary-mid">
                                <UserCheck strokeWidth={1.5} className="w-20 h-20 text-secondary-light" />
                            </div>
                            <h3 className="text-center mt-4 max-w-48 mx-auto">Satisfaction Guaranteed</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="overflow-hidden py-16 min-h-80 flex flex-col items-center justify-center relative bg-background-color/70 px-4 xl:px-0">
                <div className="z-40 container w-full flex flex-col items-center justify-center gap-10 max-w-3xl xl:max-w-4xl mx-8">
                    <h2 className="text-primary-mid text-center">Frequently asked questions</h2>
                    <hr className="border-none bg-neutral-300/50 w-full max-w-xs h-0.5" />
                    <ul className="flex flex-col w-full gap-6">
                        <li className="bg-secondary-light border-l-4 border-secondary-mid rounded-2xl px-6 py-5 flex flex-col gap-6">
                            <h3 className="text-primary-mid">How long does a typical painting job take?</h3>
                            <p className="text-base md:text-xl text-primary-mid/80">This depends on the size and scope of the project. A single room usually takes one to two days, while larger homes or commercial properties may take a week or more. We'll give you a clear timeline when we provide your free quote.</p>
                        </li>
                        <li className="bg-secondary-light border-l-4 border-secondary-mid rounded-2xl px-6 py-5 flex flex-col gap-6">
                            <h3 className="text-primary-mid">Do you offer free quotes?</h3>
                            <p className="text-base md:text-xl text-primary-mid/80">Yes - all quotes are completely free with no obligation. Simply get in touch and we'll arrange a convenient time to assess the work and provide a detailed estimate.</p>
                        </li>
                        <li className="bg-secondary-light border-l-4 border-secondary-mid rounded-2xl px-6 py-5 flex flex-col gap-6">
                            <h3 className="text-primary-mid">What paints and materials do you use?</h3>
                            <p className="text-base md:text-xl text-primary-mid/80">We only use high-quality paints from trusted brands, chosen for their durability, finish, and low environmental impact. We're happy to discuss specific product preferences or recommendations during your consultation.</p>
                        </li>
                        <li className="bg-secondary-light border-l-4 border-secondary-mid rounded-2xl px-6 py-5 flex flex-col gap-6">
                            <h3 className="text-primary-mid">Do you work on commercial properties as well as residential?</h3>
                            <p className="text-base md:text-xl text-primary-mid/80">Absolutely. We have extensive experience working on both domestic and commercial projects across London and the South East, from single rooms to large-scale office and retail spaces.</p>
                        </li>
                        <li className="bg-secondary-light border-l-4 border-secondary-mid rounded-2xl px-6 py-5 flex flex-col gap-6">
                            <h3 className="text-primary-mid">How do I prepare before you arrive?</h3>
                            <p className="text-base md:text-xl text-primary-mid/80">We handle the bulk of the preparation ourselves. If possible, clearing the room of smaller items and personal belongings is helpful, but we'll take care of furniture protection, surface preparation, and all the rest.</p>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center w-full gap-8 mt-2">
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/contact" roundSize="sm" className="w-max">
                            Contact us
                        </Button>
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}