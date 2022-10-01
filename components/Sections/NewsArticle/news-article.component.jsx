import Image from "next/image";
import StarGray from "../../Elements/Icons/star-gray.component";
import CommentIcon from "../../Elements/Icons/comment-icon.icons";
import ShareIcon from "../../Elements/Icons/share-icon.icons";
import DownloadIcon from "../../Elements/Icons/download-icon.icons";
import Comment from "../comment/comment.component";

import { Artikel } from "../../../data/artikel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NewsArticle = () => {
    const router = useRouter();
    const { slug } = router.query

    return (

        <div className="md:p-12 lg:py-24 mb-12">

            {
                Artikel.filter((item) => item.slug == slug).map((artikel) => (
                    <>
                        <div className="px-8 lg:px-25">
                            <div className="my-1 grid grid-flow-col place-content-between text-sm lg:text-base">
                                <nav aria-label="Breadcrumb">
                                    <ol role="list" class="flex items-center gap-1 text-sm text-gray-500">
                                    <li>
                                        <a class="block transition-colors hover:text-gray-700" href="/"> Home </a>
                                    </li>
                                
                                    <li>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-4 h-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                        </svg>
                                    </li>
                                
                                    <li>
                                        <a
                                        class="block transition-colors hover:text-gray-700"
                                        href="#"
                                        >
                                        News
                                        </a>
                                    </li>
                                
                                    <li>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-4 h-4"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        >
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clip-rule="evenodd"
                                        />
                                        </svg>
                                    </li>
                                
                                    <li>
                                        <a
                                        class="block transition-colors hover:text-gray-700 text-red-600 capitalize"
                                        href="/products/plain-tee"
                                        >
                                        {artikel.category_slug.replace("_", " ")}
                                        </a>
                                    </li>
                                    </ol>
                                </nav>
                            </div>
                
                            <div className="my-1">
                                <h3 className="text-black font-bold text-lg lg:text-3xl mt-6 mb-8 sticky top-0 ">{artikel.judul}</h3>
                                <div className="mt-6 mb-8">
                                    <span className="text-gray-600">{artikel.writer} | </span>
                                    <span className="text-gray-600">{artikel.date_posted} | </span>  
                                    <span className="text-gray-600 hover:translate-x-2 transition-transform hover:duration-300">🌐 <a href={artikel.sourceLink} className="text-red-600 hover:text-red-800">{artikel.source}</a></span>  
                                </div>

                            </div>
                            <div className="mt-6 mb-8">
                                <Image src={`/images/others/${artikel.imgLink}`} alt="" title="" width="100%" height="65%" layout="responsive" objectFit="cover"/>
                            </div>

                        </div>
                        <div className="px-8 lg:px-20">
                            <div className="my-1">
                                <article className="my-2 text-justify text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: artikel.article }}>
                                </article>
                            </div>
                
                            <div className="grid grid-flow-col place-content-between my-12">
                                <div className="grid grid-flow-col gap-x-5 place-items-center">
                                    <StarGray/>
                                    <span className="text-gray-400 text-xl -ml-3 mt-1"></span>
                                </div>
                                <div className="grid grid-flow-col gap-x-3">
                                    <ShareIcon />
                                    <DownloadIcon/>
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold">Comments ({artikel.comment.length})</h4>
                
                            <div className="relative">
                                <input
                                type="text"
                                className="w-full focus:outline-none focus:border-red-400 focus:border-[2px] p-4 pr-12 border border-gray-200 text-sm bg-white rounded-lg mt-2" 
                                placeholder="What do you think..."
                                />
                            </div>
                            <Comment comments={artikel.comment}/>
                        </div>
                
                           
                        
                    </>  
                ))
            }
          
    </div>
    );
};

export default NewsArticle;