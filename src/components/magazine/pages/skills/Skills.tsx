import { PageProps } from "../types";

const skillCategories = [
    {
        label: "Languages",
        items: ["Python", "Java", "TypeScript", "JavaScript", "Go", "C#", "C", "Haskell", "HTML/CSS", "SQL", "R"],
    },
    {
        label: "Technology",
        items: ["React", "Node", "Express", "Next.js", "FastAPI", "Tailwind CSS", "PostgreSQL", "SQL Server", "MongoDB"],
    },
    {
        label: "Tools",
        items: ["Linux", "Git", "GitHub", "AWS", "Docker", "Jira", "Figma", "Claude Code"],
    },
    {
        label: "Machine Learning",
        items: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "YOLO", "LangChain", "Ollama"],
    },
    {
        label: "Misc",
        items: ["Making Balloon Animals", "Speed Running LinkedIn Games", "Taking Very Long Walks", "Drinking Coffee"],
    },
];

export default function Skills({ pageNumber }: PageProps) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-mag-white shadow-lg">
            <div className="flex h-full w-full flex-col p-7">
                <p className="text-[10cqw] leading-none">04 &nbsp;skills</p>

                <div className="mt-[8cqw] flex flex-col gap-[4cqw]">
                    {skillCategories.map(({ label, items }) => (
                        <div key={label}>
                            <p className="text-[2.3cqw] uppercase tracking-wide text-mag-black/60 leading-none">{label}</p>
                            <p className="mt-[1cqw] text-[3.1cqw] leading-snug">{items.join(", ")}</p>
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
