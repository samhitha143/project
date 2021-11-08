import React from "react";

import "./App.css";
import Navbar from "./Food--app/Code/Components/Navbar/Navbar";
import Chicken1 from "./Food--app/Code/Components/Chicken/Chicken1";
import Mutton1 from "./Food--app/Code/Components/Mutton/Mutton1";
import Vegetarian1 from "./Food--app/Code/Components/Vegetarian/Vegetarian1";
import Jucies1 from "./Food--app/Code/Components/Juices/Jucies1";
import Deserts1 from "./Food--app/Code/Components/Deserts/Deserts1";
import Footer1 from "./Food--app/Code/Components/Footer/Footer1";
import Nav from "./Food--app/Code/Components/Navbar/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar />
      <Chicken1 />
      <Mutton1 />
      <Vegetarian1 />
      <Jucies1 />
      <Deserts1 />
      <Footer1 />
      
    </div>
  );
}

export default App;