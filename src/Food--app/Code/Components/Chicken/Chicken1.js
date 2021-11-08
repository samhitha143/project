import React from "react";
import "./Chicken.scss";
import Chicken2 from "./Chicken2";
import Chicken3 from "./Chicken3";

const Chicken1 = () => {
  return (
    <div className="foodsite--Firstrow">
      <h2 className="foodsite--Firstrow--Heading">CHICKEN</h2>
      <div className="foodsite--Firstrow--chicken--Items">
        <Chicken2 items={Chicken3[0]} />
        <Chicken2 items={Chicken3[1]} />
        <Chicken2 items={Chicken3[2]} />
        <Chicken2 items={Chicken3[3]} />
      </div>
    </div>
  );
};

export default Chicken1;