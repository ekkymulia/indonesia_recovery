import TriangleIcon from "../Icon/triangle.icon";

const HighlightDropdownList = ({text} = props) => {
    
    return (
        {
             ? (
                <li class="ml-3 font-semibold flex items-center">
                    <TriangleIcon/>
                    <a className="-translate-x-4">{text}</a>
                </li>
            ) : (
                <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300">
                    <a className="-translate-x-4">{text}</a>
                </li>
            )
        }


    );
};

export default HighlightDropdownList;