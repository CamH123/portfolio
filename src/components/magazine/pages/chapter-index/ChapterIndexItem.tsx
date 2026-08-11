import Image from "next/image";
import { ProjectItemData } from "../types";
import MagazineVideo from "../../MagazineVideo";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

interface ChapterIndexItemProps {
    data: ProjectItemData;
    pageNumber: number;
}

export default function ChapterIndexItem({ data, pageNumber }: ChapterIndexItemProps) {
    const { pageRange, title, subtitle, image } = data;
    const isVideo = VIDEO_EXTENSIONS.some((ext) => image.toLowerCase().endsWith(ext));

    return (
        <div className="flex w-full">
            <div className="w-[15%] pt-[1cqw] text-center">
                <p className="text-[2.6cqw] leading-none">{pageRange}</p>
            </div>

            <div className="flex flex-1 flex-col items-center">
                <div className="relative aspect-3/2 w-[50%]">
                    {isVideo ? (
                        <MagazineVideo
                            src={image}
                            pageNumber={pageNumber}
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                    ) : (
                        <Image src={image} alt={title} fill sizes="(max-width: 39.99rem) 50vw, 20vw" className="object-cover" />
                    )}
                </div>

                <p className="mt-[1.5cqw] text-[3.2cqw] leading-none">{title}</p>
                <p className="mt-[0.5cqw] text-[2.3cqw] leading-none italic">{subtitle}</p>
            </div>
        </div>
    );
}
