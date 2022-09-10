//DEPRECATED, NOT USED

import CategoryCard from "../CategoryCard/category-card.component";

const FmitaCategory = () => {
    return (
        <div className="flex flex-col">
          <span>Discover Latest Category Updates</span> 
          <div className="flex flex-wrap my-3">

          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
            
          </div>  
      </div> 
    );
};

export default FmitaCategory;