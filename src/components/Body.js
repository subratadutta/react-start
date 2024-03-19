import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [list,setList] = useState(resList);
  const topRated = () => {
    const filteredList = list.filter((response) => {
      return response.info.avgRating > 4;
    })
    setList(filteredList);
  }
    return( 
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={topRated}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                list.map(restaurant => {
                  //console.log("restaurant",restaurant.info.id);
                  return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                })
              }
            </div>
        </div>
    )
}

export default Body;