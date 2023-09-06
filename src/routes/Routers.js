import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CarsList from "../pages/CarsList";
// import PizzaDetails from "../pages/PizzaDetails";
// import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/home" element={<CarsList />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/checkout" element={<Checkout />} />
      {/* <Route path="/pizzas/:id" element={<PizzaDetails />} /> */}
    </Routes>
  );
};

export default Routers;
