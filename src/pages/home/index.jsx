import React from "react";
import ProductCard from "../../components/product-card";
import Brand from "../../components/brand";
import ShowCase from "../../sector/showcase";
import Header from "../../layout/header";
import Slider from "../../components/Slider";
import BoxContainer from "../../components/BoxContainer";

function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <BoxContainer />
      <ShowCase />
      <Brand />
      <ProductCard />
    </div>
  );
}

export default Home;
