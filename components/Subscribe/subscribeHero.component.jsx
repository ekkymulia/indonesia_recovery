const SubscribeHero = (props) => {
    const {Class} = props
    return (
        <div class={Class}>
            <div class="md:col-span-3 col-span-5">
                <h3 class="text-xl text-black"><span class="font-bold">Join our pathway</span> to be part of Indonesia's growth journey by keep updated with the latest news!</h3>
            </div>
            <div class="md-col-span-2 col-span-5 grid place-items-center grid-flow-col">
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