"use client"

import { useCallback, useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react"
import HTMLFlipBook from "react-pageflip"
import PageFrame from "./PageFrame"
import { pages } from "./content"
import { useMagazine } from "./MagazineContext"

const PAGE_ASPECT_RATIO = 1 / 1.25 
const HEIGHT_SCALE = 1 
const WIDTH_SCALE = 0.8 

type FlipEvent = {
    data: number
}

type FlipStateEvent = {
    data: "user_fold" | "fold_corner" | "flipping" | "read"
}

function computeBookSize(containerWidth: number, containerHeight: number, isMobile: boolean) {
    const availableWidth = containerWidth * (isMobile ? 1 : WIDTH_SCALE)
    const availableHeight = containerHeight * HEIGHT_SCALE

    let pageWidth = isMobile ? availableWidth : availableWidth / 2
    let pageHeight = pageWidth / PAGE_ASPECT_RATIO

    if (pageHeight > availableHeight) {
        pageHeight = availableHeight
        pageWidth = pageHeight * PAGE_ASPECT_RATIO
    }

    return { width: Math.floor(pageWidth), height: Math.floor(pageHeight) }
}

export default function Magazine() {
    const containerRef = useRef<HTMLDivElement>(null)
    const {
        bookRef,
        currentPage,
        flipNext,
        flipPrev,
        handlePageFlip,
        handleFlipState,
        isSinglePage,
    } = useMagazine()
    const [size, setSize] = useState<{ width: number; height: number } | null>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        let timeout: ReturnType<typeof setTimeout>
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect
            clearTimeout(timeout)
            if (width <= 0 || height <= 0) return

            timeout = setTimeout(() => {
                const nextSize = computeBookSize(width, height, isSinglePage)
                if (nextSize.width > 0 && nextSize.height > 0) {
                    setSize(nextSize)
                }
            }, 150)
        })

        observer.observe(container)
        return () => {
            clearTimeout(timeout)
            observer.disconnect()
        }
    }, [isSinglePage])

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowLeft") {
                flipPrev()
            } else if (e.key === "ArrowRight") {
                flipNext()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [flipNext, flipPrev])

    // Remounting on resize (via key) resets to startPage, so track the current
    // page to carry it across remounts instead of jumping back to the cover.
    const handleFlip = useCallback((e: FlipEvent) => {
        handlePageFlip(e.data)
    }, [handlePageFlip])

    const handleCoverMouseDown = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
        if (currentPage !== 0 || isSinglePage || !size || e.button !== 0) return

        const container = containerRef.current
        if (!container) return

        const { left, top, width, height } = container.getBoundingClientRect()
        const bookWidth = size.width * 2
        const bookLeft = left + (width - bookWidth) / 2
        const bookTop = top + (height - size.height) / 2
        const isWithinBook = e.clientX >= bookLeft && e.clientX <= bookLeft + bookWidth
            && e.clientY >= bookTop && e.clientY <= bookTop + size.height

        if (!isWithinBook) return

        e.preventDefault()
        e.stopPropagation()

        if (e.clientX >= bookLeft + size.width) {
            flipNext()
        }
    }, [currentPage, flipNext, isSinglePage, size])

    return (
        <div ref={containerRef} onMouseDownCapture={handleCoverMouseDown} className="flex h-full w-full items-center justify-center p-2 sm:p-4">
            {size && (
                <HTMLFlipBook
                    key={`${size.width}x${size.height}-${isSinglePage ? "portrait" : "landscape"}`}
                    ref={bookRef}
                    className={`magazine-book-entrance${isSinglePage ? " magazine-book--portrait" : ""}`}
                    style={{}}
                    width={size.width}
                    height={size.height}
                    size="fixed"
                    minWidth={0}
                    maxWidth={0}
                    minHeight={0}
                    maxHeight={0}
                    startPage={currentPage}
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
                    showPageCorners={false}
                    disableFlipByClick={false}
                    renderOnlyPageLengthChange
                    onFlip={handleFlip}
                    onChangeState={(e: FlipStateEvent) => handleFlipState(e.data)}
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
