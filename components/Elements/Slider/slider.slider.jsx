import SliderContent from "./slider-content.slider";

const temp_img = [
    
]

const Slider = () => {
    return(
        <main className="max-h-screen lg:max-h-[960px]  snap snap-y snap-mandatory">
           
            <SliderContent tag="News Updates" 
                title={[`Indonesia's Post Pandemic `,<br></br>,<b>Breakthrough!</b>]} 
                desc={[`From youth to growth. From east to west. Indonesia is our best! `,<br></br>,`Discover more inspiring stories.`]}
                redirect="/news/asd" redirectText="Start Reading"
                bgImgUrl="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bromo-Semeru-Batok-Widodaren.jpg/800px-Bromo-Semeru-Batok-Widodaren.jpg')]"/>

        
        </main>
    )
}

export default Slider;