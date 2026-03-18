"use client"

import { useEffect, useState } from 'react';

export function useScrollBy() {
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: typeof window !== "undefined" ? window.scrollX : 0,
        y: typeof window !== "undefined" ? window.scrollY : 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return position;
}