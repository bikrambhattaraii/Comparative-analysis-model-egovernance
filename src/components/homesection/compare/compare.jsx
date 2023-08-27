import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './compare.css';

const Compare = () => {
  const [countries, setCountries] = useState([]);
  const [compareResult, setCompareResult] = useState(false);
  const [countryOne, setCountryOne] = useState({
    country_name: "",
    start_date: "",
    history: "",
    epassport: "",
    birthdeathcert: "",
    water_payment: "",
    electricity_payment: "",
    mobile_services: "",
    Blockchain_adoption: "",
    electronic_voting: "",
    // featureCount: 0,
  });
  const [countryTwo, setCountryTwo] = useState({
    country_name: "",
    start_date: "",
    history: "",
    epassport: "",
    birthdeathcert: "",
    water_payment: "",
    electricity_payment: "",
    mobile_services: "",
    Blockchain_adoption: "",
    electronic_voting: "",
    // featureCount: 0,
  });
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  useEffect(() => {
    // Fetch countries from API
    axios.get('http://localhost:8000/api/country')
      .then((response) => {
        setCountries(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleCompare = (event) => {
    event.preventDefault();
    setCountryOne([]);
    setCountryTwo([]);
 console.log(countries)
    const selectedCountry1 = countries.find(country => country.id == selectedOption1);
    const selectedCountry2 = countries.find(country => country.id == selectedOption2);
    console.log(selectedCountry1)
    if (selectedCountry1 && selectedCountry2) {
      setCountryOne(selectedCountry1);
      setCountryTwo(selectedCountry2);
      setCompareResult(true);
    } else {
      // Handle error: Selected countries not found
      console.error('Selected countries not found');
    }
  };

  return (
    <>
      <div className="dropdowns-container">
        <h2>Select Options to Compare</h2>
        <div className="dropdown-wrapper">
          <select value={selectedOption1} onChange={handleOption1Change}>
            <option value="">Select Option 1</option>
            {countries.length > 0 && (
              countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.country_name}
                </option>
              ))
            )}
          </select>
        </div>
        <div className="dropdown-wrapper">
          <select value={selectedOption2} onChange={handleOption2Change}>
            <option value="">Select Option 2</option>
            {countries.length > 0 && (
              countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.country_name}
                </option>
              ))
            )}
          </select>
        </div>
        <button onClick={handleCompare} disabled={!selectedOption1 || !selectedOption2}>
          Compare
        </button>
      </div>
      {!compareResult ? (
        <div>
          <h1>Select countries to compare first</h1>
        </div>
      ) : (
        <>
  <table class="comparison-table">
    <thead>
    <tr >
      <th>Field</th>
      <th>Country 1</th>
      <th>Country 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Country Name</td>
      <td>{ countryOne.country_name }</td>
      <td>{countryTwo.country_name }</td>
    </tr>
    <tr>
      <td>Start Date</td>
      <td>{ countryOne.start_date }</td>
      <td>{countryTwo.start_date }</td>
    </tr>
    <tr>
      <td >History</td>
      <td>{countryOne.history }</td>
      <td>{countryTwo.history }</td>
    </tr>
    <tr>
      <td>E-Passport</td>
      <td class="boolean">{countryOne.epassport== 1 ? "Yes" : "NO" }</td>
      <td class="boolean">{countryTwo.epassport == 1 ? "Yes" : "NO" }</td>
    </tr>
    <tr>
      <td>Birth Death Cert</td>
      <td class="boolean">{countryOne.birthdeathcert == 1 ? "Yes" : "NO" }</td>
      <td class="boolean">{countryTwo.birthdeathcert == 1 ? "Yes" : "NO" }</td>
    </tr>
    <tr>
      <td>Water Payment</td>
      <td class="boolean">{countryOne.water_payment == 1 ? "Yes" : "NO" }</td>
      <td class="boolean">{countryTwo.water_payment == 1 ? "Yes" : "NO" }</td>
    </tr>
    <tr>
      <td>Electricity Payment</td>
      <td class="boolean">{ countryOne.electricity_payment == 1 ? "Yes" : "NO" }</td>
      <td class="boolean">{countryTwo.electricity_payment == 1 ? "Yes" : "NO" }</td>
    </tr>
    <tr>
      <td>Mobile Services</td>
      <td className="boolean">{ countryOne.mobile_services == 1 ? "Yes" : "NO" }</td>
      <td className="boolean">{ countryTwo.mobile_services == 1 ? "Yes" : "NO" }</td>
    </tr>
    <tr>
      <td>Blockchain Adoption</td>
      <td class="boolean">{ countryOne.Blockchain_adoption == 1 ? "Yes" : "NO" }</td>
      <td class="boolean">{ countryTwo.Blockchain_adoption == 1 ? "Yes" : "NO"}</td>
    </tr>
    <tr>
      <td>Electronic Voting</td>
      <td class="boolean">{countryOne.electronic_voting == 1 ? "Yes" : "No" }</td>
      <td class="boolean">{countryTwo.electronic_voting == 1 ? "Yes" : "No" }</td>
    </tr>
  </tbody>
</table>
        </>
    )}
    {
      compareResult && (
        countryOne.featureCount > countryTwo.featureCount ? (
          <>
          <h1 className='header-country-result'>Country One has better E governance</h1>
          </>
        ) : (
         <>
          <h1 className='header-country-result'>Country Two has better E governance</h1>
         </>
        )  
      )
    }
    </>  
  );
};

export default Compare;
