"use client"

import { useEffect, useRef } from "react"
import { useMagazine } from "./MagazineContext"

type MagazineVideoProps = {
    src: string
    pageNumber: number
    className: string
}

export default function MagazineVideo({ src, pageNumber, className }: MagazineVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const { currentPage } = useMagazine()
    const shouldLoad = pageNumber >= currentPage - 1 && pageNumber <= currentPage + 2
    const poster = src.replace(/\.mp4$/, ".poster.jpg")

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        if (!shouldLoad) {
            video.pause()
            return
        }

        video.muted = true
        video.play().catch(() => {})
    }, [shouldLoad, src])

    return (
        <video
            ref={videoRef}
            src={shouldLoad ? src : undefined}
            autoPlay={shouldLoad}
            loop
            muted
            playsInline
            preload="metadata"
            poster={poster}
            className={className}
        />
    )
}
