import { useState } from "react";
import SliderContent from "./slider-content.slider";

const temp_img = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bromo-Semeru-Batok-Widodaren.jpg/800px-Bromo-Semeru-Batok-Widodaren.jpg',
    'https://www.wallpapertip.com/wmimgs/183-1830137_bromo-tengger-semeru-national-park.jpg'
]

const Slider = () => {
    const [slideNav, setSlideNav] = useState(0)
    const [bgImgSlider, setBgImgSlider] = useState(temp_img[0])
    const sliderNavHeight = Math.round(16 / 2) > 5 ? Math.round(16 / 2) + "rem" : "5rem";
    
    const setSlide = (num) => {
        setBgImgSlider(temp_img[num])
        setSlideNav(num)
    }
    return(
        <main className="relative max-h-screen lg:max-h-[960px] ">
           
            <SliderContent tag="News Updates" 
                title={[`Indonesia's Post Pandemic `,<br></br>,<b>Breakthrough!</b>]} 
                desc={[`From youth to growth. From east to west. Indonesia is our best! `,<br></br>,`Discover more inspiring stories.`]}
                redirect="/news/asd" redirectText="Start Reading"
                bgImgUrl={bgImgSlider}/>

            <div className="absolute bottom-8 right-0 mr-8 max-height-64 ">
                {
                    temp_img.map((item, key) => {
                        return key == slideNav ? (
                            <div className={` border-red-500 border-r-4 my-4`} onClick={() => setSlide(key)} style={{height: sliderNavHeight}}></div>
                        ) : (
                            <div className={` border-r-4 my-4`} onClick={() => setSlide(key)} style={{height: sliderNavHeight}}></div>
                        )
                    })
                }
            </div>
        </main>
    )
}




export default Slider;