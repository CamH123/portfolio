import Image from "next/image";
import { PageProps } from "../types";

// Easy to update: edit this paragraph as the bio gets finalized.
const bio = `Hi, my name is Cameron Huang! I am a student at Rice University studying computer science with a minor in data science. I am passionate about building software that leverages AI and real world data to make actionable decisions. I have experience interning at multiple fortune 500 companies (1x AT&T, 2x AbbVie), where I've held roles developing the cloud infrastructure, AI automation tools, and database systems for medical devices. Furthermore, I have built operational software with NASA for both spacesuit interfaces as well their pressurized rover for the Artemis missions. Finally, when I'm not coding, I love being outdoors. You can find me playing pickle ball, going on hiking trips, and stargazing at night!`;

export default function About({ pageNumber, side }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-6">
                <div>
                    <p className="text-[8cqw] leading-none">01 &nbsp; about</p>
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

                <div className="mt-auto translate-y-[-3cqw]">
                    <p className="text-[2.6cqw] leading-snug">{bio}</p>
                </div>
            </div>

            <div className={`absolute bottom-[2cqw] ${side === "left" ? "left-[2cqw]" : "right-[2cqw]"}`}>
                <p className="text-[2cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
