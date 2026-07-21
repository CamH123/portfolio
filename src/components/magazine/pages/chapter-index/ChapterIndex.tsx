import { ChapterIndexProps } from "../types";
import ChapterIndexItem from "./ChapterIndexItem";

export default function ChapterIndex({ pageNumber, chapterNumber, chapterName, items, showTitle = true }: ChapterIndexProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                {showTitle && (
                    <p className="mb-[8cqw] text-[10cqw] leading-none">
                        {chapterNumber} &nbsp;{chapterName}
                    </p>
                )}

                <div className="flex flex-1 flex-col justify-around">
                    {items.map((item, i) => (
                        <ChapterIndexItem key={i} data={item} />
                    ))}
                </div>
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
