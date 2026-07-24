import Image from "next/image";
import { ProjectItemData } from "../types";

interface ChapterIndexItemProps {
    data: ProjectItemData;
}

export default function ChapterIndexItem({ data }: ChapterIndexItemProps) {
    const { pageRange, title, subtitle, image } = data;

    return (
        <div className="flex w-full">
            <div className="w-[15%] pt-[1cqw] text-center">
                <p className="text-[2.6cqw] leading-none">{pageRange}</p>
            </div>

            <div className="flex flex-1 flex-col items-center">
                <div className="relative aspect-3/2 w-[50%]">
                    <Image src={image} alt={title} fill className="object-cover" />
                </div>

                <p className="mt-[2.5cqw] text-[3.2cqw] leading-none">{title}</p>
                <p className="mt-[0.5cqw] text-[2.1cqw] leading-none">{subtitle}</p>
            </div>
        </div>
    );
}
