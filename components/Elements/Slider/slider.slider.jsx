import { useState } from "react";
import NewSliderContent from "./new-slider-content";
import SliderContent from "./slider-content.slider";

const temp_img = [
    '/images/banner/masker.jpg',
    '/images/banner/bendera.jpg',
]

const slidesData = [
    {
        title:"Indonesia's Post Pandemic <b>Breakthrough!</b>",
        desc: "From youth to growth. From east to west. Indonesia is our best!<br>Discover more inspiring stories.",
        redirect: "/news",
        redirectText: "Start Reading",
        bgImgUrl: "/images/banner/bendera.jpg"
    },
    {
        title:"Indonesia's Post Pandemic <b>Breakthrough!</b>",
        desc: "SFrom youth to growth. From east to west. Indonesia is our best!<br>Discover more inspiring stories.",
        redirect: "/news",
        redirectText: "Start Reading",
        bgImgUrl: "/images/banner/masker.jpg"
    },
]

const Slider = () => {
    const [slideNav, setSlideNav] = useState(0)
    const [sliderData, setSliderData] = useState(slidesData[0])
    const sliderNavHeight = Math.round(16 / temp_img.length) > 5 ? Math.round(16 / temp_img.length) + "rem" : "5rem";
    
    const setSlide = (num) => {
        setSliderData(slidesData[num])
        setSlideNav(num)
    }


    return(
        <main className="relative max-h-screen lg:max-h-[960px] " onScroll={console.log("scroll")}>
           
            <SliderContent className="hidden lg:block" tag="News Updates" 
                title={sliderData.title} 
                desc={sliderData.desc}
                redirect="/news/asd" redirectText="Start Reading"
                bgImgUrl={sliderData.bgImgUrl} />

            
        
            <div className="absolute bottom-8 right-0 mr-8 max-height-64 ">
                {
                    temp_img.map((item, key) => {
                        return key == slideNav ? (
                            <div className={` border-red-500 border-r-4 my-4 `} onClick={() => setSlide(key)} style={{height: sliderNavHeight}}></div>
                        ) : (
                            <div className={` border-r-4 my-4 animate-pulse`} onClick={() => setSlide(key)} style={{height: sliderNavHeight}}></div>
                        )
                    })
                }
            </div>
        </main>
    )
}




export default Slider;