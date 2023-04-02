import { IMG_CDN_URL } from "../../constants";
const RestaurentCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  lastMileTravelString,
  title,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h6>{title}</h6>
      <h4>Stars : {avgRating} </h4>
      <h5>
        <small>Delivery Time : {deliveryTime}</small>
        <small>Travel Distance : {lastMileTravelString}</small>
      </h5>
    </div>
  );
};

export default RestaurentCard;