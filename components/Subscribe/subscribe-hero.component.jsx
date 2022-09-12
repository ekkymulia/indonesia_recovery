

const SubscribeHero = (props) => {
    const {ClassName} = props
    return (
        <section className={ClassName}>
            <div className="md:col-span-3 col-span-5">
                <h3 className="text-xl"><span className="font-bold">Join our pathway</span> to be part of Indonesia’s growth journey by keep updated with the latest news!</h3>
            </div>
            <div className="md-col-span-2 col-span-5 grid place-items-center grid-flow-col">
                <a className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring" href="/download">
                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                    <span className="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Join Today
                    </span>
                </a>
    
    
                <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring ml-8" href="/download">
                    <span className="absolute inset-0 border border-current"></span>
                    <span className="block px-12 py-3 bg-white border transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Contact Us
                    </span>
                </a>
            </div>
            
            </section>
            
            
        
    );
};


export default SubscribeHero;