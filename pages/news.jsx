import Layout from '../components/Layout/layout.component';


export default function News(){
    return(
        <Layout>
            
            <div className="p-8 md:p-12 lg:px-20 lg:py-10 bg-white mt-24">
                <div className="max-w-lg text-center sm:text-left">
                    <div className="flex flex-wrap my-3">
                    <span className="mt-2 sm:mt-0 text-black text-1xl">24 August 2022</span>
                    <span className="ml-10 mt-2 sm:mt-0 text-red-400 text-1xl">Technology</span>
                    </div>
                
                <h2 className="text-2xl font-reguler text-black sm:text-4xl">
                    <b>Holograms make learning so much easier</b>
                </h2>

                <div className='mt-3'>
                    <p className="text-red-600"><b>G20 Indonesia 2022</b></p>
                    <p className="text-red-400">Media Partner SDG Campaign</p>
                </div>
                </div>
            </div>

            <div className='p-8 md:p-12 lg:px-20 lg:py-10 grid grid-flow-row-dense grid-cols-3'>
                <div className='col-span-3 lg:col-span-2'>
                    <img
                    src={"./hologram2.jpg"}
                    style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                    alt=""
                    />

                        
                    <div className="px-9 py-9 -translate-y-28">
                        <div className='bg-red-300 px-10 py-10 rounded-lg object-cover shadow-xl'>
                            <div className="inline-block text-sm font-medium text-white">
                                <h1 className="text-black lg:text-3xl font-reguler">5 Min</h1>
                                <div className=" border-b-[3px] border-red-500 lg:w-28"/>
                                <p className="text-red-600 mt-3 text-sm">Reading</p>
                            </div> 
                            <div className="inline-block text-sm font-medium text-red-600 ml-20">
                                <h1 className="text-black lg:text-3xl font-reguler">80+</h1>
                                <div className=" border-b-[3px] border-red-500 lg:w-28"/>
                                <p className="text-red-600 mt-3 text-sm">Readers</p>
                            </div>
                            <div className="inline-block text-sm font-medium text-red-600 ml-20">
                                <h1 className="text-black lg:text-3xl font-reguler">Keren</h1>
                                <div className=" border-b-[3px] border-red-500 lg:w-28"/>
                                <p className="text-red-600 mt-3 text-sm">Review</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div>
                </div>
            </div>

            

        </Layout>

    )
}