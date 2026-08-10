import Image from "next/image";
import { useEffect, useRef } from "react";
import { MediaProps } from "../types";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function MediaThumbnail({ src, alt }: { src: string; alt: string }) {
    const isVideo = VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
    const videoRef = useRef<HTMLVideoElement>(null);

    // React's `muted` prop only sets the DOM property, not the server-rendered
    // attribute, so the browser can evaluate autoplay before it's applied and
    // silently block playback. Setting it imperatively guarantees it's muted first.
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.play().catch(() => {});
    }, [src]);

    return (
        <div className="relative aspect-3/2 w-full">
            {isVideo ? (
                <video
                    ref={videoRef}
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-contain"
                />
            ) : (
                <Image src={src} alt={alt} fill sizes="20vw" className="object-contain" />
            )}
        </div>
    );
}

export default function Media({ pageNumber, items, links }: MediaProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <div className="grid flex-1 grid-rows-3">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`grid items-center gap-[4cqw] ${i === 1 ? "grid-cols-[40%_50%]" : "grid-cols-[50%_40%]"}`}
                        >
                            {i === 1 ? (
                                <>
                                    <p className="text-center text-[2.6cqw] leading-none">{item.caption}</p>
                                    <MediaThumbnail src={item.image} alt={item.caption} />
                                </>
                            ) : (
                                <>
                                    <MediaThumbnail src={item.image} alt={item.caption} />
                                    <p className="text-center text-[2.6cqw] leading-none">{item.caption}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {links && links.length > 0 && (
                    <p className="mt-[3cqw] text-center text-[2.2cqw] leading-none">
                        <span className="underline">Links:</span>&nbsp;
                        {links.map((link, i) => (
                            <span key={i}>
                                <a href={link.href}>{link.label}</a>
                                {i < links.length - 1 && " | "}
                            </span>
                        ))}
                    </p>
                )}
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
