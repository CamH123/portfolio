"use client"

import { useRef, useState } from "react"
import BusinessCard from "./BusinessCard"

export default function CardHolder() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)

    function closeDialog() {
        setIsDialogOpen(false)
        requestAnimationFrame(() => triggerRef.current?.focus())
    }

    return (
        <>
            <div className="absolute bottom-[13%] left-0 z-20 hidden h-[30%] w-[5%] lg:block">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[45%] bg-mag-brown" />

                <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => setIsDialogOpen(true)}
                    className="business-card-trigger absolute inset-y-[11%] left-0 flex w-[72%] items-center justify-end bg-mag-eggshell pr-[12%] text-[0.9vw] font-bold text-mag-black"
                    aria-haspopup="dialog"
                    aria-expanded={isDialogOpen}
                >
                    <span className="[writing-mode:vertical-rl]">Business Card</span>
                </button>
            </div>

            {isDialogOpen && <BusinessCard onClose={closeDialog} />}
        </>
    )
}
