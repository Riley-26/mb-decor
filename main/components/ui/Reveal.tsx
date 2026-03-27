"use client"

import { motion } from "motion/react"

interface RevealProps {
    children: React.ReactNode
    delay?: number
    duration?: number
    /** Direction the element slides in from. Defaults to "up". */
    from?: "up" | "down" | "left" | "right" | "none"
    /** Distance in px to travel. Defaults to 20. */
    distance?: number
    className?: string
}

const AXIS: Record<NonNullable<RevealProps["from"]>, { x?: number; y?: number }> = {
    up:    { y:  -1 },
    down:  { y: 1 },
    left:  { x:  -1 },
    right: { x: 1 },
    none:  {},
}

export default function Reveal({
    children,
    delay = 0,
    duration = 0.5,
    from = "up",
    distance = 20,
    className,
}: RevealProps) {
    const dir = AXIS[from]
    const initial = {
        opacity: 0,
        ...(dir.x !== undefined ? { x: dir.x * distance } : {}),
        ...(dir.y !== undefined ? { y: dir.y * distance } : {}),
    }

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
