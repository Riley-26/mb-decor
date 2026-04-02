"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselImage = {
    src: string
    label?: string
}

export default function ProjectImageCarousel({ images }: { images: CarouselImage[] }) {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

    return (
        <div className="relative w-full rounded-2xl overflow-hidden">
            {/* Sliding track */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((image, i) => (
                    <div key={i} className="relative w-full shrink-0 max-h-108">
                        <Image
                            src={image.src}
                            alt={image.label ?? "Project image"}
                            width={600}
                            height={600}
                            className="object-cover w-full"
                        />
                        {image.label && (
                            <span className="absolute top-3 left-3 bg-secondary-dark text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md uppercase tracking-wide">
                                {image.label}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation — only show if more than one image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to image ${i + 1}`}
                                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
