import "./form.css";
import { useState } from "react";
const Form = () => {
  




  const [formData, setFormData] = useState({
    country_name: "",
    start_date: "",
    history: "",
    epassport: "",
    birthdeathcert: "",
    water_payment: "",
    electricity_payment: "",
    mobile_services: "",
    blockchain_adoption: "",
    electronic_voting: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form data
    setFormData({
      country_name: "",
      start_date: "",
      history: "",
      epassport: "",
      birthdeathcert: "",
      water_payment: "",
      electricity_payment: "",
      mobile_services: "",
      blockchain_adoption: "",
      electronic_voting: "",
    });
  };
  return (
    <div className="form-container">
      <h1>Upload Country Details</h1>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div>
          <label>
            Country Name:
            <input
              type="text"
              name="country_name"
              placeholder="enter the country name"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            E-governannce Start date:
            <input
              type="date"
              name="start-date"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            History:
            <input
              type="text"
              name="history"
              placeholder="enter the history of e governance of the specific country"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            E passport:
            <input
            
              type="checkbox"
              name="epassport"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Birth Death Registration:
            <input
              type="checkbox"
              name="birthdeathcert"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            water-tap charges:
            <input
              type="checkbox"
              name="water_payment"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Eelectricity bill:
            <input
              type="checkbox"
              name="electricity_payment"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            mobile services:
            <input
              type="checkbox"
              name="mobile_services"
              
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Blockchain Adoption:
            <input
              type="checkbox"
              name="blockchain_adoption"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Eelectronic voting:
            <input
              type="checkbox"
              name="electronic_voting"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
        <input type="submit"  />
        </div>
      </form>
    </div>
  );
};
export default Form;
