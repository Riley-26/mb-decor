import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Metadata } from "next"
import Image from "next/image"
import { CheckIcon, Facebook, HouseIcon, MapPin, PaintbrushIcon } from "lucide-react"
import React from "react"
import ProjectImageCarousel from "@/components/layout/projects/ProjectImageCarousel"

export const metadata: Metadata = {
    title: "Projects | MB Prestige Painting",
    description:
        "Projects MB Prestige Painting.",
}

const mainProjects = [
    {
        id: 1,
        title: "Holly Hill House",
        description: "Elizabethan period home, was in need of restoration to the exterior windows. Perfect paintwork whilst adhering to the laws of protected properties, to restore the home to its former glory.",
        location: "Meopham, Kent",
        images: [
            { src: "/assets/about/property.jpg", label: "After" },
            { src: "/assets/projects/project1-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/project1-imgafter2.jpg", label: "After" },
            { src: "/assets/projects/project1-imgbefore3.jpg", label: "Before" },
            { src: "/assets/projects/project1-imgafter3.jpg", label: "After" },
            { src: "/assets/projects/project1-imgbefore1.jpg", label: "Before" },
            { src: "/assets/projects/project1-imgafter1.jpg", label: "After" },
        ],
        features: [
            {
                icon: <HouseIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Heritage",
            },
            {
                icon: <PaintbrushIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Exterior",
            },
        ]
    },
    {
        id: 2,
        title: "Kensington Flat Refurbishment",
        description: "A prestigious flat on Gloucester Road, Kensington. Premium paint and materials used to modernise the property, earning its place in the heart of London.",
        location: "Kensington, London",
        images: [
            { src: "/assets/projects/project2-imgafter2.jpg", label: "After" },
            { src: "/assets/projects/project2-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/project2-imgbefore3.jpg", label: "Before" },
            { src: "/assets/projects/project2-imgafter3.jpg", label: "After" },
            { src: "/assets/projects/project2-imgbefore1.jpg", label: "Before" },
            { src: "/assets/projects/project2-imgafter1.jpg", label: "After" },
        ],
        features: [
            {
                icon: <HouseIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Domestic",
            },
            {
                icon: <PaintbrushIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Interior",
            },
        ]
    },
    {
        id: 3,
        title: "Downstairs Refurbishment",
        description: "Kitchen, dining and living rooms repainted, along with many doors/frames. A complete modern overhaul of the downstairs of the property.",
        location: "Kent",
        images: [
            { src: "/assets/projects/project3-imgafter1.jpg", label: "After" },
            { src: "/assets/projects/project3-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/project3-imgafter2.jpg", label: "After" },
            { src: "/assets/projects/project3-imgbefore3.jpg", label: "Before" },
            { src: "/assets/projects/project3-imgafter3.jpg", label: "After" },
            { src: "/assets/projects/project3-imgafter4.jpg", label: "After" },
            { src: "/assets/projects/project3-imgafter5.jpg", label: "After" },
        ],
        features: [
            {
                icon: <HouseIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Domestic",
            },
            {
                icon: <PaintbrushIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Interior",
            },
        ]
    },
    {
        id: 4,
        title: "Windows Repair and Repaint",
        description: "Exterior windows repaired and repainted, after years of built-up damage. Specialised paint and materials with exterior circumstances in mind.",
        location: "Kent",
        images: [
            { src: "/assets/projects/project4-imgafter1.jpg", label: "After" },
            { src: "/assets/projects/project4-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/project4-imgafter2.jpg", label: "After" },
            { src: "/assets/projects/project4-imgbefore3.jpg", label: "Before" },
            { src: "/assets/projects/project4-imgafter3.jpg", label: "After" },
            { src: "/assets/projects/project4-imgbefore4.jpg", label: "Before" },
            { src: "/assets/projects/project4-imgafter4.jpg", label: "After" },
        ],
        features: [
            {
                icon: <HouseIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Domestic",
            },
            {
                icon: <PaintbrushIcon className="w-6 h-6 text-secondary-mid" />,
                label: "Exterior",
            },
        ]
    },
]

const miscProjects = [
    {
        id: 1,
        title: "Project 1",
        images: [
            { src: "/assets/projects/miscproject3-imgafter1.jpg", label: "After" },
            { src: "/assets/projects/miscproject3-imgafter2.jpg", label: "After" },
            { src: "/assets/projects/miscproject3-imgbefore3.jpg", label: "Before" },
            { src: "/assets/projects/miscproject3-imgafter3.jpg", label: "After" },
            { src: "/assets/projects/miscproject3-imgbefore4.jpg", label: "Before" },
            { src: "/assets/projects/miscproject3-imgafter4.jpg", label: "After" },
        ]
    },
    {
        id: 2,
        title: "Project 2",
        images: [
            { src: "/assets/projects/miscproject4-imgafter1.jpg", label: "After" },
            { src: "/assets/projects/miscproject4-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/miscproject4-imgafter2.jpg", label: "After" },
            { src: "/assets/projects/miscproject4-imgafter3.jpg", label: "After" },
        ]
    },
    {
        id: 3,
        title: "Project 3",
        images: [
            { src: "/assets/projects/miscproject1-imgafter1.jpg", label: "After" },
            { src: "/assets/projects/miscproject1-imgbefore1.jpg", label: "Before" },
            { src: "/assets/projects/miscproject1-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/miscproject1-imgafter2.jpg", label: "After" },
        ]
    },
    {
        id: 4,
        title: "Project 4",
        images: [
            { src: "/assets/projects/miscproject2-imgafter1.jpg", label: "After" },
            { src: "/assets/projects/miscproject2-imgbefore1.jpg", label: "Before" },
            { src: "/assets/projects/miscproject2-imgbefore2.jpg", label: "Before" },
            { src: "/assets/projects/miscproject2-imgafter2.jpg", label: "After" },
        ]
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
                                <li key={project.title} className="flex flex-col lg:flex-row justify-center lg:items-center w-full max-w-xl lg:max-w-full gap-6 lg:gap-16 bg-secondary-light border-l-6 border-secondary-dark rounded-2xl px-4 lg:px-8 py-6 lg:py-4 xl:py-8 shadow-xl">
                                    <div className="lg:w-1/2 flex flex-col gap-4 xl:gap-6 ml-4 lg:ml-0">
                                        <span className="text-secondary-mid text-lg lg:text-xl xl:text-2xl font-medium">0{project.id}</span>
                                        <h2 className="text-2xl md:text-3xl xl:text-4xl">{project.title}</h2>
                                        <p className="text-lg md:text-xl">{project.description}</p>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-secondary-mid" />
                                            <p className="text-sm md:text-base text-neutral-700">{project.location}</p>
                                        </div>
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
                                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                                        <ProjectImageCarousel images={project.images} />
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
                                    <div className="w-full mt-6 lg:mt-0">
                                        <ProjectImageCarousel images={project.images} />
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