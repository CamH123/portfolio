import Image from "next/image";
import { ProjectItemData } from "../types";

interface ProjectContentItemProps {
    data: ProjectItemData;
}

export default function ProjectContentItem({ data }: ProjectContentItemProps) {
    const { pageRange, title, subtitle, image } = data;

    return (
        <div className="flex w-full">
            <div className="w-[15%] pt-[1cqw]">
                <p className="text-[2.6cqw] leading-none">{pageRange}</p>
            </div>

            <div className="flex flex-1 flex-col items-center">
                <div className="relative aspect-3/2 w-[50%]">
                    <Image src={image} alt={title} fill className="object-cover" />
                </div>

                <p className="mt-[2.5cqw] text-[3.2cqw] leading-none">{title}</p>
                <p className="mt-[0.5cqw] text-[2cqw] leading-none">{subtitle}</p>
            </div>
        </div>
    );
}
