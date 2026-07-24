import { ReactNode } from "react"
import Cover from "./pages/Cover"
import About from "./pages/about/About"
import AboutCollage from "./pages/about/AboutCollage"
import ChapterIndex from "./pages/chapter-index/ChapterIndex"
import { Chapter, Entity, ProjectItemData } from "./pages/types"

function formatPageRange(pageNumbers: number[]): string {
    if (pageNumbers.length === 0) return "";
    if (pageNumbers.length === 1) return `${pageNumbers[0]}`;
    return `${pageNumbers[0]} — ${pageNumbers[pageNumbers.length - 1]}`;
}

export function buildPages(chapters: Chapter[]): ReactNode[] {
    // 0. Init Page Array
    const pages: ReactNode[] = [<Cover key="cover" />];
    let pageNumber = 1;

    // 1. Add About Section
    pages.push(<About key="about" pageNumber={pageNumber} />);
    pageNumber++;

    pages.push(<AboutCollage key="about-collage" pageNumber={pageNumber} />);
    pageNumber++;

    // 2. Add experience and project sections
    for (const chapter of chapters) {
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
    }

    return pages;
}
