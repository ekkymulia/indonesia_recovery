import Image from "next/image";
import { useEffect, useState } from "react";
import NewsCard from "../../Cards/NewsCard/news-card.card";

import { Artikel } from "../../../data/artikel";
import { categoryHighlightData } from "../../../data/category";

const NewsHighlight = ({ClassName} = props) => {
    const [dropdown, setDropdown] = useState(false);
    const [category, setCategory] = useState('')
    const [news, setNews] = useState([])
    const [currentNews, setCurrentNews] = useState(0)

    useEffect(() => {
        setCategory(categoryHighlightData.filter((item) => item.slug == 'highlight_news')[0])
    }, []);

    useEffect(() => (
        setNews(Artikel.filter((item) => (item.category_slug == category.slug ? item : null)))
    ),[category])

    const nextButton = () => {
        console.log("next pressed")
        setCurrentNews(currentNews < news.length-1 ? currentNews+1 : 0)
    }

    const prevButton = () => {
        console.log("prev pressed")
        setCurrentNews(currentNews != 0 ? currentNews-1 : news.length-1)
    }


    return (
        <div className={`grid grid-cols-12 ${ClassName}`}>
            <div className="hidden lg:block col-span-12 lg:col-span-4">
                <ul className=" space-y-3">

                    {
                        categoryHighlightData.map((item) => {
                            return category.slug == item.slug ? (
                                <li class="ml-3 font-semibold flex items-center group cursor-pointer">
                                    <svg className="-translate-x-6" width="20" height="20" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.0279 15.3823C23.2387 15.256 23.4116 15.0859 23.5319 14.8866C23.6522 14.6873 23.7163 14.4648 23.7186 14.2383C23.7208 14.0118 23.6613 13.7881 23.545 13.5865C23.4287 13.3848 23.2592 13.2112 23.0511 13.0807L2.74522 0.274767C2.51101 0.126547 2.23583 0.038242 1.94958 0.0194437C1.66333 0.000645379 1.37695 0.0520741 1.12156 0.168142C0.86617 0.28421 0.651535 0.460479 0.500977 0.677796C0.350419 0.895114 0.269694 1.14517 0.267575 1.40079L0.0140562 26.6015C0.0126732 26.8565 0.0893658 27.1072 0.235886 27.3267C0.382406 27.5461 0.59321 27.7259 0.845628 27.8468C1.09805 27.9677 1.38253 28.0251 1.66848 28.0128C1.95443 28.0006 2.23103 27.9191 2.46854 27.7771L23.0279 15.3823Z" fill="#FF0909"/>
                                    </svg>
                                    <a className="-translate-x-4 hover:-translate-x-3 transition-transform hover:duration-300">{item.text}</a>
                                </li>
                            ) : (
                                <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(item)}>
                                    <a className="-translate-x-4">{item.text}</a>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            <div className="col-span-12 lg:col-span-4 my-5 block lg:hidden">
                <ul className=" space-y-3">
                    <li class="ml-3 font-semibold flex items-center group cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                        {
                            dropdown ? (
                                <svg className="-translate-x-5 rotate-90 transition-transform" width="20" height="20" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.0279 15.3823C23.2387 15.256 23.4116 15.0859 23.5319 14.8866C23.6522 14.6873 23.7163 14.4648 23.7186 14.2383C23.7208 14.0118 23.6613 13.7881 23.545 13.5865C23.4287 13.3848 23.2592 13.2112 23.0511 13.0807L2.74522 0.274767C2.51101 0.126547 2.23583 0.038242 1.94958 0.0194437C1.66333 0.000645379 1.37695 0.0520741 1.12156 0.168142C0.86617 0.28421 0.651535 0.460479 0.500977 0.677796C0.350419 0.895114 0.269694 1.14517 0.267575 1.40079L0.0140562 26.6015C0.0126732 26.8565 0.0893658 27.1072 0.235886 27.3267C0.382406 27.5461 0.59321 27.7259 0.845628 27.8468C1.09805 27.9677 1.38253 28.0251 1.66848 28.0128C1.95443 28.0006 2.23103 27.9191 2.46854 27.7771L23.0279 15.3823Z" fill="#FF0909"/>
                                </svg>
                            ) : (
                                <svg className="-translate-x-5" width="20" height="20" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.0279 15.3823C23.2387 15.256 23.4116 15.0859 23.5319 14.8866C23.6522 14.6873 23.7163 14.4648 23.7186 14.2383C23.7208 14.0118 23.6613 13.7881 23.545 13.5865C23.4287 13.3848 23.2592 13.2112 23.0511 13.0807L2.74522 0.274767C2.51101 0.126547 2.23583 0.038242 1.94958 0.0194437C1.66333 0.000645379 1.37695 0.0520741 1.12156 0.168142C0.86617 0.28421 0.651535 0.460479 0.500977 0.677796C0.350419 0.895114 0.269694 1.14517 0.267575 1.40079L0.0140562 26.6015C0.0126732 26.8565 0.0893658 27.1072 0.235886 27.3267C0.382406 27.5461 0.59321 27.7259 0.845628 27.8468C1.09805 27.9677 1.38253 28.0251 1.66848 28.0128C1.95443 28.0006 2.23103 27.9191 2.46854 27.7771L23.0279 15.3823Z" fill="#FF0909"/>
                                </svg>
                            )
                        }
                        <a className="-translate-x-3 hover:-translate-x-4 transition-transform hover:duration-300">Select Category</a>
                    </li>
                
                    {
                        dropdown == true ? (
                            <>
                                {
                                    categoryHighlightData.map((item) => {
                                        return (
                                            <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300" onClick={() => setCategory(item)}>
                                                <a className="-translate-x-3">{item.text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </>
                        ):( 
                            <></>
                        )
                    }

                </ul>
            </div>

            <div className="col-span-12 lg:col-span-8">
                <div className="grid place-content-between lg:grid-flow-col place-items-center">
                    <div>
                        <h3 className="font-bold text-3xl my-2">{category.text}</h3>
                        <span>This Information will blow your mind!</span>
                    </div>
                    <div className="mt-3 lg:mt-0 hidden lg:block">
                        <button onClick={() => prevButton()}
                        class="p-3 text-red-600 border rounded-full transition-colors border-current hover:outline-none hover:bg-red-600 hover:text-white "
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
                
                        <button onClick={() => nextButton()}
                        class="p-3 ml-3 text-red-600 border rounded-full border-current hover:outline-none hover:bg-red-600 hover:text-white "
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

                {
                    news[currentNews] != undefined ? (
                        <NewsCard newsData={news[currentNews]}/>
                    ) : (<></>)

                }

                <div className="mt-3 lg:mt-0 block lg:hidden">
                <button onClick={() => prevButton()}
                class="p-3 text-red-600 border rounded-full transition-colors border-current active:outline-none active:bg-red-600 active:text-white "
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
        
                <button onClick={() => nextButton()}
                class="p-3 ml-3 text-red-600 border rounded-full border-current active:outline-none active:bg-red-600 active:text-white "
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
        </div>
    );
};

export default NewsHighlight;