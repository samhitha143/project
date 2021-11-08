import React from "react";
import "./Deserts.scss";
import Deserts2 from "./Deserts2";
import Deserts3 from "./Deserts3";

const Deserts1 = () => {
  return (
    <div className="foodsite--Fifthrow">
      <h2 className="foodsite--Fifthrow--Heading">DESERTS</h2>
      <div className="foodsite--Fifthrow--deserts--Items">
        <Deserts2 items={Deserts3[0]} />
        <Deserts2 items={Deserts3[1]} />
        <Deserts2 items={Deserts3[2]} />
        <Deserts2 items={Deserts3[3]} />
      </div>
    </div>
  );
};

export default Deserts1;