import React, { Component } from "react";

import "./App.css";
import Card from "./components/Cards";
import Country from "./components/Country";
import Graph from "./components/Graph";
import { fetchData } from "./api/Mathdro";

class App extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const extractedData = await fetchData();
    this.setState({ data: extractedData });
  }
  render() {
    return (
      <div className="centered">
        <h1>My App</h1>
        <Card data={this.state.data} />
        <Country />
        <Graph />
      </div>
    );
  }
}

export default App;
