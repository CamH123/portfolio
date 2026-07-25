import { PageProps } from "./types";

export default function BackCover({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-black shadow-lg">
            <p className="absolute top-[25%] left-[15%] text-[10cqw] leading-none text-mag-white">The End</p>

            <p className="absolute top-[60%] left-[60%] text-[3cqw] leading-none text-mag-white">
                Thanks for visiting!
            </p>

            <p className="absolute top-[95%] left-[5%] text-[2.3cqw] leading-none text-mag-white/70">
                UI inspired by Kinfolk Magazine
            </p>

        </div>
    );
}
