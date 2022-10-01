import RedDot from "../Icons/red-dot.element";
import CustomLinkButton, { CUSTOM_LINK_BUTTON_TYPES } from "../CustomLinkButton/custom-link-button.element";

const SliderContent = (props) => {
    const {tag, title, boldTitle, desc, redirect, redirect2, redirectText, redirectText2, bgImgUrl} = props
    return (
        <section class={`w-full h-screen 2xl:h-full bg-center bg-cover bg-fixed snap-start `} style={{backgroundImage: `url(${bgImgUrl})`}}>
            <div className="p-8 md:p-12 lg:px-20 lg:py-24 ">
                <div className="max-w-lg text-left mt-40 sm:text-left space-y-8 " >
        
                    <div className='flex flex-wrap my-3 items-center'>
                            <RedDot/>
                        <span className="ml-3 translate-y-0.5 text-black" dangerouslySetInnerHTML={{ __html: tag }}></span>
                    </div>
            
                    <h2 className="text-2xl font-reguler text-black sm:text-4xl"  dangerouslySetInnerHTML={{ __html: title }}>
                    </h2>
            
                    <p className="text-black/90 md:mt-6 md:leading-relaxed md:block" dangerouslySetInnerHTML={{ __html: desc }}>
                    </p>
                
                    <div className="mt-4 sm:mt-8 flex md:flex-wrap md:flex-row">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderContent;