import Link from "next/link";

const ReadListCard = ({news}) => {
    const {news_id, judul, slug, penulis} = news;
    return (
        <Link href={`/news/${slug}`}>
            <div className="flex flex-col cursor-pointer transition-transform  hover:-translate-x-1 hover:-translate-y-1 antialiased ">
                <span className="font-semibold text-red-600">{penulis}</span>
                <h3 className="font-semibold">{judul}</h3>
            </div>
        </Link>
    );
};

export default ReadListCard;