import React from "react";
import ProductCard from "../../components/product-card";
import ShowCase from "../../sector/showcase";
import Header from "../../layout/index";

function Home() {
  return (
    <div>
      <ProductCard />
      <ShowCase></ShowCase>
    </div>
  );
}

export default Home;
