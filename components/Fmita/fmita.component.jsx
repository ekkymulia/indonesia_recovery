import TrendingNewsComponent from '../TrendingNewsCard/trending-news-card.component'
import FmitaCategory from '../FmitaCategory/fmita-category.component';


const Fmita = ( props ) => {
    const { ClassName } = props;

    return (
        <section className={ ClassName }>
        <h2 className="text-3xl sm:text-4xl text-center">Find More <span className="font-bold">Inspiring Talks</span> and <span className="font-bold">Articles</span></h2>
  
        <div className="mt-8 grid grid-cols-1 gap-8 md:gap-12 md:mt-16 md:grid-cols-5 lg:grid-cols-5">
          <div className="p-1 grid grid-rows-1 col-span-3">
            <TrendingNewsComponent/>
            <TrendingNewsComponent/>
          </div>
          <div className="p-1 grid grid-rows-1 col-span-2 place-items-center">
            <FmitaCategory/>
          </div>
        </div>
      </section>
      
    );
};

export default Fmita;