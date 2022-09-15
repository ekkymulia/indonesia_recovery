import ReadListCard from "../../Cards/ReadListCard/read-list-card.card";
import TrendingNewsComponent from "../../Cards/TrendingNewsCard/trending-news-card.card";
import RedDot from "../../Elements/RedDot/red-dot.element";

const MostViewed = ({ClassName} = props) => {
    return (
        <div className={` ${ClassName}`}>
            <div className="col-span-12 grid grid-cols-12 pb-3 border-b-4 border-red-500">
                    <ul className="col-span-12 place-content-around space-y-1 md:space-y-0 md:flex "> 
                        <li>
                            <a><span className="font-semibold">Socio-Economics</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400 hover:text-gray-600 cursor-pointer">Education & Innovation</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400 hover:text-gray-600 cursor-pointer">Tech Engineering</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400 hover:text-gray-600 cursor-pointer">Environtment</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400 hover:text-gray-600 cursor-pointer">Book Club</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400 hover:text-gray-600 cursor-pointer">Research</span></a>
                        </li>
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