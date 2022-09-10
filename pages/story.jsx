import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component';
import { redirect } from 'next/dist/server/api-utils';

export default function Story() {
  return (
    <Layout>
        <aside className="bg-white">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-lg mx-auto text-center">
                <h2 className="text-2xl font-regular text-gray-900 md:text-4xl">
                    Recover Together
                </h2>
                <h2 className="text-2xl font-bold text-gray-900 md:text-4xl mt-3">
                    Recover Stronger
                </h2>
            </div>
        </div>
        <section>
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-10">
    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          className="object-cover w-full h-100px" 
          src={"./g20.jpg"}
          alt="Man using a computer"
          style={{ height: 450, borderRadius: 15 }}
        />
      </div>

      <div className="lg:py-16 ml-8">
        <article className="text-black space-y-4">
            <p>
            From youth to growth, From east to west, Indonesia is our best!
            Post pandemic is a new beginning and chapter for all of us to be more productive!
            </p>

        </article>
        <div className="mt-2 sm:mt-2 sm-flex">
            <a className="relative inline-block text-sm font-medium text-white group focus:outline-none   focus:ring">
                <h1 className="text-black text-5xl mt-20 font-reguler">100%</h1>
                <div className=" border-b-[3px] border-red-500 w-30 mt-2"/>
                <p className="text-red-600 mt-3"> Trusted News</p>
            </a>    
                <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group  focus:outline-none focus:ring ml-20">
                <h1 className="text-black text-5xl mt-20 font-reguler">5000+</h1>
                <div className=" border-b-[3px] border-red-500 w-30 mt-2"/>
                <p className="text-red-600 mt-3">Contributors</p>
            </a>
          </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="px-4 py-20 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={"./logo_tsp.svg"}
          alt="Logo"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl text-black font-bold sm:text-4xl">Indonesia <span className="text-red-600">Recovery</span></h2>

        <p className="mt-4 text-black ">
        Indonesia Recovery is a news portal aggregator website that provides information about the rise of new enthusiasm after the COVID-19 pandemic by spreading positive news and relating to digital transformation in Indonesia.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-white mb-20">
  <div className="mx-auto max-w-screen-xl lg:items-center lg:flex">
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-3xl text-black font-regular sm:text-4xl">
      A <b>right place</b> for you to <br></br>discover brand new ideas!    
      </h1>
      <p className="sm:leading-relaxed text-black mt-10">
        Indonesia Recovery is a news portal aggregator website that provides information about the rise of new enthusiasm after the COVID-19 pandemic by spreading positive news and relating to digital transformation in Indonesia.
      </p>
    </div>
  </div>
</section>
<section className="bg-gray-100">
  <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-10">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-4xl text-black font-bold tracking-tight sm:text-5xl">
        Our Team
      </h2>
      <p className="max-w-lg mx-auto text-black mt-4">
        Meet our  team of <b>developers</b>, <b>designer</b>, <br></br> <b>documenter</b> and 
        <b> supervisor.</b>
      </p>
    </div>
  </div>
<div
    className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-5 sm:gap-5 ml-5 mr-5"
>
    <div>
        <img
          src={"./ekky.jpg"}
          alt=""
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
        >
          <p className="text-md font-bold text-black">Ekky Mulia Lasardi</p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Fullstack Developer
          </p>
        </blockquote>
    </div>
    <div>
        <img
          src={"./thoriq.jpg"}
          alt=""
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
        >
          <p className="text-md font-bold text-black">Mochammad Fadiil Thoriq</p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Co-Developer
          </p>
        </blockquote>
    </div>
    <div>
        <img
          src={"./aulia.jpg"}
          alt=""
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
        >
          <p className="text-md font-bold text-black">Nurrizkyta Aulia Hanifah</p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            UI/UX Designer
          </p>
        </blockquote>
    </div>
    <div>
        <img
          src={"./wahyu.png"}
          alt=""
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
        >
          <p className="text-md font-bold text-black">Wahyu Mustika Aji</p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Documenter
          </p>
        </blockquote>
    </div>
    <div>
        <img
          src={"./gema.png"}
          alt=""
          className="object-cover w-24 h-24 mx-auto rounded-full shadow-xl"
        />

        <blockquote
          className="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl"
        >
          <p className="text-md font-bold text-black">Gema Parasti Mindara</p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            Supervisor
          </p>
        </blockquote>
    </div>

</div>
</section>
</aside>
   
    </Layout>
  );
}
