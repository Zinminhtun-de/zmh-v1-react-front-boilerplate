import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home.js";

const RouteUI = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
    </Routes>
  );
};

export default RouteUI;
