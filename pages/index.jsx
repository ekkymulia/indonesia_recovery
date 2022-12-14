import Layout from '../components/Layout/layout.component'

import Slider from '../components/Elements/Slider/slider.slider';
import NewsHighlight from '../components/Sections/NewsHighlight/news-highlight.component';
import MostViewed from '../components/Sections/MostViewed/most-viewed.component';

export default function Home() {
  return (
    <Layout>
      
      <div>
        <div
        className="overflow-hidden bg-center bg-no-repeat bg-cover"
        >
        <Slider/>
    
        </div>
        
        <NewsHighlight ClassName="p-8 md:p-12 lg:px-20 lg:pt-24 lg:pb-16"/>
        <MostViewed ClassName="p-8 mb-12 md:p-12 lg:px-20 lg:pb-20"/>
      </div>


    </Layout>
  );
}
