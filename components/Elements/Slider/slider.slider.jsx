import { useState } from "react";
import SliderContent from "./slider-content.slider";

const temp_img = [
    '/images/banner/banner2.png',
    '/images/banner/jakarta6.png',
]

const Slider = () => {
    const [slideNav, setSlideNav] = useState(0)
    const [bgImgSlider, setBgImgSlider] = useState(temp_img[0])
    const sliderNavHeight = Math.round(16 / temp_img.length) > 5 ? Math.round(16 / temp_img.length) + "rem" : "5rem";
    
    const setSlide = (num) => {
        setBgImgSlider(temp_img[num])
        setSlideNav(num)
    }

    const handleScroll = event => {
        console.log('scrollTop: ', event.currentTarget.scrollTop);
        console.log('offsetHeight: ', event.currentTarget.offsetHeight);
      };
    

    return(
        <main className="relative max-h-screen lg:max-h-[960px] " >
           
            <SliderContent tag="News Updates" 
                title={[`Indonesia's Post Pandemic `]} 
                desc={[`From youth to growth. From east to west. Indonesia is our best! `,<br></br>,`Discover more inspiring stories.`]}
                redirect="/news/asd" redirectText="Start Reading"
                bgImgUrl={bgImgSlider} />

            <div className="absolute bottom-8 lg:bottom-40 2xl:bottom-8 right-0 mr-8 max-height-64 ">
                {
                    temp_img.map((item, key) => {
                        return key == slideNav ? (
                            <div key={key+1} className={` border-red-500 border-r-8 my-4 rounded-lg cursor-pointer ease-in duration-500`} onClick={() => setSlide(key)} style={{height: sliderNavHeight}}></div>
                        ) : (
                            <div key={key+1} className={` border-white border-r-8 my-4 rounded-lg animate-pulse cursor-pointer`} onClick={() => setSlide(key)} style={{height: sliderNavHeight}}></div>
                        )
                    })
                }
            </div>
        </main>
    )
}




export default Slider;