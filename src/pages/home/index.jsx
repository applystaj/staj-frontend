import React from "react";
import ProductCard from "../../components/product-card";
import ShowCase from "../../sector/showcase";
import Header from "../../pages/header/index";

function Home() {
  return (
    <div>
      <Header />
      <ProductCard />
      <ShowCase></ShowCase>
    </div>
  );
}

export default Home;
