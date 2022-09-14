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

export default function Home() {
  return (
    <Layout>
      <div>
        <aside
        className="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
        >
        <Slider/>
    
        </aside>
        
        <NewsHighlight ClassName="p-8 md:p-12 lg:px-20 lg:py-24"/>
        <Fmita ClassName="p-8 md:p-12 lg:px-20 lg:py-24 lg:pt-0"/>

        <NewsUpdate ClassName="p-8 md:p-12 lg:px-20 lg:py-24"/>
        <Faq ClassName="p-8 md:p-12 lg:px-20 lg:py-24"/>
      </div>


    </Layout>
  );
}
