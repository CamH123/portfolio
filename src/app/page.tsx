import Image from "next/image";
import Header from "../components/header/Header";
import Magazine from "../components/magazine/Magazine";
import { MagazineProvider } from "../components/magazine/MagazineContext";
import StickyNote from "../components/magazine/StickyNote";

export default function Home() {

	return (
		<div className="relative h-dvh w-full overflow-hidden sm:h-screen">
			<Image src="/desk/wood.jpg" alt="" fill sizes="100vw" className="object-cover" priority />

			<MagazineProvider>
				<div className="relative z-10 flex h-dvh flex-col p-4 sm:h-full sm:min-h-0 sm:p-7.5 sm:pt-1">
					<div className="mx-auto flex w-full items-center justify-center sm:h-[15%] sm:w-11/12">
						<Header />
					</div>

					<div className="relative flex-1 w-11/12 mx-auto flex items-center justify-center">
						<StickyNote />
						<Magazine />
					</div>
				</div>
			</MagazineProvider>
		</div>
  );
}
