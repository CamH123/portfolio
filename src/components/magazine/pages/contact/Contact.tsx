"use client";

import { useEffect, useState } from "react";
import { PageProps } from "../types";

function formatCentralTime(date: Date) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    })
        .format(date)
        .toLowerCase()
        .replace(" ", "");
}

export default function Contact({ pageNumber }: PageProps) {
    // Starts null so server and client render the same markup, then fills in after mount.
    const [centralTime, setCentralTime] = useState<string | null>(null);

    useEffect(() => {
        const update = () => setCentralTime(formatCentralTime(new Date()));
        update();
        const interval = setInterval(update, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <p className="text-right text-[10cqw] leading-none">contact &nbsp;05</p>

                <div className="mt-[6cqw] flex flex-col items-end gap-[4cqw]">
                    <div className="text-right">
                        <p className="text-[2.3cqw] uppercase tracking-wide text-mag-black/60 leading-none">Email</p>
                        <a href="mailto:Cameron.h.1732@gmail.com" className="mt-[1cqw] block text-[3.1cqw] leading-snug">
                            Cameron.h.1732@gmail.com
                        </a>
                    </div>

                    <div className="text-right">
                        <p className="text-[2.3cqw] uppercase tracking-wide text-mag-black/60 leading-none">Elsewhere</p>
                        <a
                            href="https://linkedin.com/in/cameronh123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[1cqw] block text-[3.1cqw] leading-none"
                        >
                            linkedin.com/in/cameronh123
                        </a>
                        <a
                            href="https://github.com/CamH123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[0.6cqw] block text-[3.1cqw] leading-none"
                        >
                            github.com/CamH123
                        </a>
                        <a
                            href="/pages/contact/cameron_huang_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[0.6cqw] block text-[3.1cqw] leading-none"
                        >
                            resume.pdf
                        </a>
                    </div>

                    <div className="text-right">
                        <p className="text-[2.3cqw] uppercase tracking-wide text-mag-black/60 leading-none">Based In</p>
                        <p className="mt-[1cqw] text-[3.1cqw] leading-none">Chicago, IL &amp; Houston, TX</p>
                        <p className="mt-[0.6cqw] text-[3.1cqw] leading-none">my time: {centralTime ?? "--:--"} (CT)</p>
                    </div>
                </div>

                <div className="mt-auto text-right mb-[3cqw]">
                    <p className="text-[3.1cqw] leading-none">feel free to reach out!</p>
                </div>

                {/* <div className="mt-auto ml-[2cqw] flex flex-col gap-[3cqw]">

                    <div className="flex items-end gap-[3cqw]">
                        <div className="relative aspect-2/3 w-[20%]">
                            <Image
                                src="/pages/contact/contact.jpg"
                                alt="Contact, by Carl Sagan"
                                fill
                                sizes="(max-width: 39.99rem) 20vw, 10vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="ml-[2cqw] text-[3.1cqw] leading-snug">great book, would recommend :)</p>
                    </div>
                </div> */}
            </div>

            <div className={`absolute bottom-[3cqw] ${pageNumber % 2 === 1 ? "left-[3cqw]" : "right-[3cqw]"}`}>
                <p className="text-[2.5cqw] leading-none">{pageNumber}</p>
            </div>
        </div>
    );
}
