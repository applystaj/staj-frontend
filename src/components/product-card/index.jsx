import React from "react";
import winterSuit from "../product-card/winterSuit.png";

const ProductCard = () => {
  return (
    <div className="flex border-2 border-blue-900 rounded-sm overflow-hidden w-[800px] m-10 items-center">
      <img
        src={winterSuit}
        alt="Winter suit without boot"
        className="flex w-[200px] h-full object-cover"
      />
      <div className="flex p-3 flex-auto flex-col">
        <h2 className="m-0 text-xl">Winter suit without boot</h2>
        <div className="flex justify-center my-2.5">
          <span className="mr-2.5">★★★☆☆</span>
          <span>3/5</span>
        </div>
        <ul className="list-none p-0 my-2.5">
          <h4>Color: Rainbow</h4>
          <h4>Material: Pollution Free</h4>
          <h4>Delivery: Maharashtra</h4>
          <h4>Warranty: 5 years</h4>
        </ul>
      </div>
      <div className="flex text-2xl p-3 flex-1 flex-col justify-evenly items-stretch">
        2000.00 TL
        <div className="text-green-500 m-auto p-1.5 text-xs">
          Paid Shipping <br />
          1-2 weeks
        </div>
        <div className="flex gap-2.5 justify-around">
          <button className="bg-white text-black border border-gray-500 text-sm rounded py-2.5 px-5 cursor-pointer">
            DETAILS
          </button>
        </div>
        <div className="flex gap-2.5 justify-around mt-2">
          <button className="bg-white text-black border border-gray-500 text-sm rounded py-2.5 px-5 cursor-pointer">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
