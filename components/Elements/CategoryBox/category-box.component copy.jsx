import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { Artikel } from "../../../data/artikel";

const CategoryBox = ({item} = props) => {
    const [select, setSelect] = useState(0);
    const [artLen, setArtLen] = useState(0);

    useEffect((
        setArtLen(Artikel.filter((news) => news.category_slug == item.slug).length)
    ), [item])
    return (
        <Link href={`/news/${Artikel[select].slug}`} className="p-2 transition-transform border-current hover:-translate-x-1 hover:-translate-y-1 m-1 border-2 border-solid rounded-lg text-red-500 border-red-500">
            <h3>{item.text}</h3>
        </Link> 
    );
};

export default CategoryBox;