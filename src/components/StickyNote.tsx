"use client"

import { useMagazine } from "./magazine/MagazineContext"

export default function StickyNote() {
    const { isCoverNoteVisible } = useMagazine()

    return (
        <aside className={`magazine-note-entrance @container pointer-events-none absolute left-[8%] top-[10%] z-20 hidden aspect-square w-[20%] min-h-0 overflow-hidden bg-mag-amber p-[1.5cqw] font-sticky-note text-mag-black transition-opacity ease-out lg:block ${isCoverNoteVisible ? "opacity-100 duration-500" : "opacity-0 duration-200"}`}>
            <div className="flex h-full flex-col justify-between leading-[1.1] [&_p]:text-[5.5cqw]">
                <div className="space-y-[1em]">
                    <p>Welcome!</p>

                    <p>
                        Check out the magazine
                        <br />
                        for projects, experiences,  →
                        <br />
                        and a little more about me.
                    </p>
                </div>

                <p>
                    In a hurry?
                    <br />
                    Grab my business card!
                    <br />
                    ←
                </p>
            </div>
        </aside>
    )
}
