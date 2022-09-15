import NewsUpdateCard from "../../Cards/NewsUpdateCard/news-update-card.card";

const NewsUpdate =  ( props ) => {
    const { ClassName } = props;

    return (
        <section className={ClassName}>
            <div className="colspan-4 mb-11">
                <h1 className="text-2xl pb-3">News Updates</h1>
                <div className=" border-b-[4px] border-red-500 w-28"/>
            </div>
            
            <div className="grid grid-cols-12 mt-5 md:gap-x-20 gap-y-10 place-content-around">
                <NewsUpdateCard ClassName="lg:col-span-6 col-span-12" 
                title="Energy Renewal: Plastic Waste to Fuel" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                to="/news" category="🌱🌍 Environtment" minutes="3"/>

                <NewsUpdateCard ClassName="lg:col-span-6 col-span-12" 
                title="Energy Renewal: Plastic Waste to Fuel" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                to="/news" category="🌱🌍 Environtment" minutes="3"/>

                <NewsUpdateCard ClassName="lg:col-span-6 col-span-12" 
                title="Energy Renewal: Plastic Waste to Fuel" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                to="/news" category="🌱🌍 Environtment" minutes="3"/>

                <NewsUpdateCard ClassName="lg:col-span-6 col-span-12" 
                title="Energy Renewal: Plastic Waste to Fuel" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
                to="/news" category="🌱🌍 Environtment" minutes="3"/>

            </div>
        </section>

    );
};

export default NewsUpdate;