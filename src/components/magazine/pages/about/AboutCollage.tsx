import { PageProps } from "../types";

const columns = [
    { files: ["1_1.JPG", "1_2.JPG", "1_3.jpg", "1_4.jpg"], grow: "flex-[145]" },
    { files: ["2_1.JPG", "2_2.JPG", "2_3.jpg"], grow: "flex-[225]" },
    { files: ["3_1.jpg", "3_2.JPG", "3_3.jpg", "3_4.jpg"], grow: "flex-[169]" },
];

export default function AboutCollage({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full items-center justify-center p-7">
                <div className="flex h-[93%] w-full gap-[2cqw]">
                    {columns.map(({ files, grow }, i) => (
                        <div key={i} className={`flex ${grow} flex-col justify-between`}>
                            {files.map((file) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={file}
                                    src={`/pages/about/${file}`}
                                    alt=""
                                    className="w-full"
                                />
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
