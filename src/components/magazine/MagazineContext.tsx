"use client"

import { createContext, useCallback, useContext, useEffect, useRef, useState, ReactNode } from "react"
import { sections } from "./content"

const MOBILE_BREAKPOINT = "(max-width: 39.99rem)"
type FlipState = "user_fold" | "fold_corner" | "flipping" | "read"

export type FlipBookHandle = {
    pageFlip: () => {
        flip: (page: number) => void
        flipNext: () => void
        flipPrev: () => void
    }
}

type MagazineContextValue = {
    bookRef: React.RefObject<FlipBookHandle | null>
    currentPage: number
    setCurrentPage: (page: number) => void
    flipToPage: (page: number) => void
    handleFlipState: (state: FlipState) => void
    isSinglePage: boolean
    sections: typeof sections
}

const MagazineContext = createContext<MagazineContextValue | null>(null)

export function MagazineProvider({ children }: { children: ReactNode }) {
    const bookRef = useRef<FlipBookHandle | null>(null)
    const isFlippingRef = useRef(false)
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
        if (isFlippingRef.current) return

        setCurrentPage(page)
        bookRef.current?.pageFlip().flip(page)
    }, [])

    const handleFlipState = useCallback((state: FlipState) => {
        isFlippingRef.current = state !== "read"
    }, [])

    return (
        <MagazineContext value={{ bookRef, currentPage, setCurrentPage, flipToPage, handleFlipState, isSinglePage, sections }}>
            {children}
        </MagazineContext>
    )
}

export function useMagazine() {
    const ctx = useContext(MagazineContext)
    if (!ctx) throw new Error("useMagazine must be used within a MagazineProvider")
    return ctx
}
