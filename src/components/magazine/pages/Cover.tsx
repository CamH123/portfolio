import Image from "next/image";

export default function Cover() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <Image
                src="/pages/cover/suits1.jpg"
                alt="Cover background"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute left-2.5 top-1/2 h-[95%] w-0.5 -translate-y-1/2 border-l border-[#4E4E4E]" />

            <div className="absolute inset-0 p-5">
                <div className="flex h-full w-full flex-col justify-between drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                    <div className="self-start">
                        <p className="text-[10cqw] leading-none text-mag-white ">
                            Cameron
                            <br />
                            <span className="ml-[0.07em]">Huang</span>
                        </p>
                    </div>

                    <div className="flex w-full items-end justify-between">
                        <div className="flex flex-col gap-0.4">
                            <p className="text-[2.6cqw] leading-none text-mag-white">
                                01 &nbsp;&nbsp; About
                            </p>
                            <p className="text-[2.6cqw] leading-none text-mag-white">
                                02 &nbsp;&nbsp; Experience
                            </p>
                            <p className="text-[2.6cqw] leading-none text-mag-white">
                                03 &nbsp;&nbsp; Projects
                            </p>
                            <p className="text-[2.6cqw] leading-none text-mag-white">
                                04 &nbsp;&nbsp; Skills
                            </p>
                            <p className="text-[2.6cqw] leading-none text-mag-white">
                                05 &nbsp;&nbsp; Contact
                            </p>
                            <p className="text-[2.6cqw] leading-none text-mag-white">
                                06 &nbsp;&nbsp; Bonus
                            </p>
                        </div>

                        <div className="flex flex-col items-end text-right gap-0">
                            <p className="text-[3.4cqw] leading-none text-mag-white">
                                THE DEVELOPER ISSUE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}