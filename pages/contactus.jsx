import Layout from '../components/Layout/layout.component';

export default function Contactus(){
    return(
        <Layout>
<div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 grid grid-cols-10">
        <div className="col-span-10 lg:col-span-4">
        <div className="mx-auto mt-20">
            <h1 className="text-2xl sm:text-3xl">
            Let's Collaborate to make a <br></br>
            </h1>
            <h1 className="mt-2 text-2xl sm:text-3xl font-bold">Breakthrough Innovation</h1>

        </div>

        <form action="" className="w-auto mt-8 mb-0 space-y-4">
            <div>
            <label for="name" className="sr-only">Name</label>

            <div className="relative">
                <input
                type="text"
                className="focus:outline-none focus:border-red-400 focus:border-[2px] w-full p-4 pr-12 border border-gray-200 text-sm bg-white rounded-lg shadow-inner"
                placeholder="Name"
                />
            </div>
            </div>

            <div>
            <label for="email" className="sr-only">Email</label>

            <div className="relative">
                <input
                type="email"
                className="focus:outline-none focus:border-red-400 focus:border-[2px] w-full p-4 pr-12 border border-gray-200 text-sm bg-white rounded-lg shadow-inner"
                placeholder="Enter email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                </svg>
                </span>
            </div>
            </div>

            <div>
            <label for="yourtopic" className="sr-only">Your topic</label>

            <div className="relative">
                <input
                type="email"
                className="focus:outline-none focus:border-red-400 focus:border-[2px] w-full p-4 pr-12 border border-gray-200 text-sm bg-white rounded-lg shadow-inner"
                placeholder="Your Topic"
                />
            </div>
            </div>

            <div>
            <label for="yourtopic" className="sr-only">Your topic</label>

            <div className="relative">
            <textarea id="message" rows="4" className="focus:outline-none focus:border-red-400 focus:border-[2px] w-full p-4 pr-12 border border-gray-200 text-sm bg-white rounded-lg shadow-inner" placeholder="Tell us about you"></textarea>
            </div>
            </div>


            <div className="flex items-center justify-between">
            <button
                type="submit"
                className="inline-block px-5 py-2.5 w-40 text-sm font-reguler text-white bg-[#FF0909] rounded-md hover:bg-red-500"
            >
                Submit
            </button>
            </div>
        </form>
        </div>
        
        <div className='lg:col-span-2'></div>

        <div className="col-span-10 lg:col-span-4">
            <div className='space-y-5'>
            <div className="mx-auto mt-20 space-y-3">
                <img 
                src={"/svg/messageicon.svg"}
                className="h-auto w-14"
                ></img>

                <h1>Email</h1>

                <p className="font-semibold">indonesiarecovery@gmail.com </p>
                
                <div className="border-b-[3px] border-red-500 w-64"></div>
            </div>
            <div className="mx-auto mt-20 space-y-3">

                <h1>Instagram</h1>

                <p className="font-semibold">@indonesia.recovery</p>
                
                <div className="border-b-[3px] border-red-500 w-64"></div>
            </div>
            <div className="mx-auto mt-20 space-y-3">

                <h1>Twitter</h1>

                <p className="font-semibold">@indonesiarecovery</p>
                
                <div className="border-b-[3px] border-red-500 w-64"></div>
            </div>
            <div className="mx-auto mt-20 space-y-3">

                <h1>Facebook</h1>

                <p className="font-semibold">/indonesiarecovery</p>
                
                <div className="border-b-[3px] border-red-500 w-64"></div>
            </div>
            </div>
            
        </div>
</div>

<div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 grid grid-cols-10">
    <div className='col-span-10 lg:col-span-4'>
        <div className="mx-auto mt-10 space-y-5">
            <img
            src={"/svg/pointlocation.svg"}
            className="h-auto w-14"
            ></img>
            <h1 className="text-2xl sm:text-3xl font-semibold">
            Our Basecamp
            </h1>
            <p className='text-xl font-medium'>IPB University School of Vocational Studies</p>
            <p className="text-md font-reguler" >Jl. Kumbang No.14, RT.02/RW.06, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128</p>
            <div className="border-b-[3px] border-red-500 w-64"></div>
        </div>
    </div>
    
    <div className="col-span-2"></div>

    <div className='relative mt-10 col-span-10 lg:col-span-4'>
        <img
        src={"/images/others/sekolahvokasi.jpg"}
        className="rounded-md shadow-2xl h-auto w-96"
        ></img>
    </div>
</div>
        </Layout>
    )
}

