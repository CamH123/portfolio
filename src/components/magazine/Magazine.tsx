"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import PageFrame from "./PageFrame"
import { pages } from "./content"

const PAGE_ASPECT_RATIO = 1 / 1.25 // width / height, matches the design's page proportions
const HEIGHT_SCALE = 1 // portion of the available height the magazine should occupy
const WIDTH_SCALE = 0.8 // portion of the available width the magazine should occupy

// react-pageflip's own "stretch" sizing only reacts to available width, so it
// overflows whenever the container is width-constrained. Measure the container
// ourselves and feed it an exact fixed size that fits both width and height.
function computeBookSize(containerWidth: number, containerHeight: number) {
    const availableWidth = containerWidth * WIDTH_SCALE
    const availableHeight = containerHeight * HEIGHT_SCALE

    let pageWidth = availableWidth / 2
    let pageHeight = pageWidth / PAGE_ASPECT_RATIO

    if (pageHeight > availableHeight) {
        pageHeight = availableHeight
        pageWidth = pageHeight * PAGE_ASPECT_RATIO
    }

    return { width: Math.floor(pageWidth), height: Math.floor(pageHeight) }
}

export default function Magazine() {
    const containerRef = useRef<HTMLDivElement>(null)
    const book = useRef<any>(null)
    const [size, setSize] = useState<{ width: number; height: number } | null>(null)
    const [startPage, setStartPage] = useState(0)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Fonts/images settling during load fire several resize events in a row;
        // wait for them to stop before committing a size (each commit remounts the book).
        let timeout: ReturnType<typeof setTimeout>
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect
            clearTimeout(timeout)
            timeout = setTimeout(() => setSize(computeBookSize(width, height)), 150)
        })

        observer.observe(container)
        return () => {
            clearTimeout(timeout)
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowLeft") {
                book.current?.pageFlip().flipPrev()
            } else if (e.key === "ArrowRight") {
                book.current?.pageFlip().flipNext()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    // Remounting on resize (via key) resets to startPage, so track the current
    // page to carry it across remounts instead of jumping back to the cover.
    const handleFlip = useCallback((e: any) => {
        setStartPage(e.data)
    }, [])

    return (
        <div ref={containerRef} className="flex h-full w-full items-center justify-center p-4">
            {size && (
                <HTMLFlipBook
                    key={`${size.width}x${size.height}`}
                    ref={book}
                    className=""
                    style={{}}
                    width={size.width}
                    height={size.height}
                    size="fixed"
                    minWidth={0}
                    maxWidth={0}
                    minHeight={0}
                    maxHeight={0}
                    startPage={startPage}
                    drawShadow
                    flippingTime={1000}
                    usePortrait
                    startZIndex={0}
                    autoSize
                    maxShadowOpacity={1}
                    showCover
                    mobileScrollSupport
                    clickEventForward
                    useMouseEvents
                    swipeDistance={30}
                    showPageCorners
                    disableFlipByClick={false}
                    onFlip={handleFlip}
                >
                    {pages.map((page, i) => (
                        <PageFrame key={i} side={i % 2 === 0 ? "right" : "left"}>
                            {page}
                        </PageFrame>
                    ))}
                </HTMLFlipBook>
            )}
        </div>
    )
}
