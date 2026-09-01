"use client"

import { useEffect, useRef } from "react"

type BusinessCardProps = {
    onClose: () => void
}

export default function BusinessCard({ onClose }: BusinessCardProps) {
    const dialogRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        dialogRef.current?.focus()

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-mag-black/60"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose()
            }}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Business card"
                tabIndex={-1}
                className="aspect-[16/10] w-[65%] bg-mag-eggshell"
            />
        </div>
    )
}
