import React from "react";
import "./FormInput.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div>
    <input
      className="input-custom"
      {...otherProps}
      onChange={handleChange}
      required
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    <span className="underline" />
  </div>
);

export default FormInput;
