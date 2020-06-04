import React, { Component } from "react";

import "./App.css";
import Card from "./components/Cards";
import Country from "./components/Country";
import Graph from "./components/Graph";
import { fetchData } from "./api/Mathdro";

class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
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
