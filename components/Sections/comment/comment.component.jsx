const Comment = (props) => {
    return(
        <div>

        {/* Comment Section Person 1 */}
        <div>
        <div className="grid grid-cols-3 w-64 mt-5">
            <div className="col-span-1">
            <img
                src={"/images/team/wahyu.png"}
                class="object-cover w-16 h-16 rounded-full"
            />
            
            
            </div>

            <div className="col-span-2 py-5 w-96">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <h1 className="font-semibold">Jono Mustika</h1>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 col-span-2">
                        <h1 className="text-gray-500 ">5 days ago</h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="grid grid-cols-3 w-64">
            <div className="col-span-1">
                <div className="border-b-[3px] ml-2 border-gray-500 w-12 rotate-90 mt-10 rounded-lg"></div>
            </div>
            <div className="col-span-2 lg:w-96 md:w-96">
            <h1 className="mt-2">Super cool! This innovation is  great! I can't believe this idea exist! Super cool! This innovation is  great! I can't believe this idea exist!</h1>
            </div>
        </div>
        </div>

        {/* Comment Section Person 2 */}
        <div>
        <div className="grid grid-cols-3 w-64">
            <div className="col-span-1">
            <img
                alt="Dog"
                src={"/images/team/ekky.jpg"}
                class="object-cover w-16 h-16 rounded-full"
            />
            </div>

            <div className="col-span-2 py-5 w-96">
                <div className="grid grid-cols-2  w-full">
                    <div className="col-span-1">
                        <h1 className="font-semibold">Ekky Mulia Lasardi</h1>
                    </div>
                    <div className="lg:col-span-1 md:col-span-1 col-span-2">
                        <h1 className="text-gray-500 ">5 hours ago</h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="grid grid-cols-3 w-64">
            <div className="col-span-1">
                <div className="border-b-[3px] ml-2 border-gray-500 w-12 rotate-90 mt-10 rounded-lg"></div>
            </div>
            <div className="col-span-2 lg:w-96 md:w-96">
            <h1 className="mt-2">Super cool! This innovation is  great! I can't believe this idea exist! Super cool!</h1>
            </div>
        </div>
        </div>
</div>
    )
}   
export default Comment;