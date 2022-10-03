import CustomLinkButton, { CUSTOM_LINK_BUTTON_TYPES } from "../../Elements/CustomLinkButton/custom-link-button.element";
import Image from "next/image";

const NewsCard = ({newsData} = props) => {
    const {imgLink, judul, desc, slug} = newsData

    return (
        <div className="grid grid-cols-12 my-6 place-content-start">
            <div className="col-span-12 lg:col-span-7">
                <Image src={`/images/others/${imgLink}`} width="400%" height="235%" alt={`${judul}_${desc}`}/>
            </div>
            <div className="col-span-12 lg:col-span-5 grid grid-cols-4 grid-flow-row place-content-start mt-2 lg:mt-0">
                <div className="border-t-8 border-xl border-red-500 col-span-1 mb-3 rounded-lg"></div>
                <div className="col-span-4">
                    <h4 className="font-semibold text-lg">{judul}</h4>
                    <p className="mt-2 font-light text-sm text-gray-900">{desc}</p>
                </div>
                <div className="col-span-2 mt-5">
                    <CustomLinkButton to={`/news/${slug}`} text="Read News" type={CUSTOM_LINK_BUTTON_TYPES.SPC_INVERTED_ROUNDED_SM}/>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;