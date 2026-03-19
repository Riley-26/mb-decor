"use client"

import { PauseIcon, PlayIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function Video({ id, src, className }: { id: string, src: string, className?: string }) {
    const [isPlaying, setIsPlaying] = useState(true)
    
    const handleClick = (state: boolean) => {
        const video = document.getElementById(id) as HTMLVideoElement
        if (state) {
            video.play()
        } else {
            video.pause()
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="relative group">
            <button className="absolute w-full h-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                {
                    isPlaying ? <PauseIcon className="text-white w-8 h-8 z-50" onClick={() => handleClick(!isPlaying)} /> : <PlayIcon className="text-white w-8 h-8 z-50" onClick={() => handleClick(!isPlaying)} />
                }
            </button>
            <video id={id} src={src} className={`${className} group-hover:brightness-40 transition-all duration-300 sepia-30`} autoPlay muted loop playsInline />
        </div>
    )   
}