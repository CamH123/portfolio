import Image from "next/image";
import { NarrativeProps } from "../types";
import MagazineVideo from "../../MagazineVideo";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

export default function Narrative({ pageNumber, data }: NarrativeProps) {
    const { title, time, image, caption, description } = data;
    const isVideo = VIDEO_EXTENSIONS.some((ext) => image.toLowerCase().endsWith(ext));
    const shouldContainMedia = image.endsWith("/pong_late.loop.mp4") || image.endsWith("/ssp_vid.mp4");
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <p className="text-center text-[8cqw] leading-tight">{title}</p>

                {time && <p className="text-center text-[3cqw] leading-tight">{time}</p>}

                <div className="relative mt-[6cqw] aspect-3/2 w-[75%] self-center">
                    {isVideo ? (
                        <MagazineVideo
                            src={image}
                            pageNumber={pageNumber}
                            className={`absolute inset-0 h-full w-full ${shouldContainMedia ? "object-contain" : "object-cover"}`}
                        />
                    ) : (
                        <Image src={image} alt={title} fill sizes="(max-width: 39.99rem) 75vw, 30vw" className={shouldContainMedia ? "object-contain" : "object-cover"} />
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
