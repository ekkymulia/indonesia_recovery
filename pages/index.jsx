import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component'
import Fmita from '../components/Fmita/fmita.component';
import NewsUpdate from '../components/NewsUpdate/news-update.component';
import Faq from '../components/Faq/faq.component';

export default function Home() {
  return (
    <Layout>

    <aside
    className="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
    >
      <div className="p-8 md:p-12 lg:px-20 lg:py-24 bg-white">
        <div className="max-w-lg text-center sm:text-left">

        <div className='flex flex-wrap my-3'>
          <div className='col-span-1 flex justify-center'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF0909"/>
              <circle cx="10" cy="10" r="5" fill="#E5E5E5"/>
              </svg>
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
    
          <div className="mt-4 sm:mt-8 sm-flex">
          <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
              <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
              <span className="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                Reach Us
              </span>
            </a>


            <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring ml-8" href="/news">
              <span className="absolute inset-0 border border-current"></span>
              <span className="block px-12 py-3 bg-white border transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                Read News
              </span>
            </a>
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
