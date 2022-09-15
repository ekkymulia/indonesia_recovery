import TrendingNewsComponent from "../Cards/TrendingNewsCard/trending-news-card.card";
import RedDot from "../Elements/RedDot/red-dot.element";

const MostViewed = ({ClassName} = props) => {
    return (
        <div className={` ${ClassName}`}>
            <div className="col-span-12 grid grid-cols-12 pb-3 border-b-4 border-red-500">
                    <ul className="col-span-12 place-content-around space-y-1 md:space-y-0 md:flex "> 
                        <li>
                            <a><span className="font-semibold">Socio-Economics</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400">Education & Innovation</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400">Tech Engineering</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400">Environtment</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400">Book Club</span></a>
                        </li>
                        <li>
                            <a><span className="text-gray-400">Research</span></a>
                        </li>
                    </ul>
            </div>
            <diV className="grid grid-cols-12">
                <div className="col-span-7 grid grid-cols-12">
                    <div className="grid grid-flow-col place-items-center col-span-12 
                                    place-content-start space-x-4 my-12">
                        <RedDot/> <span className="text-3xl"> Most Viewed</span>
                    </div>
                    <div className="col-span-12">
                        <TrendingNewsComponent tag="" title="G20: Indonesia Recover" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                        imgLink="/g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news"/>

                        <TrendingNewsComponent tag="" title="G20: Indonesia Recover" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                        imgLink="/g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news"/>

                        <TrendingNewsComponent tag="" title="G20: Indonesia Recover" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                        imgLink="/g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news"/>
                    </div>
                </div>
                <div className="col-span-5">
                
                </div>
            </diV>
        </div>
    );
};

export default MostViewed;