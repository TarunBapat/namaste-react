import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filterRestaurentList, setFilterRestaurentList] = useState([]);

  const filterData = (searchInputText, allRestaurent) => {
    const filteredData = allRestaurent.filter((restaurent) =>
      restaurent.data.name.toLowerCase().includes(searchInputText.toLowerCase())
    );
    setFilterRestaurentList(filteredData);
  };
  async function getRestaurentData() {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19414704388351&lng=72.98747308552267&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await resp.json();
    setAllRestaurent(data.data.cards[2].data.data.cards);
    setFilterRestaurentList(data.data.cards[2].data.data.cards);
  }
  useEffect(() => {
    getRestaurentData();
  }, []);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchInputText}
          onChange={(e) => setSearchInputText(e.target.value)}
          className={`search-input`}
        />
        <button
          type="button"
          onClick={() => filterData(searchInputText, allRestaurent)}
          className={`search-btn`}
        >
          Search
        </button>
      </div>
      <section className="card-list">
        {filterRestaurentList.map((restaurent) => {
          return <RestaurentCard {...restaurent.data} />;
        })}
      </section>
    </>
  );
};
export default Body;

//https://github.com/kavigithub/React-Assignment-Proj
