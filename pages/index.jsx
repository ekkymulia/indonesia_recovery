import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component';

export default function Home() {
  return (
    <Layout>

    <aside
    class="overflow-hidden bg-[url(/logo_fix.svg)] bg-center bg-no-repeat bg-cover"
    >
      <div class="p-8 md:p-12 lg:px-20 lg:py-24 bg-white">
        <div class="max-w-lg text-center sm:text-left">
          
          <p class="font-reguler text-black">
          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="8" cy="8" r="8"/> /*Icon msh blm fix */
          </svg>
            NEWS UPDATE
          </p>

          <h2 class="text-2xl font-reguler text-black sm:text-4xl">
            Indonesia's Post Pandemic <br></br>
            <b>Breakthrough!</b>
          </h2>

          <p
            class="text-black/90 md:mt-6 md:leading-relaxed md:block"
          >
            From youth to growth. From east to west. Indonesia is our best! <br></br>
            Discover more about inspiring stories.
          </p>
    
          <div class="mt-4 sm:mt-8 sm-flex">
          <a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
              <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
              <span class="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                Reach Us
              </span>
            </a>


            <a class="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring ml-8" href="/download">
              <span class="absolute inset-0 border border-current"></span>
              <span class="block px-12 py-3 bg-white border transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                Read News
              </span>
            </a>
          </div>
        </div>
      </div>
    </aside>
    </Layout>
  );
}
