const SubscribeHero = () => {
    return (
        <div class="bg-gray-100 p-8 md:p-12 lg:px-20 lg:py-24 grid grid-cols-5 gap-4 place-items-center">
            <div class="col-span-3">
                <h3 class="text-xl"><span class="font-bold">Join our pathway</span> to be part of Indonesia’s growth journey by keep updated with the latest news!</h3>
            </div>
            <div class="col-span-2 grid place-items-center grid-flow-col">
                <a class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
                    <span class="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                    <span class="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Join Today
                    </span>
                </a>
    
    
                <a class="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring ml-8" href="/download">
                    <span class="absolute inset-0 border border-current"></span>
                    <span class="block px-12 py-3 bg-white border transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Contact Us
                    </span>
                </a>
            </div>
        </div>
    );
};


export default SubscribeHero;