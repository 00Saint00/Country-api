import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import Body from "./Body/Body";
import { CircularProgress } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/countries/Action";

const Components = () => {
  const [query, setQuery] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const { loading, country: countries } = useSelector(
    (state) => state.countryReducer
  );

  const filteredCountries = countries
    ? countries.filter(({ name }) =>
        name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    : [];

  const onChangeHandler = ({ target: { value } }) => setQuery(value);

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
        <Filter value={query} handleChange={onChangeHandler} />
      </div>
      <div className={darkMode ? "dark-container" : "body-container"}>
        {loading ? (
          <CircularProgress />
        ) : (
          filteredCountries?.map((items, i) => (
            <Body
              key={i}
              image={items.flag}
              country={items.name}
              population={Number(items.population).toLocaleString()}
              region={items.region}
              capital={items.capital}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Components;
