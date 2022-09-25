import React, {useState} from "react";

const StarGray = () => {
    const [like, setlike] = useState(49);
    const [likeactive, setlikeactive] = useState(false);

    function likef(){
        if(likeactive){
            setlikeactive(false)
            setlike(like-1)
        }else{
            setlikeactive(true)
            setlike(like+1)
        }
    }
    return (
        <div className="grid grid-cols-2">
        <svg width="33" height="33" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.3427 14.2412L27.9452 12.4395L22.4032 1.20412C22.2519 0.896502 22.0029 0.647479 21.6952 0.496112C20.9238 0.115252 19.9862 0.432635 19.6005 1.20412L14.0585 12.4395L1.66106 14.2412C1.31926 14.2901 1.00676 14.4512 0.767502 14.6953C0.478252 14.9926 0.318863 15.3926 0.324356 15.8074C0.32985 16.2221 0.499777 16.6177 0.796799 16.9072L9.76653 25.6524L7.64738 38.001C7.59769 38.2882 7.62948 38.5837 7.73914 38.8538C7.84881 39.1239 8.03196 39.3579 8.26784 39.5292C8.50371 39.7005 8.78287 39.8023 9.07365 39.823C9.36444 39.8438 9.65521 39.7826 9.91301 39.6465L21.0019 33.8164L32.0907 39.6465C32.3935 39.8076 32.745 39.8613 33.082 39.8028C33.9316 39.6563 34.5029 38.8506 34.3564 38.001L32.2372 25.6524L41.207 16.9072C41.4511 16.668 41.6122 16.3555 41.6611 16.0137C41.7929 15.1592 41.1972 14.3682 40.3427 14.2412Z" fill="#C20202" className="hover:fill-red-400 hover:cursor-pointer" onClick={likef}/>
        </svg>     
        <h1 className="text-gray-400 text-2xl ml-1 mt-1">
            {like}
        </h1>
        </div>

    );
};

export default StarGray;