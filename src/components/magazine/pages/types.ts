export interface PageProps {
    pageNumber: number;
}

export interface ProjectItemData {
    pageRange: string;
    title: string;
    subtitle: string;
    image: string;
}

export interface ProjectContentsProps extends PageProps {
    items: ProjectItemData[];
    showTitle?: boolean;
}

export interface ProjectInfoData {
    title: string;
    image: string;
    caption: string;
    description: string;
}

export interface ProjectInfoProps extends PageProps {
    data: ProjectInfoData;
}

export interface ProjectMediaItem {
    image: string;
    caption: string;
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectMediaProps extends PageProps {
    items: ProjectMediaItem[];
    links: ProjectLink[];
}
