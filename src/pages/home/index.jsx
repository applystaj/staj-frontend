import React from "react";
import ProductCard from "../../components/product-card";
import Brand from "../../components/brand";
import ShowCase from "../../sector/showcase";
import Header from "../../layout/header";

function Home() {
  return (
    <div>
      <Header />
      <ShowCase />
      <Brand />
      <ProductCard />
    </div>
  );
}

export default Home;
