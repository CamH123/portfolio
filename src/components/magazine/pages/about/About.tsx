import Image from "next/image";
import { PageProps } from "../types";

// Easy to update: edit this paragraph as the bio gets finalized.
const bio = `Hi there! I'm Cameron, a student at Rice University studying computer science with a minor in data science. I love building systems that leverage AI and real world data to make actionable decisions. I've gotten to put that into practice through my internships at AT&T and AbbVie, where I've had the opportunity to work on large scale logistics platforms, AI automation tools, and database systems for medical devices. In my free time, I like building random projects, currently an Instagram bot that tracks the best food spots, driven mostly by an insatiable appetite and an even bigger desire to fill out my Beli. When I'm not doing that, I'm probably planning a camping or hiking trip with some friends, teaching myself piano, or binging comedy shows (currently watching Silicon Valley).`;

export default function About({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <div>
                    <p className="text-[10cqw] leading-none">01 &nbsp;about</p>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <div className="mt-[8cqw] w-[70%]">
                        <Image
                            src="/pages/about/group.jpg"
                            alt="Cameron Huang"
                            width={4032}
                            height={3024}
                            className="h-auto w-full"
                        />
                    </div>
                </div>

                <div className="mt-auto translate-y-[-2cqw]">
                    <p className="text-[2.6cqw] leading-snug">{bio}</p>
                </div>
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
