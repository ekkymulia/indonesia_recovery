const NewsUpdateCard = (props) => {
    const { ClassName } = props;
    return (
        <blockquote className={`${ClassName}`}>
            <div className=''>         
                <heading>
                    <h2 className='text-lg font-semibold'>Energy Renewal: Plastic Waste to Fuel</h2>
                </heading>   
                <main className='grid grid-colspan-8 grid-flow-col mt-1'>
                    
                    <div className='mt-2 col-span-5 flex flex-col justify-between'>
                        <div>
                            <p className="mt-2 text-justify text-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto alias incidunt cum tempore aliquid aliquam error quisquam ipsam asperiores! Iste?</p>
                        </div>
                    </div>
                </main>
                <footer className="mt-5 flex flex-wrap">
                    <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 group focus:outline-none focus:ring" href="/download">
                        <span className="absolute inset-0 border rounded-lg border-current"></span>
                        <span className="block px-5 py-3 bg-white border rounded-lg transition-transform border-current group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-red-600 group-hover:text-white">
                        Contact Us
                        </span>
                    </a>

                    <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 " href="/download">
                    <span className="block px-5 py-3 transition-transform hover:-translate-x-1 hover:-translate-y-1">
                    Environtment
                    </span>
                    </a>

                    <a className="relative inline-block text-sm font-medium text-red-600 active:text-red-500 " href="/download">
                    <span className="block px-5 py-3 transition-transform hover:-translate-x-1 hover:-translate-y-1">
                    3min Reading
                    </span>
                    </a>

                </footer>
            </div>    
        </blockquote>
    );
};

export default NewsUpdateCard;