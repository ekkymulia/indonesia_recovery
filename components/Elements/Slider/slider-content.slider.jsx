import RedDot from "../RedDot/red-dot.element";
import CustomLinkButton, { CUSTOM_LINK_BUTTON_TYPES } from "../CustomLinkButton/custom-link-button.element";

const SliderContent = (props) => {
    const {tag, title, boldTitle, desc, redirect, redirect2, redirectText, redirectText2, bgImgUrl} = props
    console.log(bgImgUrl)
    return (
        <section class={`w-full h-screen bg-center bg-cover snap-start ${bgImgUrl}`}>
            <div className="p-8 md:p-12 lg:px-20 lg:py-24 ">
                <div className="max-w-lg text-left mt-24 sm:text-left">
        
                    <div className='flex flex-wrap my-3 items-start'>
                        <div className='col-span-1 flex justify-center'>
                            <RedDot/>
                        </div>
                        <span className="ml-3 sm:mt-0 text-black">{tag}</span>
                    </div>
            
                    <h2 className="text-2xl font-reguler text-black sm:text-4xl">
                        {title}
                    </h2>
            
                    <p className="text-black/90 md:mt-6 md:leading-relaxed md:block">
                        {desc}
                    </p>
                
                    <div className="mt-4 sm:mt-8 flex md:flex-wrap md:flex-row">
                        <CustomLinkButton to={redirect} text={redirectText} type={CUSTOM_LINK_BUTTON_TYPES.DEFAULT}/>
                        <CustomLinkButton to={redirect2} text={redirectText2} type={CUSTOM_LINK_BUTTON_TYPES.INVERTED}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderContent;