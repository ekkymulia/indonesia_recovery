import Image from "next/image";
import StarGray from "../../Elements/Star/star-gray.component";
import CommentIcon from "../../Elements/CommentIcon/comment-icon.icons";
import ShareIcon from "../../Elements/ShareIcon/share-icon.icons";
import DownloadIcon from "../../Elements/DownloadIcon/download-icon.icons";

import Artikel from "../../../data/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NewsArticle = () => {
    const router = useRouter();
    const { slug } = router.query
    const [artikel, setArtikel] = useState({})

    

    return (

        <div className="px-8 md:p-12 lg:px-20 lg:py-24 mb-12">

            {
                Artikel.filter((item) => item.slug == slug).map((artikel) => (
                    <>
                        <div className="my-1 grid grid-flow-col place-content-between text-sm lg:text-base">
                            <div className="flex flex-wrap flex-col">
                                <span className="text-black">{artikel.date_posted}</span>
                                <span className="text-red-600">{artikel.category}</span>
                            </div>
                            <div>
                                <span className="text-red-600">{artikel.penulis}</span>
                            </div>
                        </div>
            
                        <div className="my-1">
                            <Image src={artikel.imgLink} alt="" title="" width="100%" height="65%" layout="responsive" objectFit="contain"/>
                        </div>
            
                        <div className="my-1">
                            <h3 className="text-black font-bold text-lg lg:text-5xl mt-6 mb-8 lg:mb-20">{artikel.article.judul}</h3>
                            <article className="my-2 text-justify text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: artikel.article.isi }}>
                            </article>
                        </div>
            
                        <div className="grid grid-flow-col place-content-between my-12">
                            <div className="grid grid-flow-col gap-x-3">
                                <StarGray/>
                                <CommentIcon/>
                            </div>
                            <div className="grid grid-flow-col gap-x-3">
                                <ShareIcon/>
                                <DownloadIcon/>
                            </div>
                        </div>
                    </>  
                ))
            }

        </div>
    );
};

export default NewsArticle;