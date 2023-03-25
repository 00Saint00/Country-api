import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "../components/Components";
import SingleCountry from "../components/Single-Country/SingleCountry";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/:country/details" element={<SingleCountry />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
