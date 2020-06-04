import React from "react";

const Cards = props => {
  console.log(props);
  return (
    <div className="ui three stackable cards">
      <div className="ui card">
        <div className="content">
          <div className="header">INFECTED</div>
          <div className="meta">data</div>
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
