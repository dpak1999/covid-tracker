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
    const newData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return newData;
  } catch (error) {}
};

export const countries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${apiUrl}/countries`);
    return countries.map(country => country.name);
  } catch (error) {}
};
