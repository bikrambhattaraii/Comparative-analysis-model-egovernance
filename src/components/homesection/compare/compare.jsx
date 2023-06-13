import React from "react";
import "./compare.css";
import {Link} from "react-router-dom"


const Compare = () => {
  const handleSubmit = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="container-compare">
        <h1>Choose the country Egovernance <br /> you want to compare with</h1>

        <div className="container-other-countries">
          <div className="form-options">
            <label for="country">Choose the country:</label>
            <select name="country" id="country">
              <option>Estonia</option>
              <option>finland</option>
            </select>
          </div>
          <div className="form-options-other">
            <label for="country">Choose the country</label>
            <select name="country" id="country">
              <option>Estonia</option>
              <option>finland</option>
            </select>
          </div>
        </div>

        <button className="btn" onClick={handleSubmit}>
          
          compare</button>
      </div>
    </>
  );
};

export default Compare;
