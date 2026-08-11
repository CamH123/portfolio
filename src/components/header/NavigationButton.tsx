"use client";

import { useMagazine } from "../magazine/MagazineContext";

type Props = {
  sectionNumber: number;
  sectionTitle: string;
};

export default function NavigationButton({ sectionNumber, sectionTitle }: Props) {
  const { currentPage, sections, flipToPage, isSinglePage } = useMagazine();
  const range = sections[sectionTitle];
  const spreadMate = currentPage % 2 === 0 ? currentPage - 1 : currentPage + 1;
  const lastSectionEnd = Math.max(...Object.values(sections).map((section) => section.end));
  const isBackCover = currentPage > lastSectionEnd;
  const isActive =
    !!range &&
    ((currentPage >= range.start && currentPage <= range.end) ||
      (!isSinglePage && spreadMate >= range.start && spreadMate <= range.end) ||
      (isBackCover && range.end === lastSectionEnd));

  const number = String(sectionNumber).padStart(2, "0");

  return (
    <button
      onClick={() => range && flipToPage(range.start)}
      className="group grid text-[clamp(0.875rem,1.2vw,1rem)]"
    >
      {/* invisible bold copy reserves the button's width so toggling real bold below never shifts layout */}
      <span className="invisible col-start-1 row-start-1 font-bold" aria-hidden="true">
        {number} {sectionTitle}
      </span>
      <span className={`col-start-1 row-start-1 ${isActive ? "font-bold" : "group-hover:font-bold"}`}>
        <span className={isActive ? "text-mag-amber" : ""}>{number}</span>{" "}
        <span className={isActive ? "text-mag-cerulean" : ""}>{sectionTitle}</span>
      </span>
    </button>
  );
}
