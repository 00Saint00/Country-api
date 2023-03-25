import { useEffect } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleCountries } from "../../redux/countries/Action";
import CountryPage from "./CountryPage";
import "./Country.css";

const SingleCountry = () => {
  const { country } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCountries(country));
  }, [dispatch, country]);
  return (
    <div>
      <Header />
      <div className="singleCountry">
        <CountryPage />
      </div>
    </div>
  );
};

export default SingleCountry;
