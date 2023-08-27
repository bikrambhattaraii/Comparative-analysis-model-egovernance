import "./form.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    country_name: "",
    start_date: "",
    history: "",
    epassport: false,
    birthdeathcert: false,
    water_payment: false,
    electricity_payment: false,
    mobile_services: false,
    Blockchain_adoption: false,
    electronic_voting: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/country", formData)
      .then((res) => {
        console.log(res.data.data);
        toast.success("Data created successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Failed to create data");
      });
    console.log(formData);
    // Reset form data
    setFormData({
      country_name: "",
      start_date: "",
      history: "",
      epassport: false,
      birthdeathcert: false,
      water_payment: false,
      electricity_payment: false,
      mobile_services: false,
      Blockchain_adoption: false,
      electronic_voting: false,
    });
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <h1>Please Enter the country E-governance status </h1>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div>
          <label>
            Country Name:
            <input
              value={formData.country_name}
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
              name="start_date"
              value={formData.start_date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="history">
          <label>History:</label>
          <textarea
            name="history"
            value={formData.history}
            placeholder="enter the history of e governance of the specific country"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>
            E passport:
            <input
              type="checkbox"
              name="epassport"
              checked={formData.epassport}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Birth Death Registration:
            <input
              type="checkbox"
              name="birthdeathcert"
              checked={formData.birthdeathcert}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            water-tap charges:
            <input
              type="checkbox"
              name="water_payment"
              checked={formData.water_payment}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Eelectricity bill:
            <input
              type="checkbox"
              name="electricity_payment"
              onChange={handleCheckboxChange}
              checked={formData.electricity_payment}
            />
          </label>
        </div>
        <div>
          <label>
            mobile services:
            <input
              type="checkbox"
              name="mobile_services"
              checked={formData.mobile_services}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Blockchain Adoption:
            <input
              type="checkbox"
              checked={formData.Blockchain_adoption}
              name="Blockchain_adoption"
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        <div>
          <label>
            Eelectronic voting:
            <input
              type="checkbox"
              name="electronic_voting"
              onChange={handleCheckboxChange}
              checked={formData.electronic_voting}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
export default Form;
