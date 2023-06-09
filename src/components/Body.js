import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { auth, onAuthStateChanged } from "../../utils/firebase";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { updateLoginStatus } from "../../utils/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filterRestaurentList, setFilterRestaurentList] = useState([]);
  const userProfile = useSelector((store) => store.user.userProfile);
  const dispatch = useDispatch();
  console.log("userProfile", userProfile);
  const filterData = (searchInputText, allRestaurent) => {
    const filteredData = allRestaurent.filter((restaurent) =>
      restaurent.data.name.toLowerCase().includes(searchInputText.toLowerCase())
    );
    setFilterRestaurentList(filteredData);
  };
  async function getRestaurentData() {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1754547&lng=75.7981902&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await resp.json();
    console.log("data", data);
    console.log("all restaurants", data?.data?.cards[2].data.data.cards);
    setAllRestaurent(data.data.cards[2].data.data.cards);
    setFilterRestaurentList(data?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user", currentUser);
      dispatch(updateLoginStatus(currentUser));
    });
    // console.log("user logged in", user);
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    getRestaurentData();
  }, []);
  return (
    <>
      <div className="flex justify-evenly max-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto">
        <input
          type="text"
          value={searchInputText}
          onChange={(e) => setSearchInputText(e.target.value)}
          placeholder=" Search for restaurant"
          className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray"
        />
        <button
          type="button"
          onClick={() => filterData(searchInputText, allRestaurent)}
          className="btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs"
        >
          Search
        </button>
      </div>
      {filterRestaurentList.length == 0 ? (
        <Shimmer /> //<h1>Loading .........</h1>
      ) : (
        <section className="flex flex-wrap justify-between p-8">
          <div className="flex flex-wrap justify-between">
            {filterRestaurentList.map((restaurent) => {
              return (
                <Link
                  className="restaurant-card"
                  to={`/restaurant/${restaurent.data.id}`}
                >
                  <RestaurentCard {...restaurent.data} />
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
export default Body;

// Refrences:
// https://github.com/kavigithub/React-Assignment-Proj
// https://github.com/Ankush-Ladani/Namaste-Web-Series
// https://github.com/Learn-React-With-Harshi/chapter-12-lets-build-our-store/blob/main/index.css
// navigator.onLine
// https://www.youtube.com/watch?v=Dbq6yr9XKX8
// https://blog.logrocket.com/user-authentication-firebase-react-apps/
// https://console.firebase.google.com/project/food-order-signin/authentication/settings
// https://www.freecodecamp.org/news/integrate-a-payment-gateway-in-next-js-and-react-with-razorpay-and-tailwindcss/
