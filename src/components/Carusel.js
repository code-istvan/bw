import React, { useState } from "react"
import "../sass/components/_carusel.scss"

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = React.Children.count(children)

  const next = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              className="carousel-item"
              key={index}
              style={{ width: "100%" }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-indicators">
        {Array.from({ length: totalItems }).map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
