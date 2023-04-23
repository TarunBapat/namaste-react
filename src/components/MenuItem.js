import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/CartSlice";
const MenuItem = ({ item }) => {
  const [individualItemQty, setIndividualItemQty] = useState(0);
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  const addItemToCart = (info) => {
    // console.log("info", info);
    dispatch(addItem(info));
    setIndividualItemQty(individualItemQty + 1);
  };
  const removeFromCart = (info) => {
    dispatch(removeItem(info));
    let updatedCount = individualItemQty > 0 ? individualItemQty - 1 : 0;
    setIndividualItemQty(updatedCount);
  };
  return (
    <div className="flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-gray">
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{item.card.info.name}</h3>
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

        <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray ">
          <button
            className="text-green text-xl"
            onClick={() => {
              addItemToCart(item.card.info);
            }}
          >
            {" "}
            +{" "}
          </button>
          <span className="text-base text-green">{individualItemQty}</span>
          <button
            className="text-xl text-gray-count font-semibold"
            onClick={() => {
              removeFromCart(item.card.info.id);
            }}
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
