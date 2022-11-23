import React from "react"
import Icons from "./Icons/Icons"
import "../sass/components/_searchbar.scss"

const SearchBar = ({ id, value, label, name, placeholder, type, onChange }) => (
  <div className="searchbar--field-box">
    <input
      id={id}
      type={type}
      value={value}
      name={name}
      label={label}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
    <Icons.SearchIcon />
  </div>
)

export default SearchBar
