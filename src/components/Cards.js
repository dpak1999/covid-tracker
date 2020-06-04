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
          <div className="header">
            <h5>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </h5>
          </div>
          <div className="meta">
            <h5>{new Date(lastUpdate).toDateString()}</h5>
          </div>
          <div className="description">
            <p>No of people infected</p>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="content">
          <div className="header">RECOVERED</div>
          <div className="header">
            <h5>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </h5>
          </div>
          <div className="meta">
            <h5>{new Date(lastUpdate).toDateString()}</h5>
          </div>
          <div className="description">
            <p>No of people recovered</p>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="content">
          <div className="header">DEATHS</div>
          <div className="header">
            <h5>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </h5>
          </div>
          <div className="meta">
            <h5>{new Date(lastUpdate).toDateString()}</h5>
          </div>
          <div className="description">
            <p>No of people died</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
