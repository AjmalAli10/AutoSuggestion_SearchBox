import "./SearchBox.css";
import { useState, useEffect } from "react";
import { filterData } from "./helper";

const SearchBox = () => {
  const [data, setData] = useState([]);
  const [filterSearchData, setFilterSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const responeData = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const jsonData = await responeData.json();
    console.log(jsonData);
    setData(jsonData);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    const filterSearch = filterData(searchInput, data);
    setFilterSearchData(filterSearch);
    console.log(filterSearch);
  };

  return (
    <div>
      <input
        className="inputSearch"
        type="text"
        placeholder="searching .."
        value={searchInput}
        onChange={handleSearchChange}
      />
      <div>
        {searchInput !== ""
          ? filterSearchData.map((searchData) => {
              return <div key={searchData.id}>{searchData.title}</div>;
            })
          : null}
      </div>
    </div>
  );
};
export default SearchBox;
