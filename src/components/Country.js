import React, { useState, useEffect } from "react";

import { countries } from "../api/Mathdro";
import "./styles.css";

const Country = () => {
  const [AllCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const allCountries = async () => {
      setAllCountries(await countries());
    };

    allCountries();
  }, [setAllCountries]);

  return (
    <div>
      <form>
        <div className="ui form">
          <div className="field">
            <label>Country</label>
            <select className="ui search dropdown">
              <option value="">Select Country</option>
              {AllCountries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Country;
