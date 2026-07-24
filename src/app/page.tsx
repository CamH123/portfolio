import Image from "next/image";
import Header from "../components/header/Header";
import Magazine from "../components/magazine/Magazine";

export default function Home() {
	
	return (
		<div className="relative h-screen w-screen overflow-hidden">
	  		<Image src="/desk/wood.jpg" alt="" fill className="object-cover" priority />

	  		<div className="relative z-10 flex flex-col h-full p-7.5 pt-1">
				<div className="h-[15%] w-11/12 mx-auto flex items-center justify-center">
					<Header />
				</div>

				<div className="flex-1 w-11/12 mx-auto flex items-center justify-center">
					<Magazine />
				</div>
	  		</div>
		</div>
  );
}
