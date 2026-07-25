"use client"

import { createContext, useCallback, useContext, useRef, useState, ReactNode } from "react"
import { sections } from "./content"

type MagazineContextValue = {
    bookRef: React.RefObject<any>
    currentPage: number
    setCurrentPage: (page: number) => void
    flipToPage: (page: number) => void
    sections: typeof sections
}

const MagazineContext = createContext<MagazineContextValue | null>(null)

export function MagazineProvider({ children }: { children: ReactNode }) {
    const bookRef = useRef<any>(null)
    const [currentPage, setCurrentPage] = useState(0)

    const flipToPage = useCallback((page: number) => {
        setCurrentPage(page)
        bookRef.current?.pageFlip().flip(page)
    }, [])

    return (
        <MagazineContext value={{ bookRef, currentPage, setCurrentPage, flipToPage, sections }}>
            {children}
        </MagazineContext>
    )
}

export function useMagazine() {
    const ctx = useContext(MagazineContext)
    if (!ctx) throw new Error("useMagazine must be used within a MagazineProvider")
    return ctx
}
