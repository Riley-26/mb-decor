import Navbar from "@/components/layout/Navbar"
import Button from "@/components/ui/Button"
import Reveal from "@/components/ui/Reveal"
import { Metadata } from "next"
import Image from "next/image"
import Footer from "@/components/layout/Footer"

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
                <div className="z-40 container w-full flex flex-col items-center text-center justify-center gap-0 max-w-7xl relative">
                    <span className="font-semibold text-secondary-mid mb-2">SERVICES</span>
                    <Reveal>
                        <h1>Top-grade Painting Services</h1>
                    </Reveal>
                    <Reveal delay={0.2} className="flex flex-col gap-2 mt-4 sm:mt-6 xl:max-w-2xl rounded-2xl">
                        <p>Maximum quality paintwork using our elite skillset and services.</p>
                    </Reveal>
                    <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-10 md:mt-16 xl:mt-8">
                        <Reveal delay={0.2} className="overflow-hidden rounded-2xl max-w-72 -translate-y-4">
                            <Image alt="Services - Image 1" src="/assets/services/hero3-split1.jpg" width={500} height={500} className="object-cover h-80 lg:h-120" />
                        </Reveal>
                        <Reveal delay={0.3} className="overflow-hidden rounded-2xl max-w-72 translate-y-6">
                            <Image alt="Services - Image 1" src="/assets/services/hero3-split2.jpg" width={500} height={500} className="object-cover h-80 lg:h-120" />
                        </Reveal>
                        <Reveal delay={0.4} className="overflow-hidden rounded-2xl max-w-72">
                            <Image alt="Services - Image 1" src="/assets/services/hero3-split3.jpg" width={500} height={500} className="object-cover h-80 lg:h-120" />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* INTERIOR PAINTING */}
            <section id="interior" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col justify-center gap-12 max-w-7xl relative">
                    <Reveal className="flex flex-col xl:flex-row items-center xl:items-end gap-6 xl:gap-10 z-30">
                        <h2 className="text-primary-mid xl:mr-auto max-w-3xl text-center xl:text-left">Perfect Interior Painting, so you can take pride in your home.</h2>
                        <p className="text-center xl:text-left">Our methods keep paint lasting longer and looking better. From kitchens to bedrooms, touch-ups to full repaints.</p>
                    </Reveal>
                    <div className="max-w-3xl xl:max-w-none mx-auto xl:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-2">
                        <Reveal delay={0.1} className="col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden max-h-108">
                            <Image alt="Interior paintwork image" src="/assets/services/hero2.jpg" width={800} height={800} className="object-cover brightness-80"/>
                        </Reveal>
                        <Reveal delay={0.2} className="col-span-1 row-span-1 bg-primary-dark rounded-2xl text-light overflow-hidden flex flex-col gap-3 items-start p-4">
                            <h3 className="xl:text-2xl text-secondary-light">Preparation</h3>
                            <p className="text-base font-light">We utilise dustless sanding to create perfectly smooth surfaces. Less debris and dust, a much more suitable environment for painting.</p>
                        </Reveal>
                        <Reveal delay={0.3} className="col-span-1 row-span-1 bg-primary-dark rounded-2xl text-light overflow-hidden flex flex-col gap-3 items-start p-4">
                            <h3 className="xl:text-2xl text-secondary-light">Paint Types</h3>
                            <p className="text-base font-light">We aim to use premium paints to ensure durability. Water-based where we can, but oil-based when necessary.</p>
                        </Reveal>
                        <Reveal delay={0.4} className="col-span-1 row-span-1 bg-primary-dark rounded-2xl text-light overflow-hidden flex flex-col gap-3 items-start p-4">
                            <h3 className="xl:text-2xl text-secondary-light">Surface Materials</h3>
                            <p className="text-base font-light">Masonry, plasterboard, and timber are the most typical surfaces we paint. Inquire about other materials if you're unsure.</p>
                        </Reveal>
                        <Reveal delay={0.5} className="col-span-1 row-span-1 bg-primary-dark rounded-2xl text-light overflow-hidden flex flex-col gap-3 items-start p-4">
                            <h3 className="xl:text-2xl text-secondary-light">Room Types</h3>
                            <p className="text-base font-light">Paint types vary depending on the room. As an example, bathrooms would benefit from a mould resistant paint.</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* EXTERIOR PAINTING */}
            <section id="exterior" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col justify-center gap-16 max-w-4xl xl:max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30 text-center xl:text-left">
                        <h2 className="text-primary-mid mr-auto">Exterior paintwork to make your neighbours jealous.</h2>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-8 max-w-3xl xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left">
                        <ul className="flex flex-col gap-4 xl:w-1/2">
                            <li>
                                <Reveal from="left" delay={0.1} className="flex flex-col gap-4">
                                    <h3>Preparation</h3>
                                    <p className="text-lg">Exterior paintwork needs to prepared to withstand the elements. Surfaces require a thorough clean and repairs to make it suitable for painting.</p>
                                </Reveal>
                            </li>
                            <hr className="border-none bg-neutral-300/50 w-full mx-auto xl:mx-0 h-0.5" />
                            <li>
                                <Reveal from="left" delay={0.2} className="flex flex-col gap-4">
                                    <h3>Masonry</h3>
                                    <p className="text-lg">Specialised masonry paints help to create that premium aesthetic that you see on high-end properties. And we can help you look the part.</p>
                                </Reveal>
                            </li>
                            <hr className="border-none bg-neutral-300/50 w-full mx-auto xl:mx-0 h-0.5" />
                            <li>
                                <Reveal from="left" delay={0.3} className="flex flex-col gap-4">
                                    <h3>Heritage Work</h3>
                                    <p className="text-lg">We have a wealth of experience in painting heritage properties. We understand the importance of preserving the original features of these buildings.</p>
                                </Reveal>
                            </li>
                        </ul>
                        <div className="xl:w-1/2 overflow-hidden mx-auto xl:mx-0">
                            <Image src="/assets/services/exterior.jpg" alt="Exterior paintwork image" width={600} height={600} className="object-cover brightness-80 rounded-2xl max-h-72 sm:max-h-108" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center xl:justify-start w-full gap-8">
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/contact" roundSize="sm" className="w-max inline-flex items-center justify-center gap-2">
                            Get a free quote
                        </Button>
                        <hr className="block xl:hidden w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                </div>
            </section>

            {/* WALLPAPERING */}
            <section id="wallpapering" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid text-center">Wallpapering - what's best for your property?</h2>
                        <p>We offer a range of wallpaper types to suit your property. From all-paper to vinyl, see below for more information.</p>
                    </div>
                    <div className="w-full overflow-x-auto rounded-2xl border border-neutral-300/30">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-primary-dark text-secondary-light">
                                    <th className="text-left px-4 py-3 font-semibold border-b border-neutral-600 min-w-36">Feature</th>
                                    <th className="text-left px-4 py-3 font-semibold border-b border-neutral-600 min-w-36">Paper</th>
                                    <th className="text-left px-4 py-3 font-semibold border-b border-neutral-600 min-w-36">Vinyl Coated</th>
                                    <th className="text-left px-4 py-3 font-semibold border-b border-neutral-600 min-w-36">Coated Fabric</th>
                                    <th className="text-left px-4 py-3 font-semibold border-b border-neutral-600 min-w-36">Solid Vinyl</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        feature: "Base Material",
                                        paper: "Paper", vinylCoated: "Paper", coatedFabric: "Fabric", solidVinyl: "Fabric",
                                    },
                                    {
                                        feature: "Coating",
                                        paper: "None", vinylCoated: "Acrylic vinyl or PVC", coatedFabric: "Fabric coating", solidVinyl: "Solid vinyl",
                                    },
                                    {
                                        feature: "Design Location",
                                        paper: "On paper", vinylCoated: "On coating", coatedFabric: "On coating", solidVinyl: "On vinyl",
                                    },
                                    {
                                        feature: "Water Resistance",
                                        paper: <span className="flex items-center gap-1.5"><span className="text-red-400">✕</span> None</span>,
                                        vinylCoated: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Good</span>,
                                        coatedFabric: <span className="flex items-center gap-1.5"><span className="text-red-400">✕</span> Poor</span>,
                                        solidVinyl: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Excellent</span>,
                                    },
                                    {
                                        feature: "Durability",
                                        paper: <span className="flex items-center gap-1.5"><span className="text-yellow-400">★</span> Very Low</span>,
                                        vinylCoated: <span className="flex items-center gap-1.5"><span className="text-yellow-400">★★</span> Moderate</span>,
                                        coatedFabric: <span className="flex items-center gap-1.5"><span className="text-yellow-400">★★</span> Moderate</span>,
                                        solidVinyl: <span className="flex items-center gap-1.5"><span className="text-yellow-400">★★★★</span> Very High</span>,
                                    },
                                    {
                                        feature: "Ease of Cleaning",
                                        paper: <span className="flex items-center gap-1.5"><span className="text-red-400">✕</span> Cannot wet clean</span>,
                                        vinylCoated: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Wipe clean</span>,
                                        coatedFabric: <span className="flex items-center gap-1.5"><span className="text-yellow-400">⚠</span> Limited</span>,
                                        solidVinyl: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Scrubbable</span>,
                                    },
                                    {
                                        feature: "Humidity Tolerance",
                                        paper: <span className="flex items-center gap-1.5"><span className="text-red-400">✕</span> No</span>,
                                        vinylCoated: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Yes</span>,
                                        coatedFabric: <span className="flex items-center gap-1.5"><span className="text-red-400">✕</span> No</span>,
                                        solidVinyl: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Yes</span>,
                                    },
                                    {
                                        feature: "Best Rooms",
                                        paper: "Low-traffic / dry rooms", vinylCoated: "Bathrooms, kitchens", coatedFabric: "Living rooms, dining areas", solidVinyl: "High-traffic rooms, children's rooms",
                                    },
                                    {
                                        feature: "Avoid In",
                                        paper: "High-traffic, moist rooms", vinylCoated: "N/A", coatedFabric: "Humid rooms", solidVinyl: "N/A",
                                    },
                                    {
                                        feature: "Cost (approx.)",
                                        paper: <span className="flex items-center gap-1.5"><span className="text-green-400">$</span> Lowest</span>,
                                        vinylCoated: <span className="flex items-center gap-1.5"><span className="text-green-400">$$</span> Budget-friendly</span>,
                                        coatedFabric: <span className="flex items-center gap-1.5"><span className="text-green-400">$$$</span> Mid-range</span>,
                                        solidVinyl: <span className="flex items-center gap-1.5"><span className="text-green-400">$$$$</span> Most expensive</span>,
                                    },
                                    {
                                        feature: "Eco-Friendliness",
                                        paper: <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Most eco-friendly</span>,
                                        vinylCoated: <span className="flex items-center gap-1.5"><span className="text-yellow-400">⚠</span> Moderate</span>,
                                        coatedFabric: <span className="flex items-center gap-1.5"><span className="text-yellow-400">⚠</span> Moderate</span>,
                                        solidVinyl: <span className="flex items-center gap-1.5"><span className="text-red-400">✕</span> Least eco-friendly</span>,
                                    },
                                    {
                                        feature: "Common In",
                                        paper: "Older homes", vinylCoated: "Modern homes", coatedFabric: "Formal spaces", solidVinyl: "Commercial / family homes",
                                    },
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-background-color" : "bg-secondary-light/70"}>
                                        <td className="px-4 py-3 font-semibold border-b border-neutral-300/20 text-primary-dark">{row.feature}</td>
                                        <td className="px-4 py-3 border-b border-neutral-300/20 text-primary-dark/80">{row.paper}</td>
                                        <td className="px-4 py-3 border-b border-neutral-300/20 text-primary-dark/80">{row.vinylCoated}</td>
                                        <td className="px-4 py-3 border-b border-neutral-300/20 text-primary-dark/80">{row.coatedFabric}</td>
                                        <td className="px-4 py-3 border-b border-neutral-300/20 text-primary-dark/80">{row.solidVinyl}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* PROPERTY TYPES */}
            <section id="properties" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col justify-center gap-8 lg:gap-16 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid text-center">Property types that we work on.</h2>
                    </div>
                    <hr className="border-none bg-neutral-300/50 w-full mx-auto max-w-3xl h-0.5" />
                    <div className="flex flex-col gap-8 lg:gap-12 max-w-6xl mx-auto">
                        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-between">
                            <div className="w-full max-w-108 xl:w-1/2 flex flex-col gap-4 text-center xl:text-left">
                                <h3>Domestic</h3>
                                <p>Makes up the bulk of our portfolio. We work on any domestic property type, transforming your space using premium materials and techniques.</p>
                                <ul className="mx-auto xl:mx-0">
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Houses</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Flats</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Residencies</span>
                                    </li>
                                    <li className="flex items-center justify-center xl:justify-start gap-2 text-lg opacity-80">
                                        <span>...</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full max-w-108 xl:w-1/2 overflow-hidden flex xl:items-end xl:justify-end">
                                <Image src="/assets/services/domestic.jpg" alt="Property type image" width={500} height={500} className="object-cover brightness-80 rounded-2xl max-h-84" />
                            </div>
                        </div>
                        <hr className="border-none bg-neutral-300/50 w-full mx-auto max-w-3xl h-0.5" />
                        <div className="flex flex-col xl:flex-row-reverse gap-8 xl:gap-16 items-center justify-between">
                            <div className="w-full max-w-108 xl:w-1/2 flex flex-col gap-4 text-center xl:text-left">
                                <h3>Commercial</h3>
                                <p>High-traffic commercial areas need a high-level, durable finish whilst making sure that the property is safe to work in.</p>
                                <ul className="mx-auto xl:mx-0">
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Offices</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Hospitals</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Restaurants</span>
                                    </li>
                                    <li className="flex items-center justify-center xl:justify-start gap-2 text-lg opacity-80">
                                        <span>...</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full max-w-108 xl:w-1/2 overflow-hidden flex xl:items-end xl:justify-end">
                                <Image src="/assets/services/commercial.jpg" alt="Property type image" width={500} height={500} className="object-cover brightness-80 rounded-2xl max-h-84" />
                            </div>
                        </div>
                        <hr className="border-none bg-neutral-300/50 w-full mx-auto max-w-3xl h-0.5" />
                        <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center justify-between">
                            <div className="w-full max-w-108 xl:w-1/2 flex flex-col gap-4 text-center xl:text-left">
                                <h3>Heritage</h3>
                                <p>Listed properties are complex, requiring different approaches to painting and conservation. We tailor our approach to meet the specific needs of protected buildings.</p>
                                <ul className="mx-auto xl:mx-0">
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Grade I or II</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Listed Buildings</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-lg opacity-80">
                                        <span>✓</span>
                                        <span>Mansion Houses</span>
                                    </li>
                                    <li className="flex items-center justify-center xl:justify-start gap-2 text-lg opacity-80">
                                        <span>...</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full max-w-108 xl:w-1/2 overflow-hidden flex xl:items-end xl:justify-end">
                                <Image src="/assets/services/heritage.jpg" alt="Property type image" width={500} height={500} className="object-cover brightness-80 rounded-2xl max-h-84" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full gap-8">
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                        <Button size="md" color="secondaryMid" to="/contact" roundSize="sm" className="w-max inline-flex items-center justify-center gap-2">
                            Get a free quote
                        </Button>
                        <hr className="w-full max-w-24 border-none bg-secondary-mid/30 h-0.5" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}