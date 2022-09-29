import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout.component';
import { redirect } from 'next/dist/server/api-utils';
import PhotoCard from '../components/Cards/PhotoCard/photo-card.card';

export default function Story() {
  return (
    <Layout>
        <div className="">
        {/* <img src={"/images/others/merahbg.svg"} className="float-right" alt="" /> */}
        <div className="p-8 mt-12  md:p-12 lg:px-16 lg:py-24 ">
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
          <div className="px-6 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-10">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className="relative md:h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                className="object-cover w-full md:h-[35rem] rounded-2xl" 
                src={"images/banner/g20.jpg"}
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-16">
              <article className="text-lg text-black space-y-4 text-justify lg:text-left">
                  <p>
                  From youth to growth, From east to west, Indonesia is our best!
                  Post pandemic is a new beginning and chapter for all of us to be more productive!
                  </p>

              </article>
              <div className="mt-2 grid grid-cols-2 grid-flow-col lg:grid-flow-row -space-x-16">
                  <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring col-span-2 lg:col-span-1 md:col-span-1">
                      <h1 className="text-black text-5xl mt-20 font-semibold">100%</h1>
                      <div className=" border-b-[3px] border-red-500 md:w-32 lg:w-32 w-32 mt-2"/>
                      <p className="text-red-600 mt-3 text-lg"> Trusted News</p>
                  </a>    
                  <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring col-span-2 lg:col-span-1 md:col-span-1">
                      <h1 className="text-black text-5xl mt-20 font-semibold">5000+</h1>
                      <div className=" border-b-[3px] border-red-500 md:w-32 lg:w-32 w-32 mt-2"/>
                      <p className="text-red-600 mt-3 text-lg">Contributors</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <section className="lg:mb-64 lg:mt-64">
          <div className="px-4 py-20 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="">
              <div
                className=""
              >
                <img
                  className="w-full h-64"
                  src={"svg/logo_tsp(500×200).svg"}
                  alt="Logo"
                />
              </div>

              <div className="mt-5">
                <p className="text-lg text-center w-full">
                Indonesia Recovery is  a <span className="font-semibold">web design project for the Indonesian Vocational Olympiad (OLIVIA 2022) </span> in a form of <br></br> a news portal aggregator website that provides information about the rise of new enthusiasm after the COVID-19<br></br> pandemic by spreading positive news and relating to digital transformation in Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-red-100">
        <div className="px-4 py-20 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2">
          <div className="col-span-1">
            <div className="text-4xl lg:text-5xl md:text-5xl font-reguler">
            <div className="lg:mt-64 lg:mb-64 pr-20">
                <div className="border-b-[5px] border-red-500 w-64 mb-5">
                </div>
                <h1>Not an ordinary <br></br>
                <span className="font-bold">News Media</span></h1>
                <p className="font-reguler text-sm lg:text-lg md:text-lg mt-5">
                  Indonesia Recovery provide an innovative and update news from Sabang to Merauke in order to give a full impact towards Indonesia's Community.
                </p>
            </div>
            </div>
          </div>
          <div className="space-y-5 mt-8">

                  <div className="border py-5 px-5 rounded-lg shadow-lg">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 space-y-5">
                      <div className="">
                        <img src={"/images/others/lamputangan.png"} className="lg:ml-5" />
                      </div>
                      <div className="">
                        <h1 className="text-lg font-semibold">Improving <br></br> Knowledge</h1>
                      </div>
                      <div>
                        <h1 className="w-full text-md">Take advantage of existing innovation to improve the quality of their knowledge and helps to generate new ideas</h1>
                      </div>
                    </div>
                  </div>

                  <div className="border py-5 px-5 rounded-lg shadow-lg">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 space-y-5">
                      <div className="">
                        <img src={"/images/others/listrikcepat.png"} className="lg:ml-5" />
                      </div>
                      <div className="">
                        <h1 className="text-lg font-semibold">Accelerate<br></br> Transformation</h1>
                      </div>
                      <div>
                        <h1 className="w-full text-md ">Create a new innovative way to solve daily issues and fasten the public improvement.</h1>
                      </div>
                    </div>
                  </div>

                  <div className="border py-5 px-5 rounded-lg shadow-lg">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 space-y-5">
                      <div className="">
                        <img src={"/images/others/stats.png"} className="lg:ml-5" />
                      </div>
                      <div className="">
                        <h1 className="text-lg font-semibold">Increased<br></br>  Competitiveness </h1>
                      </div>
                      <div>
                        <h1 className="w-full text-md ">Innovation is the key to face the world challenges and increase the value of our beloved country.</h1>
                      </div>
                    </div>
                  </div>

          </div>
          </div>
        </div>
        </section>
        <section className="bg-gray-100">
         
          <div className="px-4 py-10 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-10">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-4xl text-black font-bold tracking-tight sm:text-5xl mt-20">
                Our Team
              </h2>
              <p className="max-w-lg mx-auto text-black mt-4 ">
                Meet our  team of <span className="font-semibold">developers</span>, <span className="font-semibold">designer</span>, <br></br> 
                <span className="font-semibold">documenter</span> and 
                <span className="font-semibold"> supervisor</span>
              </p>
            </div>
          </div>
          <div
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-5 sm:gap-5 ml-5 mr-5"
          >
              <PhotoCard imgLink="/ekky.jpg" title="Ekky Mulia Lasardi" desc="Developer"/>
              <PhotoCard imgLink="thoriq.jpg" title="Mochammad Fadiil Thoriq" desc="Developer"/>
              <PhotoCard imgLink="/aulia.jpg" title="Nurrizkyta Aulia Hanifah" desc="UI/UX Designer"/>
              <PhotoCard imgLink="/wahyu.png" title="Wahyu Mustika Aji" desc="Documenter"/>
              <PhotoCard imgLink="/gema.png" title="Gema Parasti Mindara" desc="Supervisor"/>

          </div>
         
        </section>

   
    </Layout>
  );
}
