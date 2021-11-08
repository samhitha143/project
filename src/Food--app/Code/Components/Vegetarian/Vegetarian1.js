import React from "react";
import "./Vegetarian.scss";
import Vegetarian2 from "./Vegetarian2";
import Vegetarian3 from "./Vegetarian3";

const Vegetarian1 = () => {
  return (
    <div className="foodsite--Thirdrow">
      <h2 className="foodsite--Thirdrow--Heading">VEGETARIAN</h2>
      <div className="foodsite--Thirdrow--veg--Items">
        <Vegetarian2 items={Vegetarian3[0]} />
        <Vegetarian2 items={Vegetarian3[1]} />
        <Vegetarian2 items={Vegetarian3[2]} />
        <Vegetarian2 items={Vegetarian3[3]} />
      </div>
    </div>
  );
};

export default Vegetarian1;