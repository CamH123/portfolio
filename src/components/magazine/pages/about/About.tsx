import Image from "next/image";
import { PageProps } from "../types";

// Easy to update: edit this paragraph as the bio gets finalized.
const bio = `Hello! My name is Cameron, and I'm a student at Rice University studying computer science with a minor in data science. Over the past few years, I’ve found myself drawn to building scalable systems that use AI and real-world data to solve meaningful problems. That interest has taken me across a pretty wide range of work, from large-scale logistics platforms at AT&T to AI automation tools and database systems for medical devices at AbbVie.  What I enjoy the most about software development is the process behind it: talking to people, understanding their pain points, and learning whatever new technologies I need to turn those problems into something useful. It works out well since I'm always looking for an excuse to learn something new, whether that's a new coding framework or how to cook a beef wellington without setting off the smoke alarm (sorry Gordon Ramsay). Outside of coding, I'm usually making matcha, hunting for a new coffee shop, or planning a camping trip with friends.`;

export default function About({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <div>
                    <p className="text-[10cqw] leading-none">01 &nbsp;about</p>
                </div>

                <div className="mt-[8cqw] flex flex-1 flex-col justify-end">
                    <div className="flex justify-end pr-[3cqw]">
                        <div className="w-[70%]">
                            <Image
                                src="/pages/about/group.jpg"
                                alt="Cameron Huang"
                                width={4032}
                                height={3024}
                                sizes="(max-width: 39.99rem) 70vw, 28vw"
                                className="h-auto w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-[4cqw] mb-[9cqw]">
                        <p className="text-[2.6cqw] leading-snug">{bio}</p>
                    </div>
                </div>
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
