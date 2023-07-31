import React from "react";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="row">
      <div className="col">
        <Cards
        image="https://lorempixel.com/150/150"
        title="Card title 1"
        Text="text 1"
        />
      </div>  
      <div className="col">
        <Cards
        image="https://lorempixel.com/150/150"
        title="Card title 2"
        Text="text 2"
        />
      </div>
      <div className="col">
        <Cards
        image="https://lorempixel.com/150/150"
        title="Card title 3"
        Text="text 3"
        />
      </div>
    </div>
  );
}

export default App;
