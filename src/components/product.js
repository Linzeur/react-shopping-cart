import React from "react";

function Product({ productName, price }) {
  return (
    <>
      <h1>{productName}</h1>
      <h2>{price}</h2>
    </>
  );
}

export default Product;
