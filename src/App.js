import React, { Component } from "react";

import "./App.css";
import Card from "./components/Cards";
import Country from "./components/Country";
import Graph from "./components/Graph";

class App extends Component {
  render() {
    return (
      <div className="centered">
        <h1>My App</h1>
        <Card />
        <Country />
        <Graph />
      </div>
    );
  }
}

export default App;
