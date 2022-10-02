import TrendingNewsComponent from '../../Cards/TrendingNewsCard/trending-news-card.card'
import CategoryCard from '../../Elements/CategoryBox/category-box.component';
import FmitaCategory from '../FmitaCategory/fmita-category.component';

import { Artikel } from '../../../data/artikel';

const Fmita = ( props ) => {
    const { ClassName } = props;

    return (
        <section className={ ClassName }>
        <h2 className="text-3xl sm:text-4xl text-center">Find More <span className="font-bold">Inspiring Talks</span> and <span className="font-bold">Articles</span></h2>
  
        <div className="mt-8 grid grid-cols-1 gap-8 md:gap-12 md:mt-16 md:grid-cols-5 lg:grid-cols-5">
          <div className="p-1 grid grid-rows-1 col-span-3">
          {
              Artikel.sort((a, b) => {
                  if(a.like === b.like) {
                    // If two elements have same like, then the one who has larger rating.average wins
                    return b.like.average - a.like.average;
                  } else {
                    // If two elements have different like, then the one who has larger like wins
                    return b.like - a.like;
                  }
                }).map((news, key) => (
                    key < 3 ? (
                      <TrendingNewsComponent key={news.id} tag="" title={news.judul}
                      desc={news.desc}
                      imgLink={news.imgLink} date={news.date_posted} minutes={news.read_time} rating={news.like} to={news.slug}/>
                    ) : (<></>)
                )
              )
          }
          </div>
          <div className="p-1 pl-4 lg:pl-0 grid grid-rows-1 col-span-2 place-items-center">
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