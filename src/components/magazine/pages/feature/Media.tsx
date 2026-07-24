import Image from "next/image";
import { MediaProps } from "../types";

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
                                    <div className="relative aspect-3/2 w-full">
                                        <Image src={item.image} alt={item.caption} fill className="object-cover" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative aspect-3/2 w-full">
                                        <Image src={item.image} alt={item.caption} fill className="object-cover" />
                                    </div>
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
