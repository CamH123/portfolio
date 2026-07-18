import Cover from "./pages/Cover"
import About from "./pages/about/About"

export default function Magazine() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full max-h-full items-stretch justify-center p-4">
                {/* Left page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25">
                    <About pageNumber={1} side="left"/>
                </div>

                {/* Right page */}
                <div className="@container h-full max-h-full w-auto aspect-1/1.25 overflow-hidden">
                    
                </div>
            </div>
        </div>
    )
}