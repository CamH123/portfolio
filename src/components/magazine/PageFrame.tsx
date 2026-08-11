import { forwardRef, ReactNode } from "react"

type Side = "left" | "right"

// react-pageflip clones each child and forwards a ref to grab its DOM node.
const PageFrame = forwardRef<HTMLDivElement, { children: ReactNode; side: Side }>(
    function PageFrame({ children, side }, ref) {
        return (
            <div ref={ref} className="@container relative h-full w-full overflow-hidden shadow-2xl">
                {children}

                <div className={`magazine-gutter magazine-gutter--${side}`} />
                <div className={`magazine-page-edge magazine-page-edge--${side}`} />
            </div>
        )
    }
)

export default PageFrame
