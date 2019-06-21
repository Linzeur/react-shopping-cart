/**@jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
import { Router, Redirect } from "@reach/router";

import ProductList from "./views/product-list";
import ProductDetail from "./views/product-detail";
import Cart from "./views/cart";

function App() {
  const bodyStyle = {
    body: {
      margin: 0
    },
    "#root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }
  };

  return (
    <>
      <Global styles={bodyStyle} />
      <Router>
        <Redirect from="/" to="/products" noThrow />
        <ProductList path="/products" />
        <ProductDetail path="/products/:id" />
        <Cart path="/cart" />
      </Router>
    </>
  );
}

export default App;
