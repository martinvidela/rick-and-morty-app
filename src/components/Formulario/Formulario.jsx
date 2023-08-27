import React, { useState } from "react";
import "./Formulario.css";

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
    errors.password = "Contains 6 and 10 characters";
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
    <div className="formulario">
      <h1 style={{color: '#725AC1'}}>Welcome ʕ •ᴥ•ʔ／</h1>
      <form>
        <div className="username">
        <input placeholder="Email" type="text" name="email" value={userData.email} onChange={handleChange} />
             {errors.email ? <p style={{color: '#725AC1', fontSize:'15px', fontWeight:'bold'}}> {errors.email} </p> : null}
        </div>
        <div className="username">
        <input placeholder="Password" type="password" name="password"  value={userData.password}onChange={handleChange} />
        {errors.password ? <p style={{color: '#725AC1', fontSize:'15px', fontWeight:'bold'}}> {errors.password} </p> : null}

        </div>
        <button className="buttonForm" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
