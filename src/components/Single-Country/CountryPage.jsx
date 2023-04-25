import React from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { CardMedia, Typography } from "@mui/material";
import "./Country.css";

const CountryPage = () => {
  const { singleCountry, loading } = useSelector(
    (state) => state.SingleCountryReducer
  );
  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div className={darkMode ? "darkDetails" : "details"}>
      {loading && <CircularProgress />}
      {!loading &&
        singleCountry?.map((item, i) => (
          <div key={i} className="single">
            <div className="media">
              <CardMedia
                component="img"
                height="400"
                image={item.flag}
                alt={item.name}
              />
            </div>
            <div className={darkMode ? "darkInfo" : "infos"}>
              <Typography gutterBottom variant="h5" component="div">
                <strong>{item.name}</strong>
              </Typography>
              <div className={darkMode ? "darkTypography" : "typography"}>
                <div>
                  <strong>Native Name:</strong> {item.nativeName}
                  <p>
                    <strong>Population:</strong>{" "}
                    {Number(item.population).toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {item.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {item.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {item.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain:</strong> {item.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {item.currencies.map((x) => x.name)}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {item.languages.map((y) => y.name).join(", ")}
                  </p>
                </div>
              </div>
              <div>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="bottom"
                >
                  <p>
                    <strong>Border Countries:</strong>
                  </p>
                  {item.borders?.map((z) => (
                    <div className={darkMode ? "borderDarkMode" : "border"}>
                      <button
                        className={
                          darkMode ? "btnCountryDarkMode" : "btnCountry"
                        }
                      >
                        {z}
                      </button>
                    </div>
                  ))}
                </Typography>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CountryPage;
