import React from "react";
import Product from "./Product";

const Main = () => {
    
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        backgroundColor: "grey",
        paddingTop: "1rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Main;
