import CustomLinkButton, { CUSTOM_LINK_BUTTON_TYPES } from "../../Elements/CustomLinkButton/custom-link-button.element";

const NewsUpdateCard = (props) => {
    const { ClassName, title, desc, to, category, minutes } = props;
    return (
        <blockquote className={`${ClassName}`}>
            <div className=''>         
                <heading>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                </heading>   
                <main className='grid grid-colspan-8 grid-flow-col mt-1'>
                    
                    <div className='mt-2 col-span-5 flex flex-col justify-between'>
                        <div>
                            <p className="mt-2 text-justify text-gray-700 ">{desc}</p>
                        </div>
                    </div>
                </main>
                <footer className="mt-5 flex flex-wrap">
                    <CustomLinkButton to="/downloads" text="Read News" type={CUSTOM_LINK_BUTTON_TYPES.SPC_INVERTED_ROUNDED}/>

                    <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 " href="/download">
                    <span className="block px-5 py-3">
                    {category}
                    </span>
                    </a>

                    <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 " href={to}>
                    <span className="block px-5 py-3">
                    {minutes}min Reading
                    </span>
                    </a>

                </footer>
            </div>    
        </blockquote>
    );
};

export default NewsUpdateCard;