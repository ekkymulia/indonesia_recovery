import React from 'react';

function Popup(props){
    return (props.trigger) ? (
<div class="fixed inset-x-0 bottom-0 p-4">
  <div class="relative max-w-xl p-10 bg-white rounded-lg shadow-2xl">
    <button
      type="button"
      class="absolute p-4 text-red-600 -top-0.5 -right-1"
      onClick={() => props.setTrigger(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div class="grid grid-cols-2 gap-4">
      <img
        class="md:w-0 w-0 object-cover lg:w-full lg:h-full rounded-xl"
        src={"./bgpopup.png"}
        alt=""
      />

      <div className="col-span-2 lg:col-span-1">
        <h2 class="text-2xl font-bold text-gray-900">
          Grow Your Ideas
        </h2>
        
        <div className="mt-5 grid grid-flow-col place-content-start">
        <img src={"./ceklis.svg"}></img>
        <p class="ml-2 text-sm text-gray-500">
          Get latest innovative news
        </p>
        </div>
        <div className="mt-3 grid grid-flow-col place-content-start">
        <img src={"./ceklis.svg"}></img>
        <p class="ml-2 text-sm text-gray-500">
          Explore new ideas each day
        </p>
        </div>
        <div className="mt-3 grid grid-flow-col place-content-start">
        <img src={"./ceklis.svg"}></img>
        <p class="ml-2 text-sm text-gray-500">
          Save your day
        </p>
        </div>
        

            <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
            <div>
            <label for="email" class="sr-only">Email</label>

            <div class="relative">
                <input
                type="email"
                class="focus:outline-none focus:border-red-400 focus:border-[2px] w-full p-4 pr-12 text-sm rounded-lg shadow-sm bg-gray-100 "
                placeholder="Type your email"
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-400"
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
            <div class="flex items-center justify-between">
            <button
                type="submit"
                class="inline-block px-5 py-3 text-sm font-medium text-white bg-[#FF0909] rounded-lg hover:bg-red-500"
            >
                Subscribe
            </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>

    ) : "";
}

export default Popup;