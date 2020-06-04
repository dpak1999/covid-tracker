import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";

import "./styles.css";
import { getDailyData } from "../api/Mathdro";

const Graph = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const Api = async () => {
      setDailyData(await getDailyData());
    };
    console.log(dailyData);
    Api();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData(({ date }) => date),
        datasets: [
          {
            data: dailyData(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};

export default Graph;
