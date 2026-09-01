"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

type BusinessCardProps = {
    onClose: () => void
}

export default function BusinessCard({ onClose }: BusinessCardProps) {
    const dialogRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        dialogRef.current?.focus()

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-mag-black/60"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose()
            }}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Business card"
                tabIndex={-1}
                className="business-card-paper aspect-[16/9] w-[min(75vw,calc(84dvh*1.7778))] [container-type:inline-size]"
            >
                <div className="flex h-full flex-col justify-between p-[3cqw] text-mag-black">
                    <div className="space-y-[1cqw]">
                        <header>
                            <p className="text-[2.7cqw] leading-none font-bold">Cameron Huang</p>
                            <p className="mt-[0.5cqw] text-[1.4cqw] leading-tight">
                                Rice University · B.S. Computer Science and Minor in Data Science
                            </p>
                        </header>

                    </div>

                    <div className="grid grid-cols-[1fr_1.08fr] gap-[2.8cqw]">
                        <section className="border-r border-mag-black/70 pr-[2.8cqw]">
                            <h2 className="text-[1.65cqw] leading-none font-bold">Experience</h2>

                            <div className="mt-[1.8cqw] space-y-[1.6cqw] text-[1.25cqw] leading-[1.15]">
                                <article>
                                    <div className="flex items-baseline justify-between gap-[1cqw]">
                                        <h3 className="text-[1.45cqw] leading-none font-bold">AT&amp;T · Software Developer Intern</h3>
                                        <p className="shrink-0 text-mag-black/70">Summer 2026</p>
                                    </div>
                                    <p className="mt-[0.45cqw] text-[1.25cqw] leading-[1.15]">Modernized a legacy cell-tower logistics platform with React, TypeScript, and Tailwind CSS. Reworked tower visualization for server-side rendering, cutting generation time by 47% and raising test coverage from 5% to 92%.</p>
                                </article>

                                <article>
                                    <div className="flex items-baseline justify-between gap-[1cqw]">
                                        <h3 className="text-[1.45cqw] leading-none font-bold">AbbVie · Software Developer Intern</h3>
                                        <p className="shrink-0 text-mag-black/70">Summer 2025</p>
                                    </div>
                                    <p className="mt-[0.45cqw] text-[1.25cqw] leading-[1.15]">Architected an agentic compliance-review tool with Python, LangGraph, and AWS. OCR, RAG, and user testing improved review accuracy by 23% while reducing cycle time by 37%.</p>
                                </article>

                                <article>
                                    <div className="flex items-baseline justify-between gap-[1cqw]">
                                        <h3 className="text-[1.45cqw] leading-none font-bold">AbbVie · Data Science Intern</h3>
                                        <p className="shrink-0 text-mag-black/70">Summer 2024</p>
                                    </div>
                                    <p className="mt-[0.45cqw] text-[1.25cqw] leading-[1.15]">Engineered a Python and SQL pipeline for infusion-pump flow-rate data. Built automated analysis tools and corrected a continuous-infusion calculation error, improving dosage accuracy by 10%.</p>
                                </article>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-[1.65cqw] leading-none font-bold">Projects</h2>

                            <div className="mt-[1.8cqw] space-y-[1.2cqw]">
                                <ProjectPreview
                                    title="Pressurized Rover Intelligence Platform"
                                    description="Autonomous navigation and mission-planning interface for NASA’s Artemis lunar operations. Led a 20+ person team and built a PyTorch and LiDAR vision pipeline with 94% detection accuracy."
                                    image="/pages/projects/suits2026/auto_nav_demo.loop.poster.jpg"
                                />
                                <ProjectPreview
                                    title="AR Spacesuit Interface"
                                    description="Led a 10+ developer team building a HoloLens 2 interface for astronaut navigation and EVA support. Built real-time telemetry APIs; iterative testing reduced cognitive load by 26%."
                                    image="/pages/projects/suits2025/suits_2025_geo.poster.jpg"
                                />
                                <ProjectPreview
                                    title="RL Pong Agent"
                                    description="Trained a deep reinforcement-learning agent to play Pong using cloud computing. Compared model attention heat maps with human visual attention to explore how each reads the game."
                                    image="/pages/projects/pong/pong_late.loop.poster.jpg"
                                />
                            </div>
                        </section>
                    </div>

                    <footer className="text-[1.2cqw] leading-snug">
                        <p className="text-[1.5cqw] leading-none font-bold">Contact</p>
                        <div className="mt-[0.5cqw] flex flex-wrap gap-x-[0.8cqw] gap-y-[0.15cqw]">
                            <a href="mailto:Cameron.h.1732@gmail.com" className="underline-offset-[0.25cqw] hover:underline">Cameron.h.1732@gmail.com</a>
                            <span aria-hidden="true">|</span>
                            <a href="https://github.com/CamH123" target="_blank" rel="noopener noreferrer" className="underline-offset-[0.25cqw] hover:underline">github.com/CamH123</a>
                            <span aria-hidden="true">|</span>
                            <a href="https://linkedin.com/in/cameronh123" target="_blank" rel="noopener noreferrer" className="underline-offset-[0.25cqw] hover:underline">linkedin.com/in/cameronh123</a>
                            <span aria-hidden="true">|</span>
                            <a href="/pages/contact/cameron_huang_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline-offset-[0.25cqw] hover:underline">resume.pdf</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

type ProjectPreviewProps = {
    title: string
    description: string
    image: string
}

function ProjectPreview({ title, description, image }: ProjectPreviewProps) {
    return (
        <article className="flex items-center gap-[1.2cqw] border-b border-mag-black/70 pb-[1cqw] last:border-b-0 last:pb-0">
            <div className="min-w-0 flex-1">
                <h3 className="text-[1.4cqw] leading-tight font-bold">{title}</h3>
                <p className="mt-[0.45cqw] text-[1.25cqw] leading-[1.15]">{description}</p>
            </div>
            <div className="relative aspect-video w-[25%] shrink-0 overflow-hidden bg-mag-black">
                <Image src={image} alt={`${title} preview`} fill sizes="18vw" className="object-cover" />
            </div>
        </article>
    )
}
