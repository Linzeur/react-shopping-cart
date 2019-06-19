import React from "react";
import { render } from "react-dom";
import App from "./app";
import Cart from "./components/cart-item";

const $root = document.getElementById("root");
render(<Cart />, $root);
