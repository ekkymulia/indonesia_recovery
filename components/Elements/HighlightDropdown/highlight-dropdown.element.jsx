import TriangleIcon from "../Icons/triangle.icon";

const HighlightDropdown = () => {
    return (
        <ul className=" space-y-3">
            <li class="ml-3 font-semibold flex items-center">
                <TriangleIcon/>
                <a className="-translate-x-4">Hightlight News</a>
            </li>

            <li class="ml-3 text-gray-600 cursor-pointer hover:translate-x-1 transition-transform hover:duration-300">
            <a className="-translate-x-4">Technology Updates</a>
            </li>
            
            <li class="ml-3 text-gray-600">Socio Economics</li>
            <li class="ml-3 text-gray-600">Recently</li>
        </ul>
    );
};

export default HighlightDropdown;