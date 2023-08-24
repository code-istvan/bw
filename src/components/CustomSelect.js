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

  const handleKeyDown = (event, option) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      if (option) {
        selectOption(option)
      } else {
        toggleOpen()
      }
    }
  }

  return (
    <div className="custom-select">
      <div
        tabIndex="0"
        role="button"
        className="select-selected"
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
      >
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
              <div
                key={index}
                tabIndex="0"
                role="option"
                aria-selected={option === selectedOption}
                onClick={() => selectOption(option)}
                onKeyDown={e => handleKeyDown(e, option)}
              >
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
