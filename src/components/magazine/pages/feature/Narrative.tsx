import Image from "next/image";
import { useEffect, useRef } from "react";
import { NarrativeProps } from "../types";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

export default function Narrative({ pageNumber, data }: NarrativeProps) {
    const { title, time, image, caption, description } = data;
    const isVideo = VIDEO_EXTENSIONS.some((ext) => image.toLowerCase().endsWith(ext));
    const shouldContainMedia = image.endsWith("/pong_late.gif") || image.endsWith("/ssp_vid.mp4");
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.play().catch(() => {});
    }, [image]);

    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <p className="text-center text-[8cqw] leading-tight">{title}</p>

                {time && <p className="text-center text-[3cqw] leading-tight">{time}</p>}

                <div className="relative mt-[6cqw] aspect-3/2 w-[75%] self-center">
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={`absolute inset-0 h-full w-full ${shouldContainMedia ? "object-contain" : "object-cover"}`}
                        />
                    ) : (
                        <Image src={image} alt={title} fill sizes="30vw" className={shouldContainMedia ? "object-contain" : "object-cover"} />
                    )}
                </div>

                <p className="mt-[2cqw] text-center text-[2.2cqw] leading-none">{caption}</p>

                <p className="mt-[4cqw] text-[2.4cqw] leading-snug">{description}</p>
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
