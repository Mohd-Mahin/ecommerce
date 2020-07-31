import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/order">Order</Link>
    </div>
  );
}
