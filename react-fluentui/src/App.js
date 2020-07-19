import React from "react";
import "office-ui-fabric-react/dist/css/fabric.css";
import "./App.css";
import Navigation from "./components/Navigation";
import CardsSection from "./components/CardSection";

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm2 ms-xl2">
          <Navigation />
        </div>
        <div className="main-element ms-Grid-col ms-sm10 ms-xl10">
          <div className="ms-Grid-row">
            <CardsSection />
          </div>
          <div className="ms-Grid-row"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
