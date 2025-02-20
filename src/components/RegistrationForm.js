import React, { useState } from "react";
import styles from "../styles/RegistrationForm.module.css";
import InputField from "./InputField";
import Button from "./Button";
import { Link } from "react-router-dom";

const RegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  const onLogin = () => {
    console.log("Login");
  };
  const onGuest = () => {
    console.log("Guest mode");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        label="Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />
      <Button text="Register" onClick={handleSubmit} variant="primary" />
      <div className={styles.options}>
        <Link to="/login" className={styles.link} onClick={onLogin}>
          Login
        </Link>
        <Link to="/guest" className={styles.link} onClick={onGuest}>
          Try Without Registration
        </Link>
      </div>
    </form>
  );
};
export default RegistrationForm;
