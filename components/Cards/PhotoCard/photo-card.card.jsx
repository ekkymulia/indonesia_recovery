import Image from "next/image";

const PhotoCard = ({imgLink, title, desc} = props) => {
    return (
        <div className="">
            <img
            src={`/images/team/${imgLink}`}
            alt={`${title}_${desc}`}
            className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
            />
                
            <blockquote
            className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
            >
                <p className="text-md font-bold" dangerouslySetInnerHTML={{ __html: title }}></p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                    {desc}
                </p>
            </blockquote>
        </div>
    );
};

export default PhotoCard;