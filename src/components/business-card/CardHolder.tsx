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
            <div className="business-card-holder-entrance absolute bottom-[13%] left-0 z-20 hidden h-[30%] w-[5%] sm:block">
                <div className="business-card-holder pointer-events-none absolute inset-y-0 left-0 z-10 w-[45%] rounded-r-xl shadow-2xl" />

                <div className="business-card-card-entrance absolute inset-0">
                    <button
                        ref={triggerRef}
                        type="button"
                        onClick={() => setIsDialogOpen(true)}
                        className="business-card-paper business-card-trigger absolute inset-y-[11%] left-[-0.5] flex w-[90%] items-center justify-end pr-[12%] text-[0.9vw] font-bold text-mag-black"
                        aria-haspopup="dialog"
                        aria-expanded={isDialogOpen}
                    >
                        <span className="[writing-mode:vertical-rl]">Business Card</span>
                    </button>
                </div>
            </div>

            {isDialogOpen && <BusinessCard onClose={closeDialog} />}
        </>
    )
}
