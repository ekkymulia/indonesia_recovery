import RedDot from "../Icons/red-dot.element";
import Typewriter from "typewriter-effect";

const SliderContent = (props) => {
    const {tag, title, boldTitle, desc, redirect, redirect2, redirectText, redirectText2, bgImgUrl} = props
    return (
        <section className={`w-full h-screen 2xl:h-full bg-center bg-cover lg:bg-fixed ease-in duration-300`} style={{backgroundImage: `url(${bgImgUrl})`}}>
            <div className="p-8 md:p-12 lg:px-20">
                <div className="max-w-lg text-left mt-40 sm:text-left space-y-8">
        
                    <div className='flex flex-wrap my-3 items-center uppercase font-bold bg-white px-4 py-2 w-52 rounded-md'>
                            <RedDot/>
                        <span className="ml-4 translate-y-0.5 text-black ">{tag}</span>
                    </div>
            
                    <h2 className="text-2xl font-reguler text-white sm:text-4xl">
                        {title}
                        <b>
                        <Typewriter
                        options={{ 
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            strings:[
                                "Breakthrough!",
                                "Innovation!",
                                "Updates!",
                                "Improvement!"
                            ],
                         }}
                        />
                        </b>
                        
                    </h2>
            
                    <p className="text-white md:mt-6 md:leading-relaxed md:block">
                        {desc}
                    </p>
                
                    <div className="mt-4 sm:mt-8 flex md:flex-wrap md:flex-row">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SliderContent;