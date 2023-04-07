// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1754547&lng=75.7981902&restaurantId=98872&submitAction=ENTER

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   console.log(params);
  useEffect(() => {
    fetchRestaurantMenu();
  }, [resId]);

  async function fetchRestaurantMenu() {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1754547&lng=75.7981902&restaurantId=98872&submitAction=ENTER"
    );
    const data = await resp.json();
    console.log(
      "individual restaurant data",
      Object.values(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    );
  }
  return (
    <>
      <h1>RestaurantMenu</h1>
    </>
  );
};

export default RestaurantMenu;
