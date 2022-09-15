import Link from "next/link";

const ReadListCard = () => {
    return (
        <Link href="">
            <div className="flex flex-col cursor-pointer transition-transform  hover:-translate-x-1 hover:-translate-y-1 antialiased ">
                <span className="font-semibold">Indonesia Economics Forum</span>
                <h3 className="font-semibold">F&B Business Report Growth in the last decade</h3>
            </div>
        </Link>
    );
};

export default ReadListCard;