import React from "react";
import Boxes from "../Boxes";
import { FaTruckFast } from "react-icons/fa6";
import { FaHome, FaLock } from "react-icons/fa";

const features = [
  {
    icon: <FaTruckFast />,
    title: "Fast delivery",
    description:
      "Flipkart is an eminent market and sizable internet site.Which permits the vendor to promote their various product on this well-known marketplace once they have registered.",
  },
  {
    icon: <FaHome />,
    title: "Doorstep",
    description:
      "Flipkart is an eminent market and sizable internet site.Which permits the vendor to promote their various product on this well-known marketplace once they have registered.",
  },
  {
    icon: <FaLock />,
    title: "High secured",
    description:
      "Flipkart is an eminent market and sizable internet site.Which permits the vendor to promote their various product on this well-known marketplace once they have registered.",
  },
];

const BoxContainer = () => {
  return (
    <div className="bg-white-100 py-12">
      <div className="container mx-auto grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Boxes
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxContainer;
