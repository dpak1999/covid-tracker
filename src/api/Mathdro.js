import axios from "axios";

const apiUrl = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(apiUrl);
    const requiredData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    };

    return requiredData;
  } catch (error) {}
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/daily`);
    console.log(data);
  } catch (error) {}
};
