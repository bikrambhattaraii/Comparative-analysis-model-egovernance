import React, { useState } from "react";
import Image from "../../assests/images/gov.png"
import "./login.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // Handle form submission if no errors
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform further actions
      console.log("Form submitted!");
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <div className="registration-container-main">
      <div className="form-left">
      <div className="form-container-left">
        <img src={Image} alt="" />
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span>{errors.username}</span>}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <br />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
     </div> 
     </div>
      <div className="form-container-right">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default SignUpForm;
