const CategoryBox = ({text} = props) => {
    return (
        <a href="#" className="p-2 transition-transform border-current hover:-translate-x-1 hover:-translate-y-1 m-1 border-2 border-solid rounded-lg text-red-500 border-red-500">
            <h3>{text}</h3>
        </a> 
    );
};

export default CategoryBox;