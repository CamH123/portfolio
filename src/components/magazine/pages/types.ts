import { ReactNode } from "react";

export interface PageProps {
    pageNumber: number;
}

export interface Entity {
    title: string;
    subtitle: string;
    image: string;
    pageRange?: string;
    detailPages?: ((pageNumber: number) => ReactNode)[];
}

export interface Chapter {
    chapterNumber: string;
    chapterName: string;
    entityGroups: Entity[][];
}

export interface ProjectItemData {
    pageRange: string;
    title: string;
    subtitle: string;
    image: string;
}

export interface ChapterIndexProps extends PageProps {
    chapterNumber: string;
    chapterName: string;
    items: ProjectItemData[];
    showTitle?: boolean;
}

export interface NarrativeData {
    title: string;
    image: string;
    caption: string;
    description: string;
}

export interface NarrativeProps extends PageProps {
    data: NarrativeData;
}

export interface MediaItem {
    image: string;
    caption: string;
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface MediaProps extends PageProps {
    items: MediaItem[];
    links?: ProjectLink[];
}
