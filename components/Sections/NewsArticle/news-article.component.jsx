import Image from "next/image";
import StarGray from "../../Elements/Icons/star-gray.component";
import CommentIcon from "../../Elements/Icons/comment-icon.icons";
import ShareIcon from "../../Elements/Icons/share-icon.icons";
import DownloadIcon from "../../Elements/Icons/download-icon.icons";
import Comment from "../comment/comment.component";

import { Artikel } from "../../../data/artikel";
import { useRouter } from "next/router";

const NewsArticle = () => {
    const router = useRouter();
    const { slug } = router.query

    return (

        <div className="px-8 md:p-12 lg:px-20 lg:py-24 mb-12">

            {
                Artikel.filter((item) => item.slug == slug).map((artikel) => (
                    <>
                        <div className="my-1 grid grid-flow-col place-content-between text-sm lg:text-base">
                            <div className="flex flex-wrap flex-col">
                                <span className="text-black">{artikel.date_posted}</span>
                                <span className="text-red-600 capitalize">{artikel.category_slug.replace("_", " ")}</span>
                            </div>
                            <div className="flex flex-wrap flex-col items-end">
                                <a href={artikel.sourceLink} className="text-red-600">{artikel.source}</a>
                            </div>
                        </div>
            
                        <div className="my-1">
                            <Image src={`/images/others/${artikel.imgLink}`} alt="" title="" width="100%" height="65%" layout="responsive" objectFit="contain"/>
                            <span className="text-red-600">by {artikel.writer}</span>

                        </div>
            
                        <div className="my-1">
                            <h3 className="text-black font-bold text-lg lg:text-3xl mt-6 mb-8 lg:mb-20">{artikel.judul}</h3>
                            <article className="my-2 text-justify text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: artikel.article }}>
                            </article>
                        </div>
            
                        <div className="grid grid-flow-col place-content-between my-12">
                            <div className="grid grid-flow-col gap-x-5">
                                <StarGray/>
                                <h1 className="text-gray-400 text-2xl -ml-3 mt-1"></h1>
                                <CommentIcon/>
                                <h1 className="text-gray-400 text-2xl -ml-3 mt-1">4</h1>
                            </div>
                            <div className="grid grid-flow-col gap-x-3">
                                <ShareIcon/>
                                <DownloadIcon/>
                            </div>
                        </div>
                        <h1 className="text-lg font-semibold">Comments</h1>
            
                        <div className="relative">
                            <input
                            type="text"
                            className="w-full focus:outline-none focus:border-red-400 focus:border-[2px] p-4 pr-12 border border-gray-200 text-sm bg-white rounded-lg mt-2" 
                            placeholder="What do you think..."
                            />
                        </div>
                        <Comment/>
                        <Comment/>
                    </>  
                ))
            }
          
    </div>
    );
};

export default NewsArticle;