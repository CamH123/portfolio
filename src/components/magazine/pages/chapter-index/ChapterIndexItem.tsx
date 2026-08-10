import Image from "next/image";
import { useEffect, useRef } from "react";
import { ProjectItemData } from "../types";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

interface ChapterIndexItemProps {
    data: ProjectItemData;
}

export default function ChapterIndexItem({ data }: ChapterIndexItemProps) {
    const { pageRange, title, subtitle, image } = data;
    const isVideo = VIDEO_EXTENSIONS.some((ext) => image.toLowerCase().endsWith(ext));
    const videoRef = useRef<HTMLVideoElement>(null);

    // React's `muted` prop only sets the DOM property, not the server-rendered
    // attribute, so the browser can evaluate autoplay before it's applied and
    // silently block playback. Setting it imperatively guarantees it's muted first.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.play().catch(() => {});
    }, [image]);

    return (
        <div className="flex w-full">
            <div className="w-[15%] pt-[1cqw] text-center">
                <p className="text-[2.6cqw] leading-none">{pageRange}</p>
            </div>

            <div className="flex flex-1 flex-col items-center">
                <div className="relative aspect-3/2 w-[50%]">
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    ) : (
                        <Image src={image} alt={title} fill sizes="20vw" className="object-cover" />
                    )}
                </div>

                <p className="mt-[1.5cqw] text-[3.2cqw] leading-none">{title}</p>
                <p className="mt-[0.5cqw] text-[2.3cqw] leading-none italic">{subtitle}</p>
            </div>
        </div>
    );
}
