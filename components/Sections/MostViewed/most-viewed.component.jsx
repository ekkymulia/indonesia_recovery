import { useState } from "react";
import ReadListCard from "../../Cards/ReadListCard/read-list-card.card";
import TrendingNewsComponent from "../../Cards/TrendingNewsCard/trending-news-card.card";
import RedDot from "../../Elements/RedDot/red-dot.element";

export const MvCategory = {
    socio_economics: 'Socio-Economics',
    education_innovation: 'Education & Innovation',
    tech: 'Tech Engineering',
    environment: 'Environment',
    book_club: 'Book Club',
    research: 'Research'
}

const MostViewed = ({ClassName} = props) => {
    const [dropdown, setDropdown] = useState(false);
    const [category, setCategory] = useState(MvCategory.socio_economics)


    return (
        <div className={` ${ClassName}`}>
            <div className="col-span-12 grid grid-cols-12 pb-3 border-b-4 border-red-500">
                    <ul className="hidden md:block col-span-12 place-content-around space-y-1 md:space-y-0 md:flex "> 
                        <li onClick={() => setCategory(MvCategory.socio_economics)}>
                            {
                                category == MvCategory.socio_economics ? (
                                    <a className="font-semibold">{MvCategory.socio_economics}</a>
                                ) : (
                                    <a className="text-gray-400 hover:text-gray-600 cursor-pointer">{MvCategory.socio_economics}</a>
                                )
                            }
                        </li>
                        <li onClick={() => setCategory(MvCategory.education_innovation)}>
                            {
                                category == MvCategory.education_innovation ? (
                                    <a className="font-semibold">{MvCategory.education_innovation}</a>
                                ) : (
                                    <a className="text-gray-400 hover:text-gray-600 cursor-pointer">{MvCategory.education_innovation}</a>
                                )
                            }
                        </li>
                        <li onClick={() => setCategory(MvCategory.tech)}>
                            {
                                category == MvCategory.tech ? (
                                    <a className="font-semibold">{MvCategory.tech}</a>
                                ) : (
                                    <a className="text-gray-400 hover:text-gray-600 cursor-pointer">{MvCategory.tech}</a>
                                )
                            }
                        </li>
                        <li onClick={() => setCategory(MvCategory.environment)}>
                            {
                                category == MvCategory.environment ? (
                                    <a className="font-semibold">{MvCategory.environment}</a>
                                ) : (
                                    <a className="text-gray-400 hover:text-gray-600 cursor-pointer">{MvCategory.environment}</a>
                                )
                            }
                        </li>
                        <li onClick={() => setCategory(MvCategory.book_club)}>
                            {
                                category == MvCategory.book_club ? (
                                    <a className="font-semibold">{MvCategory.book_club}</a>
                                ) : (
                                    <a className="text-gray-400 hover:text-gray-600 cursor-pointer">{MvCategory.book_club}</a>
                                )
                            }
                        </li>
                        <li onClick={() => setCategory(MvCategory.research)}>
                            {
                                category == MvCategory.research ? (
                                    <a className="font-semibold">{MvCategory.research}</a>
                                ) : (
                                    <a className="text-gray-400 hover:text-gray-600 cursor-pointer">{MvCategory.research}</a>
                                )
                            }
                        </li>
                    </ul>

                    <ul className="block md:hidden space-y-3 col-span-12 ">
                        <li class="ml-3 font-semibold flex items-center group cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                            <a className="-translate-x-3 hover:-translate-x-4 transition-transform hover:duration-300">{category}</a>
                        </li>
                        {
                            dropdown == true ? (
                                <>
                                    <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(MvCategory.socio_economics)}>
                                        <a className="text-gray-400 active:text-gray-600 cursor-pointer">{MvCategory.socio_economics}</a>
                                    </li>
                                    <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(MvCategory.education_innovation)}>
                                        <a className="text-gray-400 active:text-gray-600 cursor-pointer">{MvCategory.education_innovation}</a>
                                    </li>
                                    <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(MvCategory.tech)}>
                                        <a className="text-gray-400 active:text-gray-600 cursor-pointer">{MvCategory.tech}</a>
                                    </li>
                                    <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(MvCategory.environment)}>
                                        <a className="text-gray-400 active:text-gray-600 cursor-pointer">{MvCategory.environment}</a>
                                    </li>
                                    <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(MvCategory.book_club)}>
                                        <a className="text-gray-400 active:text-gray-600 cursor-pointer">{MvCategory.book_club}</a>
                                    </li>
                                    <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(MvCategory.research)}>
                                        <a className="text-gray-400 active:text-gray-600 cursor-pointer">{MvCategory.research}</a>
                                    </li>
                                </>
                            ):( 
                                <></>
                            )
                        }
                    </ul>
            </div>
            <div className="grid grid-flow-col place-items-center col-span-12 
                            place-content-start space-x-4 my-12">
                <RedDot/> <span className="text-3xl"> Most Viewed</span>
            </div>
            <diV className="grid grid-cols-12 lg:gap-x-8">
                <div className="col-span-12 lg:col-span-8 grid grid-cols-12">
                    <div className="col-span-12">
                        <TrendingNewsComponent tag="" title="G20: Indonesia Recover" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                        imgLink="/g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news/as"/>

                        <TrendingNewsComponent tag="" title="G20: Indonesia Recover" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                        imgLink="/g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news/as"/>

                        <TrendingNewsComponent tag="" title="G20: Indonesia Recover" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                        imgLink="/g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news/as"/>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 p-2.5 hidden lg:block">
                    <div>
                        <span className="font-semibold text-sm">Reading List</span>
                        <div className="space-y-8 mt-4">
                            <ReadListCard/>
                            <ReadListCard/>
                            <ReadListCard/>

                            <div>
                                <span className="font-semibold text-sm text-red-600">View All</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="font-semibold text-sm">Followed Topic</span>
                    </div>
                </div>
            </diV>
        </div>
    );
};

export default MostViewed;