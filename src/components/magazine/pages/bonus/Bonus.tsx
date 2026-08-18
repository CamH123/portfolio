import { PageProps } from "../types";

const plans = [
    { text: "build an instagram bot for food and cafe recs", alignment: "self-start pl-[5cqw]" },
    { text: "learn chopin’s ballade no 2 on piano", alignment: "self-end pr-[3cqw]" },
    { text: "finish reading the LOTR trilogy", alignment: "self-center" },
    { text: "make a song on fruity loops", alignment: "self-start pl-[7cqw]" },
    { text: "watch the Bears win the Super Bowl", alignment: "self-end translate-y-[1cqw] pr-[10cqw]" },
    { text: "visit california", alignment: "self-start" },
    { text: "go backpacking", alignment: "self-start pl-[16cqw]" },
    { text: "film a day in the life vlog", alignment: "self-center" },
    { text: "run a half marathon", alignment: "self-end pr-[5cqw]" },
    { text: "pick up the guitar", alignment: "self-start pl-[6cqw]" },
    { text: "learn sleight-of-hand magic", alignment: "self-end pr-[10cqw]" },
    { text: "cook roast duck at home", alignment: "self-center" },
    { text: "see a rocket launch", alignment: "self-start pl-[15cqw]" },
    { text: "go to lollapalooza", alignment: "self-end translate-y-[1cqw] pr-[14cqw]" },
    { text: "learn chess", alignment: "self-start pl-[3cqw]" },
    { text: "solve the neetcode 250", alignment: "self-start translate-y-[1.5cqw] pl-[20cqw]" },
];

export default function Bonus({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <div className="flex items-baseline justify-between">
                    <p className="text-[10cqw] leading-none">06 &nbsp;bonus</p>
                </div>

                <div className="mt-[7cqw] flex flex-1 flex-col justify-between pb-[8cqw]">
                    <p className="text-[2.6cqw] leading-none">my current plans:</p>
                    {plans.map(({ text, alignment }) => (
                        <p key={text} className={`text-[2.6cqw] leading-none ${alignment}`}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
