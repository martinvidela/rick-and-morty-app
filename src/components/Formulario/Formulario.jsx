import React, { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validate = (userData) => {
  let errors = {};

  if (!emailRegex.test(userData.email)) {
    errors.email = "Please insert a email";
  }

  if (!userData.email) {
    errors.email = "Enter you email";
  }
  if (userData.email.length >= 35) {
    errors.email = "Invalid email";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Password must contain a number";
  }

  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters";
  }
  return errors;
};

export const Formulario = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(errors);
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Insert a email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email ? <p> {errors.email} </p> : null}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
