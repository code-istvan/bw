import React, { useState } from "react"
import "../sass/components/_customselect.scss"

const CustomSelect = ({
  options,
  onChange,
  placeholder = "Válassz egy opciót...",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(placeholder)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = option => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onChange) onChange(option)
  }

  return (
    <div className="custom-select">
      <div className="select-selected" onClick={toggleOpen}>
        {selectedOption}
        <span className={`select-arrow ${isOpen ? "select-arrow-active" : ""}`}>
          {" "}
        </span>
      </div>
      {isOpen && (
        <div className="select-items">
          {options.map((option, index) =>
            selectedOption !== placeholder &&
            option === selectedOption ? null : (
              <div key={index} onClick={() => selectOption(option)}>
                {option}
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
