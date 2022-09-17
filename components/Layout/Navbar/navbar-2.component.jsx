import Image from "next/image";
import Link from "next/link";
import BackIcon from "../../Elements/Icon/back.icon";

const Navbar2 = () => {
    return (
        <header className="sticky top-0 z-50 bg-white drop-shadow-sm px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className=" grid grid-cols-4 place-content-center place-items-center h-20">
                <div className="col-span-1">
                    <a href='/'>
                        <BackIcon/>
                    </a>
                </div>
                <div className="col-span-2 ">
                    <a className="block text-teal-600 flex flex-wrap items-center content-center" href="/">
                        <span className="sr-only">Home</span>
                        <Image src="/logo(Logo)(500 × 200 px)(1).svg" width={120} height={67}/>
                    </a>
                </div>
            </div>

        </header>
    );
};

export default Navbar2;