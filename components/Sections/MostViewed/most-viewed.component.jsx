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
                        <li class="ml-3 font-semibold grid grid-flow-col place-content-between group cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                            <a className="-translate-x-3 hover:-translate-x-4 transition-transform hover:duration-300">{category}</a>
                            {
                                dropdown ? (
                                    <svg className="-translate-x-5 -rotate-90 transition-transform" width="20" height="20" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.0279 15.3823C23.2387 15.256 23.4116 15.0859 23.5319 14.8866C23.6522 14.6873 23.7163 14.4648 23.7186 14.2383C23.7208 14.0118 23.6613 13.7881 23.545 13.5865C23.4287 13.3848 23.2592 13.2112 23.0511 13.0807L2.74522 0.274767C2.51101 0.126547 2.23583 0.038242 1.94958 0.0194437C1.66333 0.000645379 1.37695 0.0520741 1.12156 0.168142C0.86617 0.28421 0.651535 0.460479 0.500977 0.677796C0.350419 0.895114 0.269694 1.14517 0.267575 1.40079L0.0140562 26.6015C0.0126732 26.8565 0.0893658 27.1072 0.235886 27.3267C0.382406 27.5461 0.59321 27.7259 0.845628 27.8468C1.09805 27.9677 1.38253 28.0251 1.66848 28.0128C1.95443 28.0006 2.23103 27.9191 2.46854 27.7771L23.0279 15.3823Z" fill="#FF0909"/>
                                    </svg>
                                ) : (
                                    <svg className="-translate-x-5 rotate-90" width="20" height="20" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.0279 15.3823C23.2387 15.256 23.4116 15.0859 23.5319 14.8866C23.6522 14.6873 23.7163 14.4648 23.7186 14.2383C23.7208 14.0118 23.6613 13.7881 23.545 13.5865C23.4287 13.3848 23.2592 13.2112 23.0511 13.0807L2.74522 0.274767C2.51101 0.126547 2.23583 0.038242 1.94958 0.0194437C1.66333 0.000645379 1.37695 0.0520741 1.12156 0.168142C0.86617 0.28421 0.651535 0.460479 0.500977 0.677796C0.350419 0.895114 0.269694 1.14517 0.267575 1.40079L0.0140562 26.6015C0.0126732 26.8565 0.0893658 27.1072 0.235886 27.3267C0.382406 27.5461 0.59321 27.7259 0.845628 27.8468C1.09805 27.9677 1.38253 28.0251 1.66848 28.0128C1.95443 28.0006 2.23103 27.9191 2.46854 27.7771L23.0279 15.3823Z" fill="#FF0909"/>
                                    </svg>
                                )
                            }
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
            <div className="grid grid-cols-12 lg:gap-x-8">
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
            </div>
        </div>
    );
};

export default MostViewed;