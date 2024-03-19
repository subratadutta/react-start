import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData} = props;
    if (!resData.info || resData.info.length === 0) {
        return <div>No restaurant data available</div>;
    }
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;
     return(
        <div className="res-card">
            <img className="res-logo" alt="" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} Star Ratings</h5>
            <h5>{sla?.slaString} </h5>
        </div>
    )
}

export default RestaurantCard;