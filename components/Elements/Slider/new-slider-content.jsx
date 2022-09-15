//DEPRECATED, NOT USED, THIS IS BACKUP
const NewSliderContent = () => {
    return (
        <section class={`w-full h-screen bg-center bg-cover snap-start ${bgImgUrl}`}>
            <div className="p-8 md:p-12 lg:px-20 lg:py-24 ">
                <div className="max-w-lg text-left mt-24 sm:text-left">
        
                    <div className='flex flex-wrap my-3 items-center'>
                            <RedDot/>
                        <span className="ml-3 translate-y-0.5 text-black">{tag}</span>
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

export default NewSliderContent;