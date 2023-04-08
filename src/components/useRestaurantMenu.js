import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  const { resId } = useParams();
  async function fetchRestaurantMenu() {
    const resp = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1754547&lng=75.7981902&restaurantId=${resId}&submitAction=ENTER`
    );
    const data = await resp.json();
    const menuItems =
      data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
    const nestedItemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.Dish";
    const category =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    // console.log("individual restaurant data", menuItems);
    const initialMenu = menuItems.map((item) => {
      if (item.card.card["@type"] == category) {
        return item.card.card;
      }
    });
    // console.log("individual restaurant data", initialMenu);
    let menu = initialMenu.filter((item) => item !== undefined);
    setRestaurantMenu(menu);
    // console.log("menu", menu);
  }
  useEffect(() => {
    fetchRestaurantMenu();
  }, [resId]);

  return restaurantMenu;
};
export default useRestaurantMenu;
