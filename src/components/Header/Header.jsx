import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { switchColorMode } from "../../redux/countries/Action";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(switchColorMode());
  };

  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div className={darkMode ? "headerDark" : "header"}>
      <Link to="/">
        <div className="head">
          <h3>Where in the world?</h3>
        </div>
      </Link>
      <div className="head1">
        <h4 onClick={onChange}>
          {darkMode ? <BsSun /> : <BsMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </h4>
      </div>
    </div>
  );
};

export default Header;
