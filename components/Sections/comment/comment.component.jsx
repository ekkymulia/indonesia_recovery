const Comment = (props) => {
    const { comments } = props
    return(
        <div className="mx-5">

            <div>

            {
                
                comments.map((item) => {
                    const {comment_id, userName, userImg, userComment, date_added, like} = item;
                    return(
                        <div key={comment_id} className="grid grid-cols-3 w-64 my-8">
                            <div className="col-span-1">
                            <img
                                src={`/images/${userImg}`}
                                className="object-cover w-16 h-16 rounded-full"
                            />
                            </div>
                
                            <div className="col-span-2 py-5 lg:w-96 w-64">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1">
                                        <p className="font-semibold">{userName}</p>
                                    </div>
                                    <div className="lg:col-span-1 md:col-span-1 col-span-2">
                                        <p className="text-gray-500 ">{date_added}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-3 w-64">
                                <div className="col-span-1">
                                    <div className="border-b-[3px] ml-2 border-gray-300 w-12 rotate-90 mt-10 rounded-lg"></div>
                                </div>
                                <div className="col-span-2 lg:w-96 md:w-96">
                                <p className="mt-2">{userComment}</p>
                                </div>
                            </div>
                        </div>
                    )

                })

            }

            </div>
        </div>
    )
}   
export default Comment;