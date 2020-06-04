import React, { useState, useEffect } from "react";

import { countries } from "../api/Mathdro";
import "./styles.css";

const Country = ({ handleCountryChange }) => {
  const [AllCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const allCountries = async () => {
      setAllCountries(await countries());
    };

    allCountries();
  }, [setAllCountries]);

  return (
    <div>
      <form className="country-form">
        <div className="ui form">
          <div className="field">
            <select
              defaultValue=""
              onChange={event => handleCountryChange(event.target.value)}
              className="ui search dropdown"
            >
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
