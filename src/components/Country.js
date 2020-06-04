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

  console.log(AllCountries);

  return (
    <div>
      <form>
        <div className="ui fluid search selection dropdown">
          <input type="hidden" name="country" />
          <i className="dropdown icon" />
          <div className="default text">Select Country</div>
          <div className="menu"></div>
        </div>
      </form>
    </div>
  );
};

export default Country;
