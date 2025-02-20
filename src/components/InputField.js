import React from "react";
import styles from "../styles/InputField.module.css";

const InputField = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default InputField;
