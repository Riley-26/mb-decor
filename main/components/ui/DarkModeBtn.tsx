"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeBtn() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex items-center justify-center w-10 h-10 rounded-full bg-background-color">
            {theme === "dark" ? <Sun size={20} color="#000" /> : <Moon size={20} color="#000" />}
        </button>
    )
}