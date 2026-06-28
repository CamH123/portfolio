import Image from "next/image";
import Header from "../components/header/Header";
import Magazine from "../components/magazine/Magazine";

export default function Home() {
	
	return (
		<div className="relative h-screen w-screen overflow-hidden">
	  		<Image src="/desk/wood.jpg" alt="" fill className="object-cover" priority />

	  		<div className="relative z-10 flex flex-col h-full m-7.5">
				<div className="h-[15%] w-full flex items-center justify-center">
					<Header />
				</div>

				<div className="flex-1 w-full flex items-center justify-center">
					<Magazine />
				</div>
	  		</div>
		</div>
  );
}
