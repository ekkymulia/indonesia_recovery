//CURRENTLY NOT USED

import CategoryBox from "../../Elements/CategoryBox/category-box.component";
import { categoryViewedData } from "../../../data/category";

const FmitaCategory = () => {
    return (
          <div className="flex flex-wrap my-3">

           {
            categoryViewedData.map((item) => (
              <CategoryBox text={item.text}/> 
            ))
          }

          </div>  
    );
};

export default FmitaCategory;