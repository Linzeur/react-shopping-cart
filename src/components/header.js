import React from "react";
import ShoppingCart from "../views/shopping-cart";

function Header({ title, qx }) {
  return (
    <header>
      <h1>{title}</h1>
      <ShoppingCart qArticles={qx} />
    </header>
  );
}

export default Header;
