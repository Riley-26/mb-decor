"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { QuoteIcon, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    {
        name: "Michael S.",
        location: "Balham, London",
        quote: "Mark has worked on our family homes over a period of some decades.\n\nHis prep work is always first class and the care he gives to final finishes is outstanding.\n\nWe trust him implicitly and he is most considerate when it comes to leaving site in immaculate condition.\n\nYou won't find a better painter and decorator. That's a fact.",
    },
    {
        name: "Jade C.",
        location: "Bexleyheath, London",
        quote: "I couldn't be happier with the work carried out by Mark and his team. Their attention to detail is outstanding - nothing was overlooked and every aspect of the job was completed to an exceptionally high standard. The quality of marksmanship truly speaks for itself and it's clear that they take real pride in what they do. \n\nWhat impressed me most was their commitment to getting everything just right. They didn't rush or cut corners and wouldn't leave until the job was finished to perfection. I would wholeheartedly recommend them to anyone looking for a decorator you can trust to deliver top quality results.",
    },
]

export default function TestimonialsCarousel() {
    const [[index, direction], setPage] = useState([0, 0])

    const paginate = (dir: 1 | -1) => {
        setPage(([i]) => [(i + dir + testimonials.length) % testimonials.length, dir])
    }

    const t = testimonials[index]

    return (
        <div className="w-full flex flex-col items-center gap-6">
            {/* Sliding card */}
            <div className="w-full overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={{
                            enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
                            center: { x: 0, opacity: 1 },
                            exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col md:flex-row items-center gap-2 md:gap-6 bg-secondary-light rounded-2xl mb-2 border-b-4 md:border-b-0 md:border-r-4 border-primary-dark w-full"
                    >
                        {/* Author badge — desktop */}
                        <div className="hidden md:flex flex-col items-end justify-end relative gap-2 bg-primary-dark rounded-2xl p-4 min-w-64 2xl:min-w-72 h-48 xl:h-64 mx-2 lg:mx-0 shrink-0">
                            <QuoteIcon fill="currentColor" className="w-16 h-16 xl:w-24 xl:h-24 absolute top-4 right-4 text-secondary-mid opacity-20" />
                            <p className="text-secondary-mid text-2xl 2xl:text-3xl text-end font-medium">{t.name}</p>
                            <p className="text-secondary-mid text-lg 2xl:text-xl text-end font-medium">{t.location}</p>
                        </div>

                        {/* Quote */}
                        <p className="text-primary-mid max-w-4xl rounded-2xl m-6 md:m-8 xl:text-2xl whitespace-pre-line">
                            &quot;{t.quote}&quot;
                        </p>

                        {/* Author badge — mobile */}
                        <div className="flex md:hidden flex-col items-center justify-center mb-6">
                            <p className="text-secondary-mid text-2xl text-end font-medium">{t.name}</p>
                            <p className="text-secondary-mid text-lg text-end font-medium">{t.location}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
                <button
                    onClick={() => paginate(-1)}
                    aria-label="Previous testimonial"
                    className="p-2 rounded-full border border-secondary-mid/40 text-secondary-mid hover:bg-secondary-mid/10 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(([prev]) => [i, i > prev ? 1 : -1])}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-secondary-mid" : "bg-secondary-mid/30"}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => paginate(1)}
                    aria-label="Next testimonial"
                    className="p-2 rounded-full border border-secondary-mid/40 text-secondary-mid hover:bg-secondary-mid/10 transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
