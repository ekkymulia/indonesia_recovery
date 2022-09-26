import TrendingNewsComponent from '../../Cards/TrendingNewsCard/trending-news-card.card'
import CategoryCard from '../../Elements/CategoryBox/category-box.component';
import FmitaCategory from '../FmitaCategory/fmita-category.component';

const Fmita = ( props ) => {
    const { ClassName } = props;

    return (
        <section className={ ClassName }>
        <h2 className="text-3xl sm:text-4xl text-center">Find More <span className="font-bold">Inspiring Talks</span> and <span className="font-bold">Articles</span></h2>
  
        <div className="mt-8 grid grid-cols-1 gap-8 md:gap-12 md:mt-16 md:grid-cols-5 lg:grid-cols-5">
          <div className="p-1 grid grid-rows-1 col-span-3">
            <TrendingNewsComponent tag="Trending" title="G20: Indonesia Recover" 
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
            imgLink="g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news"/>

            <TrendingNewsComponent tag="Trending" title="G20: Indonesia Recover" 
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?" 
            imgLink="g20.jpg" date="Aug 7" minutes="7" rating="3" to="/news"/>
          </div>
          <div className="p-1 grid grid-rows-1 col-span-2 place-items-center">
            <div className="flex flex-col">
                <span>Discover Latest Category Updates</span> 
                <FmitaCategory/>
            </div> 
          </div>
        </div>
      </section>
      
    );
};

export default Fmita;