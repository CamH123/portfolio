import { ReactNode } from "react"
import Cover from "./pages/Cover"
import BackCover from "./pages/BackCover"
import About from "./pages/about/About"
import AboutCollage from "./pages/about/AboutCollage"
import ChapterIndex from "./pages/chapter-index/ChapterIndex"
import Skills from "./pages/skills/Skills"
import Contact from "./pages/contact/Contact"
// import Bonus from "./pages/bonus/Bonus"
// import Bonus2 from "./pages/bonus/Bonus2"
import { Chapter, Entity, ProjectItemData } from "./pages/types"

function formatPageRange(pageNumbers: number[]): string {
    if (pageNumbers.length === 0) return "";
    if (pageNumbers.length === 1) return `${pageNumbers[0]}`;
    return `${pageNumbers[0]} — ${pageNumbers[pageNumbers.length - 1]}`;
}

// Book indices (array position, used for flipping to a page) for each nav section,
// keyed to match the header's section titles / chapter names.
export type SectionRange = { start: number; end: number };
export type PageSections = Record<string, SectionRange>;

export function buildPages(chapters: Chapter[]): { pages: ReactNode[]; sections: PageSections } {
    // 0. Init Page Array
    const pages: ReactNode[] = [<Cover key="cover" />];
    const sections: PageSections = { cover: { start: 0, end: 0 } };
    let pageNumber = 1;

    // 1. Add About Section
    const aboutStart = pages.length;
    pages.push(<About key="about" pageNumber={pageNumber} />);
    pageNumber++;

    pages.push(<AboutCollage key="about-collage" pageNumber={pageNumber} />);
    pageNumber++;
    sections.about = { start: aboutStart, end: pages.length - 1 };

    // 2. Add experience and project sections
    for (const chapter of chapters) {
        const sectionStart = pages.length;
        const indexPageNumbers = chapter.entityGroups.map(() => pageNumber++);

        const entities = chapter.entityGroups.flat();
        const detailPageNumbers = new Map<Entity, number[]>();
        for (const entity of entities) {
            if (entity.detailPages) {
                detailPageNumbers.set(entity, entity.detailPages.map(() => pageNumber++));
            }
        }
        
        // 2.1 Create Index Pages
        chapter.entityGroups.forEach((group, i) => {
            const items: ProjectItemData[] = group.map((entity) => ({
                pageRange: entity.pageRange ?? formatPageRange(detailPageNumbers.get(entity) ?? []),
                title: entity.title,
                subtitle: entity.subtitle,
                image: entity.image,
            }));

            pages.push(
                <ChapterIndex
                    key={`${chapter.chapterName}-index-${i}`}
                    pageNumber={indexPageNumbers[i]}
                    chapterNumber={chapter.chapterNumber}
                    chapterName={chapter.chapterName}
                    items={items}
                    showTitle={i === 0}
                />
            );
        });

        // 2.2 Create Information Paages
        for (const entity of entities) {
            const numbers = detailPageNumbers.get(entity);
            if (entity.detailPages && numbers) {
                entity.detailPages.forEach((renderPage, i) => pages.push(renderPage(numbers[i])));
            }
        }

        sections[chapter.chapterName] = { start: sectionStart, end: pages.length - 1 };
    }

    // 3. Add Skills page
    const skillsIndex = pages.length;
    pages.push(<Skills key="skills" pageNumber={pageNumber} />);
    pageNumber++;
    sections.skills = { start: skillsIndex, end: skillsIndex };

    // 4. Add Contact page
    const contactIndex = pages.length;
    pages.push(<Contact key="contact" pageNumber={pageNumber} />);
    pageNumber++;
    sections.contact = { start: contactIndex, end: contactIndex };

    // 5. Add Bonus section
    // const bonusIndex = pages.length;
    // pages.push(<Bonus key="bonus" pageNumber={pageNumber} />);
    // pageNumber++;
    // pages.push(<Bonus2 key="bonus-2" pageNumber={pageNumber} />);
    // pageNumber++;
    // sections.bonus = { start: bonusIndex, end: pages.length - 1 };

    // 6. Add Back Cover
    pages.push(<BackCover key="back-cover" />);
    pageNumber++;
    // sections.bonus = { start: bonusIndex, end: pages.length - 1 };

    return { pages, sections };
}
