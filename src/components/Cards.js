import React from "react";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="ui three stackable cards">
      <div className="ui card">
        <div className="content">
          <div className="header">INFECTED</div>
          <div className="meta">
            <h4>{confirmed.value}</h4>
          </div>
          <div className="meta">date</div>
          <div className="description">
            <p>No of people infected</p>
          </div>
        </div>
      </div>
      <div className="ui card">
        <div className="content">
          <div className="header">RECOVERED</div>
          <div className="meta">data</div>
          <div className="meta">date</div>
          <div className="description">
            <p>No of people recovered</p>
          </div>
        </div>
      </div>
      <div className="ui card">
        <div className="content">
          <div className="header">DEATHS</div>
          <div className="meta">data</div>
          <div className="meta">date</div>
          <div className="description">
            <p>No of people died</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
