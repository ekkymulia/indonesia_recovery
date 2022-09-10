import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component';
import { redirect } from 'next/dist/server/api-utils';
import autoprefixer from 'autoprefixer';
import CategoryCard from "../components/CategoryCard/category-card.component";

export default function News(){
    return(
<Layout>
             <aside
    className="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
    >
        
      <div className="p-8 md:p-12 lg:px-20 lg:py-10 bg-white">
        <div className="max-w-lg text-center sm:text-left">
            <div className="flex flex-wrap my-3">
            <span className="mt-2 sm:mt-0 text-black text-1xl">24 August 2022</span>
            <span className="ml-10 mt-2 sm:mt-0 text-red-400 text-1xl">Technology</span>
            </div>
          <h2 className="text-2xl font-reguler text-black sm:text-4xl">
            <b>Holograms make learning so much easier</b>
          </h2>
        </div>
      </div>
    </aside>
<section>
    <div class="mx-auto max-w-screen-xl sm:px-12">
    <p className="text-red-600"><b>G20 Indonesia 2022</b></p>
    <p className="text-red-400">Media Partner SDG Campaign</p>
        <div class="mt-3 grid grid-cols-1 gap-8 lg:gap-16 lg:gap-r-24 lg:grid-cols-12 mb-10">
            <div class="relative h-64 sm:h-80 lg:h-full col-span-7">
            <div>
                <img
                src={"./hologram2.jpg"}
                style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                alt=""
                className="object-cover mx-auto shadow-xl"
                />

                <blockquote
                className="px-10 py-10 rounded-lg shadow-xl
                "
                >
                <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
                    <h1 className="text-black text-3xl font-reguler">5 Min</h1>
                    <div className=" border-b-[3px] border-red-500 w-28"/>
                    <p className="text-red-600 mt-3">Reading</p>
                </a> 
                <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group  focus:outline-none focus:ring ml-20">
                    <h1 className="text-black text-3xl font-reguler">80+</h1>
                    <div className=" border-b-[3px] border-red-500 w-28"/>
                    <p className="text-red-600 mt-3">Readers</p>
                </a>
                <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group  focus:outline-none focus:ring ml-20">
                    <h1 className="text-black text-3xl font-reguler">Keren</h1>
                    <div className=" border-b-[3px] border-red-500 w-28"/>
                    <p className="text-red-600 mt-3">Review</p>
                </a>
                </blockquote>
            </div>  
            <div className="mt-12">
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>

            <div class="relative h-64 sm:h-80 lg:h-full col-span-5 border-l-[5px] border-lg">
                <p className="text-red-500 ml-10 mt-5">Contributors</p>

                <div className=" border-b-[2px] border-red-500 ml-10 mt-10 w-50"/>

                <p className="text-red-500 ml-10 mt-5">Indonesia Recovery Updates</p>
        
                <a
                class="overflow-hidden border border-red-200 grid grid-cols-1 group sm:grid-cols-3 ml-10 mt-5 rounded-lg"
                href="/news"
                >
                <div class="p-8 sm:col-span-2">
                    <ul class="flex space-x-1">
                    <li
                        class="inline-block px-3 py-1 text-xs font-reguler text-white bg-red-600 rounded-full"
                    >
                        Technology
                    </li>
                    </ul>

                    <h5 class="mt-4 text-sm ">Sekolah Vokasi</h5>

                    <p class="text-sm text-black font-bold">
                    Hundreds of Student participated on Jakarta International Championship
                    </p>
                </div>
                <div class="relative">
                    <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/activity-1.jpeg"
                    alt=""
                    />
                </div>
                </a>

                <a
                class="overflow-hidden border border-red-200 grid grid-cols-1 group sm:grid-cols-3 ml-10 mt-5 rounded-lg"
                href="/news"
                >
                <div class="p-8 sm:col-span-2">
                    <ul class="flex space-x-1">
                    <li
                        class="inline-block px-3 py-1 text-xs font-reguler text-white bg-red-600 rounded-full"
                    >
                        Technology
                    </li>
                    </ul>

                    <h5 class="mt-4 text-sm ">Sekolah Vokasi</h5>

                    <p class="text-sm text-black font-bold">
                    Hundreds of Student participated on Jakarta International Championship
                    </p>
                </div>
                <div class="relative">
                    <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/activity-1.jpeg"
                    alt=""
                    />
                </div>
                </a>

                <a
                class="overflow-hidden border border-red-200 grid grid-cols-1 group sm:grid-cols-3 ml-10 mt-5 rounded-lg"
                href="/news"
                >
                <div class="p-8 sm:col-span-2">
                    <ul class="flex space-x-1">
                    <li
                        class="inline-block px-3 py-1 text-xs font-reguler text-white bg-red-600 rounded-full"
                    >
                        Technology
                    </li>
                    </ul>

                    <h5 class="mt-4 text-sm ">Sekolah Vokasi</h5>

                    <p class="text-sm text-black font-bold">
                    Hundreds of Student participated on Jakarta International Championship
                    </p>
                </div>
                <div class="relative">
                    <img
                    class="absolute inset-0 object-cover w-full h-full"
                    src="https://www.hyperui.dev/photos/activity-1.jpeg"
                    alt=""
                    />
                </div>
                </a>
                <div className=" border-b-[2px] border-red-500 ml-10 mt-10 w-50"/>
                <p className="text-red-500 ml-10 mt-5">Your Favorite!</p>
                
                </div>
        </div>
        
    </div>
</section>
</Layout>
    )
}