import React from "react";
import "./registration.css";
import Image from "../../assests/images/gov.png";
import  { useState } from 'react';

<link
  href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
  rel="stylesheet"
></link>;


const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = 'Firstname is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // Handle form submission if no errors
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform further actions
      console.log('Form submitted!');
    } else {
      // Set validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <div className="registration-container-main">
      <div className="registration-container-left">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
      <div className="registration-container-right">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default Registration;