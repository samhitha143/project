import React from "react";

import Service2 from './Service2';
import Service3 from './Service3';

const Service = () => {
  return (
    <div className="Firstrow">
      <div className="Firstrow--Items">
        <Service2 items={Service3[0]} />
        <Service2 items={Service3[1]} />
        <Service2 items={Service3[2]} />
      </div>
    </div>
  );
};

export default Service;
