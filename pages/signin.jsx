import Layout from '../components/Layout/layout.component';
import Navbar from '../components/Layout/Navbar/navbar.component';
import Footer from '../components/Layout/Footer/footer.component';
import Image from "next/image";

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
            <div className="space-y-2">
            <label for="email" className='font-semibold'>Email</label>

            <div className="relative">
                <input
                type="email"
                className="focus:outline-none w-full p-4 pr-12 text-sm border-b-[3px] border-red-500 shadow-sm bg-white"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                </svg>
                </span>
            </div>
            </div>

            <div className="space-y-2">
            <label for="password" className="font-semibold">Password</label>
            <div className="relative">
                <input
                type="password"
                className="focus:outline-none w-full p-4 pr-12 text-sm border-b-[3px] border-red-500 shadow-sm bg-white"
                placeholder="Enter password"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                </svg>
                </span>
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
                className="inline-block px-5 py-2.5 w-40 text-sm font-reguler text-white bg-red-600 rounded-md hover:bg-red-500 float-right"
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