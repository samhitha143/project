import React from "react";
import "./Mutton.scss";
import Mutton2 from "./Mutton2";
import Mutton3 from "./Mutton3";

const Mutton1 = () => {
  return (
    <div className="foodsite--Secondrow">
      <h2 className="foodsite--Secondrow--Heading">MUTTON</h2>
      <div className="foodsite--Secondrow--mutton--Items">
        <Mutton2 items={Mutton3[0]} />
        <Mutton2 items={Mutton3[1]} />
        <Mutton2 items={Mutton3[2]} />
        <Mutton2 items={Mutton3[3]} />
      </div>
    </div>
  );
};

export default Mutton1;