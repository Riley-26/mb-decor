import { Metadata } from "next"
import { } from "react"
import { ArrowRight, QuoteIcon, PaintBucket, FlaskConicalOff, EarOff, Focus, Paintbrush, Clock } from "lucide-react"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Navbar from "@/components/layout/Navbar"
import Link from "next/link"
import Video from "@/components/layout/Video"
import ProjectStack from "@/components/ui/ProjectStack"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
    title: "MB Decor",
    description: "Home page",
}

export default function Home() {
    return (
        <main className="min-h-screen relative bg-background-color text-light">
            <Navbar />

            {/* HERO */}
            <section id="hero" className="overflow-hidden md:mb-24 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center md:justify-center pt-6 md:pt-0 relative mx-4 xl:mx-0">
                <div className="text-center sm:text-left z-40 w-full h-150 sm:h-180 md:h-220 flex flex-col justify-center sm:justify-end 2xl:flex-row 2xl:items-end px-5 sm:px-8 sm:py-24 2xl:justify-center gap-8 sm:gap-16 2xl:gap-48 mx-8">
                    <h1 className="min-w-max text-shadow-lg sm:pl-4 mt-8 sm:mt-0"><span className="text-secondary-light font-oregano italic text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">Impeccable</span> Work,<br/> Zero <span className="text-secondary-light font-oregano italic text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">Disruption</span></h1>
                    <div className="mx-auto sm:mx-0 max-w-sm sm:max-w-xl z-50 flex flex-col gap-2 sm:gap-4 md:gap-6 items-center sm:items-start sm:px-4 relative">
                        <div className="flex flex-col gap-2">
                            <p>Immaculate painting services. Interior and exterior, domestic and commercial.</p>
                            <p>Contact us today for a free quote.</p>
                        </div>
                        <hr className="border-none bg-neutral-200/60 w-full h-0.5 my-4 max-w-64 sm:max-w-full" />
                        <div className="hidden sm:flex flex-col sm:flex-row gap-4 w-max" >
                            <Button size="lg" color="light" to="contact" roundSize="sm">
                                Request a Quote
                            </Button>
                            <Button size="lg" variant="outline" color="secondaryLight" to="/projects" roundSize="sm">
                                Projects
                            </Button>
                        </div>
                        <Link href="/testimonials" className="hidden sm:block text-lg mt-2 text-neutral-300 underline hover:text-neutral-400 transition-colors text-left">Trusted by homeowners and <br className="sm:hidden" />businesses alike.</Link>
                        <div className="flex flex-col sm:flex-row sm:hidden gap-2 sm:gap-4 w-max mx-auto sm:ml-0" >
                            <Button size="sm" color="light" to="contact" roundSize="sm" className="px-6!">
                                Request a Quote
                            </Button>
                            <Button size="sm" variant="outline" color="secondaryLight" to="/projects" roundSize="sm" className="px-6!">
                                Projects
                            </Button>
                            <Link href="/testimonials" className="text-base sm:text-lg mt-2 text-neutral-300 underline hover:text-neutral-400 transition-colors text-center sm:text-left">Trusted by homeowners and <br className="sm:hidden" />businesses alike.</Link>
                        </div>
                    </div>
                </div>

                <div className="absolute flex items-center justify-center gap-2 group brightness-30 sm:brightness-50 2xl:brightness-60 w-full sm:px-4 xl:px-8">
                    <Image alt="Hero image" fetchPriority="high" src="/assets/hero1-upscaled.jpg" width={1800} height={800} priority className="object-cover h-150 sm:h-180 md:h-200 rounded-4xl shadow-lg shadow-black/10" />
                </div>
            </section>

            {/* VALUE PROPOSITION */}
            <section id="value" className="overflow-hidden py-16 min-h-180 flex flex-col xl:flex-row items-center justify-center relative px-4 xl:px-0">
                <div className="z-40 container w-full grid grid-cols-2 xl:grid-cols-3 gap-4 mx-8">
                    {/* Body - mobile */}
                    <div className="col-span-2 relative flex xl:hidden h-max xl:h-108 w-full rounded-2xl bg-secondary-light px-4 py-6 sm:p-6 md:p-8 overflow-hidden">
                        <div className="flex flex-col gap-6 md:gap-8">
                            <h2 className="text-primary-mid xl:max-w-lg 2xl:max-w-xl shrink-0 z-45">Specialist painting services, with a focus on tidiness.</h2>
                            <p className="text-primary-mid max-w-3xl xl:max-w-md 2xl:max-w-lg z-45">Beautiful, premium results whilst causing no disruption. You wouldn't have even thought we were there.</p>
                            <Link href="/about" className="text-primary-mid text-base sm:text-lg underline hover:text-primary-light transition-colors duration-75 w-max">Learn more</Link>
                        </div>
                        <div className="hidden xl:block absolute -right-48 2xl:-right-32 -top-8">
                            <Image alt="Value proposition image" src="/assets/hero2.jpg" width={400} height={400} className="absolute right-0 object-cover h-124 w-124 rounded-full z-43 brightness-90" />
                            <div className="h-136 w-136 bg-secondary-mid/30 rounded-full z-42 inset-0 -translate-y-6" />
                        </div>
                    </div>
                    {/* Stats square */}
                    <div className="col-span-2 sm:col-span-1 relative overflow-hidden bg-secondary-dark w-full h-72 sm:h-84 xl:h-108 rounded-2xl p-6 xl:p-8 flex flex-col-reverse gap-4 lg:flex-row lg:items-end lg:justify-between xl:gap-8">
                        <div className="flex flex-col mb-4 z-50">
                            <span className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-secondary-mid">20+</span>
                            <p className="text-base lg:text-xl text-secondary-light">Years of experience</p>
                        </div>
                        <div className="flex flex-col mb-4 z-50">
                            <span className="text-4xl lg:text-5xl font-light text-secondary-mid mb-2">150+</span>
                            <p className="text-base lg:text-xl text-secondary-light">Projects completed</p>
                        </div>
                        <div className="block sm:hidden absolute -right-36 sm:-right-32 -top-4 md:-top-18">
                            <Image alt="Value proposition image" src="/assets/hero2.jpg" width={400} height={400} className="absolute right-0 object-cover h-84 md:h-124 w-84 md:w-124 rounded-full z-43 brightness-90" />
                            <div className="h-92 md:h-136 w-92 md:w-136 bg-secondary-mid/30 rounded-full z-42 inset-0 -translate-y-4 md:-translate-y-6" />
                        </div>
                    </div>
                    {/* Image - mobile */}
                    <div className="col-span-1 hidden sm:flex xl:hidden relative h-72 sm:h-84 xl:h-108 w-full rounded-2xl bg-secondary-light p-8 overflow-hidden">
                        <div className="absolute md:-right-48 lg:-right-32 -top-8 md:-top-18">
                            <Image alt="Value proposition image" src="/assets/hero2.jpg" width={400} height={400} className="absolute right-0 object-cover h-84 md:h-124 w-84 md:w-124 rounded-full z-43 brightness-90" />
                            <div className="h-96 md:h-136 w-96 md:w-136 bg-secondary-mid/30 rounded-full z-42 inset-0 -translate-y-4 md:-translate-y-6" />
                        </div>
                    </div>
                    {/* Body - desktop */}
                    <div className="col-span-2 relative hidden xl:flex h-84 xl:h-108 w-full rounded-2xl bg-secondary-light p-8 overflow-hidden">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-primary-mid xl:max-w-lg 2xl:max-w-xl shrink-0 z-45">Specialist painting services, with a focus on tidiness.</h2>
                            <p className="text-primary-mid max-w-3xl xl:max-w-md 2xl:max-w-lg z-45 text-2xl">Beautiful, premium results whilst causing no disruption. You wouldn't have even thought we were there.</p>
                            <Link href="/about" className="text-primary-mid text-lg underline hover:text-primary-light transition-colors duration-75 w-max">Learn more</Link>
                        </div>
                        <div className="hidden xl:block absolute -right-48 2xl:-right-32 -top-8">
                            <Image alt="Value proposition image" src="/assets/hero2.jpg" width={400} height={400} className="absolute right-0 object-cover h-124 w-124 rounded-full z-43 brightness-90" />
                            <div className="h-136 w-136 bg-secondary-mid/30 rounded-full z-42 inset-0 -translate-y-6" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SNAPSHOT */}
            <section id="services" className="overflow-hidden py-16 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 xl:px-0">
                <div className="z-40 max-w-3xl mx-8 container w-full text-center xl:text-left xl:max-w-7xl flex flex-col gap-12 items-center justify-center">
                    <h2 className="text-primary-mid max-w-6xl mr-auto">Flawless finishes with meticulous attention to detail.</h2>
                    <div className="max-w-xl md:max-w-2xl xl:max-w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 w-full text-dark">
                        <div className="flex flex-col items-center xl:items-start gap-4">
                            <div className="w-full max-w-64 lg:max-w-76 h-56 lg:h-68 bg-black/50 rounded-2xl" />
                            <div className="xl:ml-2 flex flex-col gap-2">
                                <h3>Interior painting</h3>
                                <p className="text-base md:text-lg max-w-66">We'll transform your space with a fresh coat of paint, leaving it looking brand new.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-4">
                            <div className="w-full max-w-64 lg:max-w-76 h-56 lg:h-68 bg-black/50 rounded-2xl" />
                            <div className="xl:ml-2 flex flex-col gap-2">
                                <h3>Exterior painting</h3>
                                <p className="text-base md:text-lg max-w-66">Restorative and protective treatments for your property.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-4">
                            <div className="w-full max-w-64 lg:max-w-76 h-56 lg:h-68 bg-black/50 rounded-2xl" />
                            <div className="xl:ml-2 flex flex-col gap-2">
                                <h3>Dustless sanding</h3>
                                <p className="text-base md:text-lg max-w-66">Creating no mess and no dust, whilst providing a perfect surface for painting.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center xl:items-start gap-4">
                            <div className="w-full max-w-64 lg:max-w-76 h-56 lg:h-68 bg-black/50 rounded-2xl" />
                            <div className="xl:ml-2 flex flex-col gap-2">
                                <h3>Wallpapering</h3>
                                <p className="text-base md:text-lg max-w-66">Seamless wallpaper application and removal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center xl:justify-start w-full gap-8">
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/services" roundSize="sm" className="w-max">
                            View all services
                        </Button>
                        <hr className="block xl:hidden w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                </div>
            </section>

            {/* WHY MB DECOR */}
            <section id="whymbdecor" className="overflow-hidden py-16 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 xl:px-0">
                <div className="z-40 max-w-2xl container w-full flex flex-col items-center justify-center gap-12 xl:max-w-6xl mx-8">
                    <div className="flex flex-col xl:grid xl:grid-cols-2 items-end gap-8 lg:gap-12">
                        <h2 className="text-primary-mid">Prestigious painting services in London and the South East.</h2>
                        <p className="text-primary-mid">
                            Clients trust us to deliver flawless results, with no disruption to their daily lives. We're proud to have built a reputation for high-quality, reliability and cleanliness.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 text-primary-dark">
                        <Video id="why-mb" src={"/assets/why-mb.mov"} className={"w-full object-cover rounded-2xl brightness-90 h-96 lg:h-142"} />
                        <ul className="flex flex-col xl:items-center justify-center gap-6 lg:gap-8 bg-secondary-light border-l-4 border-secondary-mid px-4 md:px-8 rounded-2xl py-8">
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <PaintBucket className="text-base" />
                                </div>
                                <p className="text-lg lg:text-xl">We only use the highest quality paints and materials.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <FlaskConicalOff className="text-base" />
                                </div>
                                <p className="text-lg lg:text-xl">No airborne dust, chemicals or debris. Better for your health and the environment.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <Paintbrush className="text-base" />
                                </div>
                                <p className="text-lg lg:text-xl">Our methods ensure that the paint lasts much longer and looks better.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <Focus className="text-base" />
                                </div>
                                <p className="text-lg lg:text-xl">Flawless accuracy and maximum attention to detail every time.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <EarOff className="text-base" />
                                </div>
                                <p className="text-lg lg:text-xl">Low noise levels and minimal disruption to your daily life.</p>
                            </li>
                            <li className="flex items-center gap-6">
                                <div className="min-w-12 min-h-12 bg-secondary-mid/30 rounded-full text-secondary-mid flex items-center justify-center">
                                    <Clock className="text-base" />
                                </div>
                                <p className="text-lg lg:text-xl">Over 20 years of experience - you are in safe hands.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section id="projects" className="overflow-hidden min-h-180 flex flex-col items-center justify-center relative py-24 mx-4 xl:mx-0">
                <div className="z-40 container w-full flex items-center justify-center px-4">
                    <div className="flex flex-col items-center w-full max-w-3xl xl:max-w-5xl mx-auto gap-2">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-6 sm:gap-0">
                            <h2 className="text-primary-mid text-center">View our prized projects.</h2>
                            <div className="flex items-center gap-2 mx-auto sm:mx-0">
                                <hr className="block sm:hidden border-none bg-secondary-mid/30 h-0.5 w-12" />
                                <Link
                                    href="/projects"
                                    className="nav-link flex items-center gap-2 text-lg text-secondary-mid relative w-max"
                                >
                                    View all <ArrowRight className="w-4 h-4 hidden sm:block" />
                                </Link>
                                <hr className="block sm:hidden border-none bg-secondary-mid/30 h-0.5 w-12" />
                            </div>
                        </div>
                        <ProjectStack />
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL SNIPPET */}
            <section id="about" className="overflow-hidden py-16 min-h-180 flex flex-col xl:flex-row items-center justify-center relative bg-secondary-light/40 px-4 xl:px-0">
                <div className="z-40 container w-full flex flex-col items-center justify-center max-w-5xl xl:max-w-6xl">
                    <h2 className="text-primary-mid text-center">Hear from some of our clients.</h2>
                    <hr className="border-none bg-neutral-300/50 w-full max-w-xs h-0.5 my-8" />
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 bg-secondary-light rounded-2xl mb-8 border-b-4 md:border-b-0 md:border-r-4 border-secondary-dark">
                        <div className="hidden md:flex flex-col items-end justify-end relative gap-2 bg-secondary-dark rounded-2xl p-4 min-w-64 2xl:min-w-72 h-48 xl:h-64 mx-2 lg:mx-0">
                            <QuoteIcon fill="currentColor" className="w-16 h-16 xl:w-24 xl:h-24 absolute top-4 right-4 text-secondary-mid opacity-20" />
                            <p className="text-secondary-mid text-2xl 2xl:text-3xl text-center font-medium">John Doe</p>
                            <p className="text-secondary-mid text-lg 2xl:text-xl text-center font-medium">London</p>
                        </div>
                        <p className="text-primary-mid max-w-4xl rounded-2xl m-8">
                            &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem dolores quas ipsa dolorum earum accusantium asperiores consectetur architecto omnis veritatis excepturi at cumque vel consequuntur, sunt quos, labore itaque consequatur.&quot;
                        </p>
                        <div className="flex flex-col md:hidden items-center justify-center mb-6">
                            <p className="text-secondary-mid text-2xl 2xl:text-3xl text-center font-medium">John Doe</p>
                            <p className="text-secondary-mid text-lg 2xl:text-xl text-center font-medium">London</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-full mx-auto gap-8">
                        <hr className="hidden xl:block w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/testimonials" roundSize="sm" className="w-max px-8!">
                            View all testimonials
                        </Button>
                        <hr className="hidden xl:block w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                    <div className="flex md:hidden items-center justify-center w-full mx-auto gap-8">
                        <hr className="block xl:hidden w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="sm" color="secondaryMid" to="/testimonials" roundSize="sm" className="w-max px-8!">
                            View all testimonials
                        </Button>
                        <hr className="block xl:hidden w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="about" className="overflow-hidden py-24 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative bg-secondary-light/70 px-4 xl:px-0">
                <div className="z-40 container w-full flex justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid mr-auto">Get in touch with us today.</h2>
                        <form className="flex flex-col gap-4 text-dark w-full max-w-4xl mr-auto">
                            <div className="flex flex-col md:flex-row w-full gap-4">
                                <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                                    <label className="text-lg md:text-xl ml-2">First Name <span className="text-red-500/50">*</span></label>
                                    <input required type="text" id="first-name" name="first-name" placeholder="John" className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                                    <label className="text-lg md:text-xl ml-2">Last Name <span className="text-red-500/50">*</span></label>
                                    <input required type="text" id="last-name" name="last-name" placeholder="Doe" className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                                <label className="text-lg md:text-xl ml-2">Email <span className="text-red-500/50">*</span></label>
                                <input required type="email" id="email" name="email" placeholder="john.doe@example.com" className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors" />
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                                <label className="text-lg md:text-xl ml-2">Message <span className="text-red-500/50">*</span></label>
                                <textarea required minLength={10} id="message" name="message" placeholder="Message" className="bg-secondary-mid/15 min-h-40 p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors" />
                            </div>
                            <Button size="md" color="secondaryMid" type="submit" roundSize="sm">
                                Send message
                            </Button>
                        </form>
                    </div>
                    <div className="hidden xl:block brightness-80 bg-secondary-dark rounded-2xl overflow-hidden max-h-172">
                        <Image src="/assets/hero2.jpg" alt="CTA" width={500} height={500} className="h-full object-cover z-20" />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
