import React from "react";
import "./Search.css";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

const Search = ({ className, placeholder, onChangeHandler, query }) => {
  const { darkMode } = useSelector((state) => state.darkModeReducer);
  return (
    <div className={darkMode ? "darkSec" : "sec"}>
      <BsSearch className={darkMode ? "darkSec1" : "sec1"} />
      <input
        className={darkMode ? "dark-box" : "search-box"}
        placeholder={placeholder}
        type="text"
        onChange={onChangeHandler}
        value={query}
      />
    </div>
  );
};

export default Search;
