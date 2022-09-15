import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component'
import Fmita from '../components/Fmita/fmita.component';
import NewsUpdate from '../components/NewsUpdate/news-update.component';
import Faq from '../components/Faq/faq.component';
import RedDot from '../components/Elements/RedDot/red-dot.element';

import CustomLinkButton, { CUSTOM_LINK_BUTTON_TYPES } from '../components/Elements/CustomLinkButton/custom-link-button.element';
import Slider from '../components/Elements/Slider/slider.slider';
import NewsHighlight from '../components/NewsHighlight/news-highlight.component';
import MostViewed from '../components/MostViewed/most-viewed.component';

export default function Home() {
  return (
    <Layout>
      <div>
        <aside
        className="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
        >
        <Slider/>
    
        </aside>
        
        <NewsHighlight ClassName="p-8 md:p-12 lg:px-20 lg:pt-24 lg:pb-16"/>
        <MostViewed ClassName="p-8 md:p-12 lg:px-20 lg:pb-20"/>
      </div>


    </Layout>
  );
}
