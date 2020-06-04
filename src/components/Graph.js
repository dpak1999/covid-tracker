import React, { useState, useEffect } from "react";
import { getDailyData } from "../api/Mathdro";

const Graph = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const Api = async () => {
      setDailyData(await getDailyData());
    };
    Api();
  });
  return <h1>The graph will be shown here</h1>;
};

export default Graph;
