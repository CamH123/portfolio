import Image from "next/image";
import { PageProps } from "../types";

const columns = [
    { files: ["1_1.JPG", "1_2.JPG", "1_3.jpg", "1_4.jpg"], grow: "flex-[145]" },
    { files: ["2_1.JPG", "2_2.JPG", "2_3.jpg"], grow: "flex-[225]" },
    { files: ["3_1.jpg", "3_2.JPG", "3_3.jpg", "3_4.jpg"], grow: "flex-[169]" },
];

const imageDimensions: Record<string, { width: number; height: number }> = {
    "1_1.JPG": { width: 1536, height: 2048 },
    "1_2.JPG": { width: 2048, height: 1536 },
    "1_3.jpg": { width: 1332, height: 996 },
    "1_4.jpg": { width: 4284, height: 5712 },
    "2_1.JPG": { width: 2048, height: 1536 },
    "2_2.JPG": { width: 1536, height: 2048 },
    "2_3.jpg": { width: 4032, height: 3024 },
    "3_1.jpg": { width: 4032, height: 3024 },
    "3_2.JPG": { width: 2048, height: 1536 },
    "3_3.jpg": { width: 3024, height: 4032 },
    "3_4.jpg": { width: 4032, height: 3024 },
};

export default function AboutCollage({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full items-center justify-center p-7">
                <div className="flex h-[93%] w-full gap-[2cqw]">
                    {columns.map(({ files, grow }, i) => (
                        <div key={i} className={`flex ${grow} flex-col justify-between`}>
                            {files.map((file) => (
                                <Image
                                    key={file}
                                    src={`/pages/about/${file}`}
                                    alt=""
                                    width={imageDimensions[file].width}
                                    height={imageDimensions[file].height}
                                    sizes="(max-width: 39.99rem) 34vw, 14vw"
                                    className="h-auto w-full"
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
