import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component'
import Fmita from '../components/Fmita/fmita.component';
import NewsUpdate from '../components/NewsUpdate/news-update.component';
import Faq from '../components/Faq/faq.component';
import RedDot from '../components/Elements/RedDot/red-dot.element';

import CustomLinkButton, { CUSTOM_LINK_BUTTON_TYPES } from '../components/Elements/CustomLinkButton/custom-link-button.element';

export default function Home() {
  return (
    <Layout>

    <aside
    className="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
    >
      <div className="p-8 md:p-12 lg:px-20 lg:py-24 ">
        <div className="max-w-lg text-center sm:text-left">

        <div className='flex flex-wrap my-3'>
          <div className='col-span-1 flex justify-center'>
            <RedDot/>
          </div>
          <span className="ml-3 mt-2 sm:mt-0 text-black">News Updates 📰</span>
        </div>
  

          <h2 className="text-2xl font-reguler text-black sm:text-4xl">
            Indonesia's Post Pandemic <br></br>
            <b>Breakthrough!</b>
          </h2>

          <p
            className="text-black/90 md:mt-6 md:leading-relaxed md:block"
          >
            From youth to growth. From east to west. Indonesia is our best! <br></br>
            Discover more about inspiring stories.
          </p>
    
          <div className="mt-4 sm:mt-8 sm-flex gap-8">
            <CustomLinkButton to="/downloads" text="Reach Us" type={CUSTOM_LINK_BUTTON_TYPES.DEFAULT}/>

            <CustomLinkButton to="/downloads" text="Read News" type={CUSTOM_LINK_BUTTON_TYPES.INVERTED}/>



          </div>
        </div>
      </div>
    </aside>

    <NewsUpdate ClassName="p-8 md:p-12 lg:px-20 lg:py-24"/>
    <Faq ClassName="p-8 md:p-12 lg:px-20 lg:py-24"/>
    <Fmita ClassName="p-8 md:p-12 lg:px-20 lg:py-24"/>
    </Layout>
  );
}
