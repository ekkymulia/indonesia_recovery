import Image from "next/image";
import FmitaCategory from "../FmitaCategory/fmita-category.component";
import NewsCard from "../Cards/NewsCard/news-card.card";

const NewsHighlight = ({ClassName} = props) => {
    return (
        <div className={`grid grid-cols-12 ${ClassName}`}>
            <div className="col-span-12 md:col-span-4">
                <span className="text-lg font-semibold">News Category</span><br/>
                <ul className=" space-y-3">
                    <li class="ml-3 font-semibold">Hightlight News</li>
                    <li class="ml-3 text-gray-600">Technology Updates</li>
                    <li class="ml-3 text-gray-600">Socio Economics</li>
                    <li class="ml-3 text-gray-600">Recently</li>
                </ul>
            </div>
            <div className="col-span-12 md:col-span-8">
                <div className="grid place-content-between sm:grid-flow-col place-items-center">
                    <div>
                        <h3 className="font-bold text-3xl my-2">News Highlight ⚡⚡</h3>
                        <span>This Information will blow your mind!</span>
                    </div>
                    <div className="mt-3 md:mt-0">
                        <button
                        class="p-3 text-red-600 border rounded-full transition-colors border-current focus:outline-none focus:bg-red-600 focus:text-white"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 transform -rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                            />
                        </svg>
                        </button>
                
                        <button
                        class="p-3 ml-3 text-red-600 border rounded-full border-current focus:outline-none focus:bg-red-600 focus:text-white"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                            />
                        </svg>
                        </button>
                  </div>
                </div>
                <NewsCard/>

            </div>
        </div>
    );
};

export default NewsHighlight;