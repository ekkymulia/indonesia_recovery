import { useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import DesignPic from '../public/svg/Component.svg'

import Layout from '../components/Layout/layout.component'
import Fmita from "../components/Sections/Fmita/fmita.component";


export default function Custom404() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 2000);
    }, [])

    return (
        <Layout>
            <aside
            className="overflow-hidden bg-center bg-no-repeat bg-cover flex flex-wrap"
            >
            <div className="bg-white md:mr-8">
                <Image src={DesignPic} alt="404_graphic" width={700} height={760}/>
            </div>
            <div className="bg-white flex flex-wrap justify-around flex-col">
                <div className="flex flex-wrap flex-col">
                    <span className="font-semibold">Page not Found</span> <br/>
                    <h3 className="text-gray-500 text-7xl font-bold">404</h3>
                    <p className="text-2xl">Out of nothing, <br/> Something</p>
                  
                    <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring mt-20" href="/download">
                        <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                        <span className="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                        Back to Home
                        </span>
                    </a>
                </div>
            </div>
            </aside>

            <Fmita ClassName="p-8 mt-14 md:p-12 lg:px-20 lg:py-24"/>
        </Layout>
    );
}
