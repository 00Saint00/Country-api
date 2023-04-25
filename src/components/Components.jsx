import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import Body from "./Body/Body";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/countries/Action";

const Components = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const { loading, country: countries } = useSelector(
    (state) => state.countryReducer
  );

  console.log(loading);

  const filteredCountries = countries
    ? countries.filter(
        ({ name, region }) =>
          name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          region.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    : [];

  console.log(filteredCountries);

  console.log(filter);
  const onChangeHandler = ({ target: { value } }) => setQuery(value);
  const onFilter = ({ target: { value } }) => setFilter(value);

  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div className={darkMode ? "AppDarkMode" : "App"}>
      <Header />
      <div className="Mini">
        <Search
          query={query}
          onChangeHandler={onChangeHandler}
          placeholder="Search by country name"
        />
        <Filter value={filter} handleChange={onFilter} />
      </div>
      <div className={darkMode ? "dark-container" : "body-container"}>
        {loading && (
          <div className="loader">
            <CircularProgress />
          </div>
        )}
        {!loading &&
          filteredCountries?.map((items, i) => (
            <Body
              key={i}
              image={items.flag}
              country={items.name}
              population={Number(items.population).toLocaleString()}
              region={items.region}
              capital={items.capital}
            />
          ))}
      </div>
    </div>
  );
};

export default Components;
