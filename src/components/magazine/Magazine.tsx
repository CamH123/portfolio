"use client"

import { useEffect, useState } from "react"
import { pages } from "./content"

// spreadStart of -1 means the cover sits alone on the right, with nothing on the left.
function getPage(index: number) {
    return index >= 0 && index < pages.length ? pages[index] : null
}

export default function Magazine() {
    const [spreadStart, setSpreadStart] = useState(-1)

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowLeft") {
                setSpreadStart((s) => Math.max(-1, s - 2))
            } else if (e.key === "ArrowRight") {
                setSpreadStart((s) => Math.min(pages.length - 1, s + 2))
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full max-h-full items-stretch justify-center p-4">
                {/* Left page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25">
                    {getPage(spreadStart)}
                </div>

                {/* Right page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25 overflow-hidden">
                    {getPage(spreadStart + 1)}
                </div>
            </div>
        </div>
    )
}
