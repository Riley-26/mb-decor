"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Kensington Townhouse",
        category: "Interior Painting",
        description:
            "Full interior repaint of a five-bedroom Victorian townhouse. Every room finished to the highest standard with zero disruption to the family.",
        href: "/projects/kensington-townhouse",
        image: "/assets/hero1-upscaled.jpg",
    },
    {
        id: 2,
        title: "Surrey Country Estate",
        category: "Exterior & Interior",
        description:
            "Complete exterior restoration and interior transformation of a Grade II listed country estate, preserving its heritage character.",
        href: "/projects/surrey-estate",
        image: "/assets/hero2.jpg",
    },
    {
        id: 3,
        title: "Canary Wharf Office",
        category: "Commercial Interior",
        description:
            "Full fit-out repaint of a 12,000 sq ft commercial office space completed over a single weekend to avoid business disruption.",
        href: "/projects/canary-wharf-office",
        image: "/assets/hero1-upscaled.jpg",
    },
]

const offsets = [
    { y: 0, scale: 1, z: 30, brightness: 1 },
    { y: -18, scale: 0.965, z: 20, brightness: 0.65 },
    { y: -36, scale: 0.93, z: 10, brightness: 0.35 },
]

const DURATION = 500

export default function ProjectStack() {
    const [order, setOrder] = useState([0, 1, 2])
    // id of card currently sliding down + fading out (next direction)
    const [exitingId, setExitingId] = useState<number | null>(null)
    // id of card that needs to snap below before animating up (prev direction)
    const [snapBelowId, setSnapBelowId] = useState<number | null>(null)
    const [busy, setBusy] = useState(false)

    // Send front card to back — it slides down and fades out
    const next = () => {
        if (busy) return
        setBusy(true)
        setExitingId(projects[order[0]].id)
        setTimeout(() => {
            setOrder(([f, ...rest]) => [...rest, f])
            setExitingId(null)
            setBusy(false)
        }, DURATION)
    }

    // Bring back card to front — it snaps below, then rises and fades in
    const prev = () => {
        if (busy) return
        setBusy(true)
        const backId = projects[order[2]].id
        // Step 1: snap back card below the stack (no transition)
        setSnapBelowId(backId)
        // Step 2: two frames later, update order so the card animates upward into front
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setOrder(([a, b, c]) => [c, a, b])
                setSnapBelowId(null) // re-enable transitions
                setTimeout(() => setBusy(false), DURATION)
            })
        })
    }

    return (
        <>
            <div className="relative w-full h-[500px] xl:h-[460px] mb-8 xl:mb-0">
                {order.map((projectIndex, stackPosition) => {
                    const project = projects[projectIndex]
                    const { y, scale, z, brightness } = offsets[stackPosition]

                    const isExiting = project.id === exitingId
                    const isSnapping = project.id === snapBelowId

                    // Exiting: slide down 60px + fade out
                    // Snapping: place below stack instantly (translateY 120, no transition)
                    // Normal: use stack offsets
                    const translateY = isExiting ? y + 60 : isSnapping ? 120 : y
                    const opacity = isExiting || isSnapping ? 0 : 1
                    const transition = isSnapping
                        ? "none"
                        : `transform ${DURATION}ms ease-in-out, opacity ${Math.round(DURATION * 0.65)}ms ease-in-out`

                    const isTop = stackPosition === 0

                    return (
                        <div
                            key={project.id}
                            onClick={isTop && !busy ? next : undefined}
                            className={`absolute w-full xl:h-[380px] rounded-2xl overflow-hidden shadow-xl shadow-black/20 flex flex-col xl:flex-row select-none ${isTop && !busy ? "cursor-pointer" : "cursor-default"}`}
                            style={{
                                top: "72px",
                                transform: `translateY(${translateY}px) scale(${scale})`,
                                opacity,
                                zIndex: z,
                                transformOrigin: "top center",
                                transition,
                            }}
                        >
                            {/* Content — below image on mobile, left half on xl */}
                            <div className="order-last xl:order-first xl:w-1/2 bg-secondary-light flex flex-col justify-between p-6 xl:p-10 min-h-0 h-full flex-1 gap-8">
                                {/* Number — standalone at top on xl only */}
                                <span className="hidden xl:block text-3xl font-normal tracking-widest uppercase text-secondary-mid">
                                    0{project.id}
                                </span>
                                <div className="flex flex-col gap-3 xl:gap-4">
                                    <span className="text-sm font-medium tracking-widest uppercase text-secondary-mid">
                                        {project.category}
                                    </span>
                                    <h3 className="text-primary-dark text-2xl xl:text-3xl leading-tight flex items-baseline gap-3">
                                        {/* Number — inline with title on mobile only */}
                                        <span className="xl:hidden text-xl font-normal tracking-widest text-secondary-mid shrink-0">
                                            0{project.id}
                                        </span>
                                        {project.title}
                                    </h3>
                                    <p className="text-primary-mid text-base xl:text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <Link
                                    href={project.href}
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-2 text-primary-mid text-base xl:text-lg hover:text-primary-light transition-colors duration-75 w-max"
                                >
                                    View project{" "}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Image — top strip on mobile, right half on xl */}
                            <div
                                className="order-first xl:order-last relative w-full h-54 flex-none xl:h-auto xl:w-1/2"
                                style={{
                                    filter: `brightness(${brightness})`,
                                    transition: isSnapping
                                        ? "none"
                                        : `filter ${DURATION}ms ease-in-out`,
                                }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1280px) 50vw, 100vw"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 mt-8">
                <button
                    onClick={prev}
                    disabled={busy}
                    aria-label="Previous project"
                    className="w-11 h-11 rounded-full border border-secondary-mid/80 flex items-center justify-center text-secondary-mid hover:bg-secondary-mid/10 hover:border-secondary-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
                <button
                    onClick={next}
                    disabled={busy}
                    aria-label="Next project"
                    className="w-11 h-11 rounded-full border border-secondary-mid/80 flex items-center justify-center text-secondary-mid hover:bg-secondary-mid/10 hover:border-secondary-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <ChevronDown className="w-5 h-5" />
                </button>
            </div>
        </>
    )
}
