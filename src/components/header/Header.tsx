"use client";

import NavigationButton from "./NavigationButton";
import { useMagazine } from "../magazine/MagazineContext";

const sections = [
  { number: 0, title: "cover" },
  { number: 1, title: "about" },
  { number: 2, title: "experience" },
  { number: 3, title: "projects" },
  { number: 4, title: "skills" },
  { number: 5, title: "contact" },
  // { number: 6, title: "bonus" },
];

export default function Header() {
  const { flipToPage } = useMagazine();

  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 border-b border-mag-white pb-1 text-mag-white text-shadow-xs sm:flex-row sm:items-end sm:gap-0 sm:px-6">
      <div>
        <button onClick={() => flipToPage(0)}>
          <h1 className="text-[clamp(1.75rem,3vw,3rem)] font-normal">Cameron Huang</h1>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 sm:gap-5">
        {sections.map((s) => (
          <NavigationButton key={s.number} sectionNumber={s.number} sectionTitle={s.title} />
        ))}
      </div>
    </div>
  );
}
