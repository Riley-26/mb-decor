import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Metadata } from "next"
import Button from "@/components/ui/Button"
import { Facebook, Link, Mail } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact Us | MB Prestige Painting",
    description: "Contact MB Prestige Painting.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen relative bg-background-color text-primary-dark">
            <Navbar />
            <div className="fixed top-24 left-36 w-140 h-140 border-4 border-secondary-light rounded-full opacity-20" />
            <div className="fixed hidden xl:block bottom-12 right-36 w-180 h-180 border-4 border-secondary-light rounded-full opacity-60" />

            {/* FORM */}
            <section
                id="form"
                className="overflow-hidden py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 xl:px-0"
            >
                <div className="z-40 container w-full flex flex-col items-center justify-center gap-12 max-w-7xl relative">
                    <h1 className="text-primary-mid mx-auto">
                        Get in touch with us today.
                    </h1>
                    <form className="flex flex-col gap-4 text-dark w-full max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row w-full gap-4">
                            <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                                <label className="text-lg md:text-xl ml-2">
                                    First Name{" "}
                                    <span className="text-red-500/50">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    placeholder="John"
                                    className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                                <label className="text-lg md:text-xl ml-2">
                                    Last Name{" "}
                                    <span className="text-red-500/50">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Doe"
                                    className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                            <label className="text-lg md:text-xl ml-2">
                                Email <span className="text-red-500/50">*</span>
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john.doe@example.com"
                                className="bg-secondary-mid/15 px-4 py-3 md:p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4 p-4 border border-secondary-mid/30 rounded-lg w-full">
                            <label className="text-lg md:text-xl ml-2">
                                Message{" "}
                                <span className="text-red-500/50">*</span>
                            </label>
                            <textarea
                                required
                                minLength={10}
                                id="message"
                                name="message"
                                placeholder="Message"
                                className="bg-secondary-mid/15 min-h-40 p-4 rounded-xl focus:outline-none focus:bg-secondary-mid/30 transition-colors"
                            />
                        </div>
                        <Button
                            size="md"
                            color="secondaryMid"
                            type="submit"
                            roundSize="sm"
                        >
                            Send message
                        </Button>
                    </form>
                </div>
            </section>

            {/* INFO + SOCIALS */}
            <section
                id="info"
                className="overflow-hidden py-32 min-h-180 flex flex-col xl:flex-row items-center justify-center relative bg-secondary-light/70 px-4 xl:px-0"
            >
                <div className="z-40 container w-full flex flex-col items-start justify-center gap-8 xl:gap-12 max-w-5xl relative text-primary-mid">
                    <h2 className="mx-auto">Contact information</h2>
                    <hr className="border-none bg-neutral-300/50 w-full max-w-lg xl:max-w-full mx-auto xl:mx-0 h-0.5" />
                    <div className="flex flex-col xl:flex-row text-center xl:text-start items-center justify-between gap-6 w-full">
                        <div className="flex flex-col gap-6">
                            <span className="text-secondary-mid text-2xl xl:text-3xl font-medium">
                                Mark Banks
                            </span>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-secondary-mid text-2xl">
                                            Email
                                        </h3>
                                        <p className="lg:text-xl font-medium">
                                            mark.mbdecor@gmail.com
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-secondary-mid text-2xl">
                                            Phone
                                        </h3>
                                        <p className="lg:text-xl font-medium">
                                            07595 375215
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center xl:justify-start items-center gap-4 mb-8 xl:mb-0">
                                <a
                                    href="/"
                                    className="rounded-xl bg-secondary-mid/50 h-max w-max group hover:bg-secondary-mid/80 active:scale-90 transition-all p-4"
                                >
                                    <Facebook
                                        strokeWidth={1}
                                        className="w-8 h-8 group text-secondary-dark"
                                    />
                                </a>
                                <a
                                    href="mailto:mark.mbdecor@gmail.com"
                                    aria-label="Link to Email"
                                    target="_blank"
                                    className="rounded-xl bg-secondary-mid/50 h-max w-max group hover:bg-secondary-mid/80 active:scale-90 transition-all p-4"
                                >
                                    <Mail 
                                        strokeWidth={1}
                                        className="w-8 h-8 group text-secondary-dark"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 w-full xl:w-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d159215.2987016968!2d0.2875190189163771!3d51.42622016512536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1774441086566!5m2!1sen!2suk"
                                width="600"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-2xl overflow-hidden shadow-xl grayscale-50 brightness-90 mx-auto w-full md:w-[600px]"
                            ></iframe>
                        </div>
                    </div>
                    <p className="mx-auto mt-4 text-center">Operating in London, Kent and the South East.</p>
                    <hr className="border-none bg-neutral-300/50 w-full mx-auto xl:mx-0 h-0.5" />
                </div>
            </section>

            <Footer />
        </main>
    )
}
