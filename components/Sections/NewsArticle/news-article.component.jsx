import Image from "next/image";
import StarGray from "../../Elements/Star/star-gray.component";
import CommentIcon from "../../Elements/CommentIcon/comment-icon.icons";
import ShareIcon from "../../Elements/ShareIcon/share-icon.icons";
import DownloadIcon from "../../Elements/DownloadIcon/download-icon.icons";

const NewsArticle = () => {
    return (
        <div className="px-8 md:p-12 lg:px-20 lg:py-24 mb-12">
            <div className="my-1 grid grid-flow-col place-content-between text-sm lg:text-base">
                <div className="flex flex-wrap flex-col">
                    <span className="text-black">24 Agustus</span>
                    <span className="text-red-600">Technology</span>
                </div>
                <div>
                    <span className="text-red-600">G20 Indonesia 2022</span>
                </div>
            </div>
            <div className="my-1">
                <Image src="/pasar.jpg" alt="" title="" width="100%" height="65%" layout="responsive" objectFit="contain"/>
            </div>
            <div className="my-1">
                <h3 className="text-black font-bold text-lg lg:text-5xl mt-6 mb-8 lg:mb-20">How to Improve Indonesia’s Teenagers Computational Skills ?</h3>

                <article className="my-2 text-justify text-sm lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis augue sed nisl pharetra cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis consectetur mollis nisl ac laoreet. In quis velit dolor. Nunc tempor faucibus arcu blandit pretium. Vestibulum ante augue, faucibus non semper id, tincidunt vitae lectus. Morbi gravida nisi vitae venenatis tempus. Curabitur urna mi, placerat nec lorem nec, commodo mollis felis.
                <br/><br/>
                Integer pellentesque est risus, eget interdum quam dictum eget. Aliquam volutpat libero vitae dolor bibendum gravida. Phasellus cursus mauris sem, non pulvinar libero condimentum vel. Etiam feugiat tristique dolor, a dictum libero tempus nec. Sed ornare elit ut felis pulvinar cursus dictum ac libero. Donec pharetra purus vitae urna porta efficitur. Curabitur molestie vel dui ut auctor. Integer feugiat luctus sapien ac euismod. Vestibulum eu arcu non erat fringilla pretium. Cras sit amet ipsum eu quam vulputate cursus. Suspendisse potenti.
                <br/><br/>
                Integer pellentesque est risus, eget interdum quam dictum eget. Aliquam volutpat libero vitae dolor bibendum gravida. Phasellus cursus mauris sem, non pulvinar libero condimentum vel. Etiam feugiat tristique dolor, a dictum libero tempus nec. Sed ornare elit ut felis pulvinar cursus dictum ac libero. Donec pharetra purus vitae urna porta efficitur. Curabitur molestie vel dui ut auctor. Integer feugiat luctus sapien ac euismod. Vestibulum eu arcu non erat fringilla pretium. Cras sit amet ipsum eu quam vulputate cursus. Suspendisse potenti.
                
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
        </div>
    );
};

export default NewsArticle;