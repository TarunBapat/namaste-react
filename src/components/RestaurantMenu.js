// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1754547&lng=75.7981902&restaurantId=98872&submitAction=ENTER

import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategoryMenuList from "./RestaurantCategoryMenuList";

const RestaurantMenu = () => {
  const restaurantMenu = useRestaurantMenu();
  console.log("restaurantMenu", restaurantMenu);

  return (
    <>
      {!restaurantMenu ? (
        <h2>Loading...............</h2>
      ) : (
        <div className="m-6">
          {restaurantMenu.map((item) => {
            return <RestaurantCategoryMenuList {...item} />;
          })}
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
