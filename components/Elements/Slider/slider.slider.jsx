import SliderContent from "./slider-content.slider";

const temp_img = [
    
]

const Slider = () => {
    return(
        <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">
           
            <SliderContent tag="News Updates 📰" 
                title={[`Indonesia's Post Pandemic `,<br></br>,<b>Breakthrough!</b>]} 
                desc={[`From youth to growth. From east to west. Indonesia is our best! `,<br></br>,`Discover more about inspiring stories.`]}
                redirect="/downloads" redirect2="/downloads" redirectText="Reach Us" redirectText2="Read News" 
                bgImgUrl="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bromo-Semeru-Batok-Widodaren.jpg/800px-Bromo-Semeru-Batok-Widodaren.jpg')]"/>

            <SliderContent tag="News Updates 📰" 
                title={[`Indonesia's Post Pandemic `,<br></br>,<b>Breakthrough!</b>]} 
                desc={[`From youth to growth. From east to west. Indonesia is our best! `,<br></br>,`Discover more about inspiring stories.`]}
                redirect="/downloads" redirect2="/downloads" redirectText="Reach Us" redirectText2="Read News" 
                bgImgUrl="bg-[url('https://img.inews.co.id/media/822/files/inews_new/2022/01/17/Candi_Borobudur.jpg')]"/>
        
        </main>
    )
}

export default Slider;