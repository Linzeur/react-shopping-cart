/**@jsx jsx */
import React from "react";
import { jsx, Global } from "@emotion/core";
// import CartView from './views/cart';
import Header from "./components/header";

function App() {
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      />
      {/* <CartView /> */}
      <Header />
    </>
  );
}

export default App;
