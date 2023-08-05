import React from "react"
import "../sass/components/_inputfield.scss"

const InputField = ({
  id,
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  required,
  pattern,
}) => (
  <div className="input--field-box">
    <input
      id={id}
      type={type}
      value={value}
      name={name}
      label={label}
      className="form-style"
      placeholder={placeholder}
      onChange={onChange}
      pattern={pattern}
      required={required}
    />
  </div>
)

export default InputField
