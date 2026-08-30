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
    flipNext: () => void
    flipPrev: () => void
    handlePageFlip: (page: number) => void
    isCoverNoteVisible: boolean
    sections: typeof sections
}

const MagazineContext = createContext<MagazineContextValue | null>(null)

export function MagazineProvider({ children }: { children: ReactNode }) {
    const bookRef = useRef<FlipBookHandle | null>(null)
    const isFlippingRef = useRef(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [isSinglePage, setIsSinglePage] = useState(false)
    const [isCoverNoteVisible, setIsCoverNoteVisible] = useState(true)
    const coverExitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)
        const updateViewport = () => setIsSinglePage(mediaQuery.matches)

        updateViewport()
        mediaQuery.addEventListener("change", updateViewport)
        return () => mediaQuery.removeEventListener("change", updateViewport)
    }, [])

    useEffect(() => {
        return () => {
            if (coverExitTimeoutRef.current) clearTimeout(coverExitTimeoutRef.current)
        }
    }, [])

    const flipToPage = useCallback((page: number) => {
        if (isFlippingRef.current) return

        const flip = () => bookRef.current?.pageFlip().flip(page)

        if (currentPage === 0 && page !== 0) {
            if (coverExitTimeoutRef.current) return

            setIsCoverNoteVisible(false)
            coverExitTimeoutRef.current = setTimeout(() => {
                coverExitTimeoutRef.current = null
                flip()
            }, 200)
            return
        }

        setCurrentPage(page)
        flip()
    }, [currentPage])

    const handleFlipState = useCallback((state: FlipState) => {
        isFlippingRef.current = state !== "read"
    }, [])

    const flipNext = useCallback(() => {
        if (currentPage === 0) {
            flipToPage(1)
            return
        }

        bookRef.current?.pageFlip().flipNext()
    }, [currentPage, flipToPage])

    const flipPrev = useCallback(() => {
        bookRef.current?.pageFlip().flipPrev()
    }, [])

    const handlePageFlip = useCallback((page: number) => {
        const isReturningToCover = page === 0 && currentPage !== 0

        setCurrentPage(page)

        if (isReturningToCover) {
            setIsCoverNoteVisible(false)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsCoverNoteVisible(true))
            })
        } else if (page !== 0) {
            setIsCoverNoteVisible(false)
        } else {
            setIsCoverNoteVisible(true)
        }
    }, [currentPage])

    return (
        <MagazineContext value={{
            bookRef,
            currentPage,
            setCurrentPage,
            flipToPage,
            handleFlipState,
            isSinglePage,
            flipNext,
            flipPrev,
            handlePageFlip,
            isCoverNoteVisible,
            sections,
        }}>
            {children}
        </MagazineContext>
    )
}

export function useMagazine() {
    const ctx = useContext(MagazineContext)
    if (!ctx) throw new Error("useMagazine must be used within a MagazineProvider")
    return ctx
}
