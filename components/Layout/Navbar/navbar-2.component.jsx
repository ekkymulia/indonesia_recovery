import Image from "next/image";
import Link from "next/link";
import BackIcon from "../../Elements/Icons/back.icon";
import React, {useEffect, useState} from "react";

const Navbar2 = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onscroll = ()=>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100
        setScrollTop(scrolled)
    }

    useEffect(()=>{
        window.addEventListener("scroll", onscroll)
        return () => window.removeEventListener("scroll", onscroll)
    }, []); 
    
    return (
        <header className="sticky top-0 z-50 bg-white drop-shadow-lg">
            <div className="grid grid-cols-4 place-content-center place-items-center h-20 mx-auto max-w-screen-xl">
                <div className="col-span-1">
                    <a href='/'>
                        <BackIcon/>
                    </a>
                </div>
                <div className="col-span-2 ">
                    <a className="block text-teal-600 flex flex-wrap items-center content-center" href="/">
                        <span className="sr-only">Home</span>
                        <Image src="/svg/logo(Logo)(500 × 200 px)(1).svg" width={120} height={67}/>
                    </a>
                </div>
            </div>
            
            <div className="border-b-[4px] border-red-500 w-screen" style={{ width: `${scrollTop}%` }} id="myBar"></div>
        </header>
        
    );
};

export default Navbar2;