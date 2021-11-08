import React from "react";
import './Juices.scss';
import Juices2 from "./Juices2";
import Juices3 from "./Juices3";

const Juices1 = () => {
  return (
    <div className="foodsite--Fourthrow">
      <h2 className="foodsite--Fourthrow--Heading">JUICES</h2>
      <div className="foodsite--Fourthrow--juice--Items">
        <Juices2 items={Juices3[0]} />
        <Juices2 items={Juices3[1]} />
        <Juices2 items={Juices3[2]} />
        <Juices2 items={Juices3[3]} />
      </div>
    </div>
  );
};

export default Juices1;