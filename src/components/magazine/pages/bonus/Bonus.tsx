import { PageProps } from "../types";

const columns = [
    { files: ["1_1.jpg", "2_1.jpg", "3_1.jpg", "4_3.jpg"], grow: "flex-[85]", offset: "-translate-y-[8cqw]" },
    { files: ["1_2.jpg", "2_3.jpg", "3_2.jpg", "4_1.jpg"], grow: "flex-[95]", offset: "translate-y-[0cqw]" },
    { files: ["1_3.jpg", "2_5.jpg", "2_2.jpg", "4_4.jpg"], grow: "flex-[90]", offset: "-translate-y-[3cqw]" },
    { files: ["1_5.jpg", "2_6.jpg", "3_6.jpg", "4_2.png"], grow: "flex-[85]", offset: "-translate-y-[6cqw]" },
    { files: ["1_6.jpg", "3_4.jpg", "3_3.jpg", "4_5.png"], grow: "flex-[95]", offset: "-translate-y-[2cqw]" },
];

export default function Bonus({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <div className="flex items-baseline justify-between">
                    <p className="text-[10cqw] leading-none">06 &nbsp;bonus</p>
                    <p className="text-[2.6cqw] leading-none">my good reads, letterboxd, and more :)</p>
                </div>

                <div className="mt-auto flex flex-1 items-end gap-[2cqw]">
                    {columns.map(({ files, grow, offset }, i) => (
                        <div key={i} className={`flex ${grow} flex-col gap-[1.2cqw] ${offset}`}>
                            {files.map((file) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img key={file} src={`/pages/bonus/${file}`} alt="" className="w-full" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
