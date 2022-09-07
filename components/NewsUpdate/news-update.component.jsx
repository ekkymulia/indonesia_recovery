import NewsUpdateCard from "../NewsUpdateCard/news-update-card.component";

const NewsUpdate =  ( props ) => {
    const { ClassName } = props;

    return (
        <section className={ClassName}>
            <div className="colspan-4 mb-11">
                <h1 className="text-2xl pb-3">News Updates</h1>
                <div className=" border-b-[4px] border-red-500 w-28"/>
            </div>
            
            <div className="grid grid-cols-12 mt-5 gap-x-20 gap-y-10 place-content-around">
                <NewsUpdateCard ClassName="col-span-6" />
                <NewsUpdateCard ClassName="col-span-6" />
                <NewsUpdateCard ClassName="col-span-6" />
                <NewsUpdateCard ClassName="col-span-6" />
                <NewsUpdateCard ClassName="col-span-6" />
                <NewsUpdateCard ClassName="col-span-6" />
            </div>
        </section>

    );
};

export default NewsUpdate;