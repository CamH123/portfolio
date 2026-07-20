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
