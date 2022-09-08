const Faq = (props) => {
    const {ClassName} = props
    return (
        <section className={ClassName}>
            <div className="colspan-4 mb-11">
                <h1 className="text-2xl pb-3">Frequently Asked Question</h1>
                <div className=" border-b-[4px] border-red-500 w-28"/>
            </div>

            <div className="space-y-4">
                <details className="group" open>
                    <summary
                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                    >
                    <h5 className="font-medium text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <svg
                        className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    </summary>

                    <p className="px-4 mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                    </p>
                </details>

                <details className="group">
                    <summary
                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                    >
                    <h5 className="font-medium text-gray-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                    </h5>

                    <svg
                        className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    </summary>

                    <p className="px-4 mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                    </p>
                </details>
            </div>

        </section>
    );
};

export default Faq;