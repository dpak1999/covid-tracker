import React, { Component } from "react";

import "./App.css";
import Card from "./components/Cards";
import Country from "./components/Country";
import Graph from "./components/Graph";
import { fetchData } from "./api/Mathdro";

import coronaImage from "./images/covid.png";

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
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    return (
      <div className="centered">
        <img src={coronaImage} alt="COVID-19" />
        <Card data={this.state.data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Graph data={this.state.data} country={this.state.country} />
        <div className="ui vertical footer segment">
          <div>
            Made with <i className="heart icon"></i> by{" "}
            <a
              href="https://www.linkedin.com/in/deepak-kumar-dash-14a293176/"
              target="blank"
            >
              Deepak Kumar Dash
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
