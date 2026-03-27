import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Metadata } from "next"
import Image from "next/image"
import { CheckIcon, Facebook } from "lucide-react"
import React from "react"

export const metadata: Metadata = {
    title: "Projects | MB Prestige Painting",
    description:
        "Projects MB Prestige Painting.",
}

const mainProjects = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tenetur vitae id est hic sed voluptatibus sint, labore odit. Debitis.",
        image: "/assets/about/about-hero.jpg",
        features: [
            {
                icon: <CheckIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Lorem ipsum dolor sit amet.",
            },
            {
                icon: <CheckIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Lorem ipsum dolor sit amet.",
            },
            {
                icon: <CheckIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Lorem ipsum dolor sit amet.",
            },
        ]
    },
    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum tenetur vitae id est hic sed voluptatibus sint, labore odit. Debitis.",
        image: "/assets/about/about-hero.jpg",
        features: [
            {
                icon: <CheckIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Lorem ipsum dolor sit amet.",
            },
            {
                icon: <CheckIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Lorem ipsum dolor sit amet.",
            },
            {
                icon: <CheckIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Lorem ipsum dolor sit amet.",
            },
        ]
    },
]

const miscProjects = [
    {
        id: 1,
        title: "Project 1",
        image: "/assets/about/about-hero.jpg",
    },
    {
        id: 1,
        title: "Project 2",
        image: "/assets/about/about-hero.jpg",
    },
]

export default function ProjectsPage() {
    return (
        <main className="min-h-screen relative bg-background-color text-primary-dark">
            <Navbar />
            <div className="fixed top-24 left-36 w-140 h-140 border-4 border-secondary-light rounded-full opacity-30" />
            <div className="fixed hidden xl:block bottom-12 right-36 w-180 h-180 border-4 border-secondary-light rounded-full opacity-70" />
            
            {/* MAIN PROJECTS */}
            <section id="main-projects" className="pt-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col items-center justify-center gap-12 max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30 my-8 lg:my-16">
                        <h1 className="text-primary-mid mr-auto">Main Projects</h1>
                    </div>
                    <ul className="flex flex-col gap-32">
                        {
                            mainProjects.map((project) => (
                                <li key={project.title} className="flex flex-col-reverse lg:flex-row justify-center items-center w-full max-w-xl lg:max-w-full gap-6 lg:gap-16 bg-secondary-light border-l-6 border-secondary-dark rounded-2xl px-4 lg:px-8 py-6 lg:py-4 xl:py-8 shadow-xl">
                                    <div className="lg:w-1/2 flex flex-col gap-4 xl:gap-8">
                                        <span className="text-secondary-mid text-lg lg:text-xl xl:text-2xl font-medium">0{project.id}</span>
                                        <h2 className="text-2xl md:text-3xl xl:text-4xl">{project.title}</h2>
                                        <p className="text-lg md:text-xl">{project.description}</p>
                                        <ul className="flex flex-col gap-4 mt-2">
                                            {
                                                project.features.map((feature, index) => (
                                                    <React.Fragment key={index}>
                                                        <li className="flex items-center gap-2">
                                                            <span className="flex items-center gap-2 text-base lg:text-lg xl:text-lg">
                                                                {feature.icon}
                                                                {feature.label}
                                                            </span>
                                                        </li>
                                                        {index !== project.features.length - 1 && <hr className="border-none bg-secondary-mid/30 h-0.5" />}
                                                    </React.Fragment>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <Image src="/assets/about/about-hero.jpg" alt="Domestic Work 1" width={600} height={600} className="object-cover rounded-2xl z-30" />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* MISC PROJECTS */}
            <section id="misc-projects" className="py-32 min-h-180 sm:min-h-220 flex flex-col xl:flex-row items-center justify-center relative px-4 2xl:px-0">
                <div className="z-40 container w-full flex flex-col justify-center gap-12 max-w-md lg:max-w-xl xl:max-w-7xl relative">
                    <div className="flex flex-col items-center gap-6 z-30">
                        <h2 className="text-primary-mid">Misc Projects</h2>
                    </div>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                        {
                            miscProjects.map((project) => (
                                <li key={project.title} className="flex justify-center items-center w-full">
                                    <div className="shadow-xl rounded-2xl overflow-hidden relative group">
                                        <Image src={project.image} alt={`Domestic Work ${project.id}`}  width={500} height={500} className="w-full object-cover z-30 group-hover:scale-105 group-active:scale-105 transition-all duration-200" />
                                        <div className="flex flex-col items-center justify-center gap-4 w-full h-full bg-transparent opacity-0 absolute top-0 left-0 group-hover:opacity-100 group-hover:bg-black/70 transition-colors duration-100">
                                            <p className="text-xl xl:text-3xl text-transparent z-50 group-hover:text-white transition-colors duration-200">{project.title}</p>
                                            <a href="/" className="text-transparent z-50 group-hover:text-neutral-300 hover:bg-neutral-400/40 transition-colors duration-200 border-2 border-neutral-400 rounded-full p-2 cursor-pointer"><Facebook className="w-6 h-6" /></a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            <Footer />
        </main>
    )
}