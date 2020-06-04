import React, { Component } from "react";

import "./App.css";
import Card from "./components/Cards";
import Country from "./components/Country";
import Graph from "./components/Graph";
import { fetchData } from "./api/Mathdro";

class App extends Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const extractedData = await fetchData();
    this.setState({ data: extractedData });
  }
  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData });
  };
  render() {
    return (
      <div className="centered">
        <Card data={this.state.data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Graph />
      </div>
    );
  }
}

export default App;
