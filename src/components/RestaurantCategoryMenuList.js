import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/CartSlice";

const RestaurantCategoryMenuList = ({ title, itemCards }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const addItemToCart = (info) => {
    // console.log("info", info);
    dispatch(addItem(info));
  };
  return (
    <div className="mb-2 mt-2">
      <p
        class="bg-green-400 border-black text-white p-2 rounded-t-md"
        onClick={() => setShow(!show)}
      >
        {title}
      </p>
      {show && (
        <>
          {itemCards.map((item) => {
            return (
              <div className="flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-gray">
                <div className="flex flex-col basis-[400px]">
                  <h3 className="font-bold text-lg w-3/5">
                    {item.card.info.name}
                  </h3>
                  <h4 className="mt-1 text-base font-normal">
                    {item.card.info.price / 100}
                  </h4>
                  <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
                    {item.card.info.description}
                  </p>
                </div>
                <div>
                  {item.card.info.imageId && (
                    <img
                      className="w-[118px] h-[96px]"
                      src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                    />
                  )}
                  <button
                    className="btn btn--primary w-[118px] h-[34px] mt-2.5"
                    onClick={() => addItemToCart(item.card.info)}
                  >
                    {" "}
                    ADD +
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default RestaurantCategoryMenuList;
