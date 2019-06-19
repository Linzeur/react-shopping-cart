<<<<<<< HEAD
import React from "react";
import { render } from "react-dom";
import App from "./app";

const $root = document.getElementById("root");
render(<App />, $root);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './views/product-detail';
import { listProduct } from './data/product-fake';

const product = listProduct[0];
console.log(product);

ReactDOM.render(
  <ProductDetail product={product} />,
  document.getElementById('root')
);
>>>>>>> Product list
