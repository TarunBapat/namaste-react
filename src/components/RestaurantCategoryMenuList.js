import { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantCategoryMenuList = ({ title, itemCards }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-2 mt-2">
      <p
        className="bg-green-400 border-black text-white p-2 rounded-t-md"
        onClick={() => setShow(!show)}
      >
        {title}
      </p>
      {show && (
        <>
          {itemCards.map((item) => {
            return <MenuItem item={item} />;
          })}
        </>
      )}
    </div>
  );
};
export default RestaurantCategoryMenuList;
