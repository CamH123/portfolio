import { forwardRef, ReactNode } from "react"

type Side = "left" | "right"

// react-pageflip clones each child and forwards a ref to grab its DOM node.
const PageFrame = forwardRef<HTMLDivElement, { children: ReactNode; side: Side }>(
    function PageFrame({ children, side }, ref) {
        return (
            <div ref={ref} className="@container relative h-full w-full overflow-hidden shadow-2xl">
                {children}

                {/* Static shadow toward the spine, so the page reads as folded in 3D even at rest. */}
                <div
                    className={`pointer-events-none absolute inset-y-0 w-[6cqw] from-black/25 to-transparent ${
                        side === "left"
                            ? "right-0 bg-linear-to-l"
                            : "left-0 bg-linear-to-r"
                    }`}
                />
            </div>
        )
    }
)

export default PageFrame
