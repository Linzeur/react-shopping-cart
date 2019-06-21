/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import Product from "../components/product";
import { listProduct } from "../data/product-fake";

function ProductList() {
  return listProduct.map(p => (
    <Link
      to={`/products/${p.id}`}
      css={{ textDecoration: "none", color: "inherit" }}
    >
      <Product productName={p.name} price={p.price} />
    </Link>
  ));
}

export default ProductList;
