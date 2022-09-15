import Image from "next/image";
import Link from "next/link";
import BackIcon from "../../Elements/Icon/back.icon";

const Navbar2 = () => {
    return (
        <header className="grid grid-cols-3 place-content-center place-items-center">
            <div className="">
                <a href='/'>
                    <BackIcon/>
                </a>
            </div>
            <div>
                <a className="block text-teal-600flex flex-wrap items-center content-center" href="/">
                    <span className="sr-only">Home</span>
                    <Image src="/logo(Logo)(500 × 200 px)(1).svg" width={120} height={67}/>
                </a>
            </div>
        </header>
    );
};

export default Navbar2;