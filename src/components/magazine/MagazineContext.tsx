"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState, ReactNode } from "react"
import { sections } from "./content"

const MOBILE_BREAKPOINT = "(max-width: 39.99rem)"

type MagazineContextValue = {
    bookRef: React.RefObject<any>
    currentPage: number
    setCurrentPage: (page: number) => void
    flipToPage: (page: number) => void
    isSinglePage: boolean
    sections: typeof sections
}

const MagazineContext = createContext<MagazineContextValue | null>(null)

export function MagazineProvider({ children }: { children: ReactNode }) {
    const bookRef = useRef<any>(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [isSinglePage, setIsSinglePage] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)
        const updateViewport = () => setIsSinglePage(mediaQuery.matches)

        updateViewport()
        mediaQuery.addEventListener("change", updateViewport)
        return () => mediaQuery.removeEventListener("change", updateViewport)
    }, [])

    const flipToPage = useCallback((page: number) => {
        setCurrentPage(page)
        bookRef.current?.pageFlip().flip(page)
    }, [])

    return (
        <MagazineContext value={{ bookRef, currentPage, setCurrentPage, flipToPage, isSinglePage, sections }}>
            {children}
        </MagazineContext>
    )
}

export function useMagazine() {
    const ctx = useContext(MagazineContext)
    if (!ctx) throw new Error("useMagazine must be used within a MagazineProvider")
    return ctx
}
