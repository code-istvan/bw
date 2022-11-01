import React from "react"
import "../sass/components/_textarea.scss"

const TextArea = ({ className, name, rows, cols, placeholder, required }) => (
  <div className="textarea--field-box">
    <textarea
      className={className}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      required={required}
    />
  </div>
)

export default TextArea
