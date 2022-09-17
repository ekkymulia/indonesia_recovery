import Layout from '../components/Layout/layout.component';

export default function Signin(){
    return (
        <Layout>
            <div className='grid grid-cols-10'>
                <div className='col-span-3'>
                <img
                className="h-auto w-24"
                src={"./leftheadersignin.png"}
                alt="Logo"
                />
                </div>

                <div className='col-span-4'>
                <img
                className="h-auto w-56 ml-auto mr-auto"
                src={"./logo_tsp(500×200).svg"}
                alt="Logo"
                />
                </div>

                <div className='col-span-3'>
                <img
                className="h-auto w-24 float-right"
                src={"./rightheadersignin.png"}
                alt="Logo"
                />
                </div>
            </div>

<div className="px-4 py-10 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Sign In</h1>
    </div>

    <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-10">
        <div className="space-y-12">
            <div class="relative z-0">
                <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[3px] border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-black" placeholder=" "/>
                <label for="floating_standard" class="absolute ml-2 text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 -translate-x-2 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div class="relative z-0">
                <input type="password" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[3px] border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="floating_standard" class="absolute ml-2 text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 -translate-x-2 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            </div>
        </div>

        <div className="flex items-center grid grid-cols-5">
            <div className="flex col-span-2">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white rounded border-white bg-white dark:border-white"></input>
                <p className="ml-2 text-sm text-gray-500">
                    Remember me
                </p>
            </div>
            <div className="col-span-3">
                <button
                    type="submit"
                    className="inline-block px-5 py-2.5 w-40 text-sm font-reguler text-white bg-[#FF0909] rounded-md hover:bg-red-500 float-right"
                >
                    Sign in
                </button>
            </div>
        </div>
    </form>
</div>
            
        </Layout>
    )
}