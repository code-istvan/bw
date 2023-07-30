import React, { useState, useRef, useEffect } from "react"
import "../sass/components/_imagescroller.scss"

const ImageScroller = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRefs = useRef([])
  const containerRef = useRef()

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, images.length)
  }, [images])

  useEffect(() => {
    const handleScroll = () => {
      const index = imageRefs.current.findIndex(imageRef => {
        const rect = imageRef.getBoundingClientRect()
        return rect.left >= 0 && rect.left < rect.width
      })

      if (index !== -1) {
        setActiveIndex(index)
      }
    }

    const containerElement = containerRef.current
    containerElement.addEventListener("scroll", handleScroll)

    return () => {
      containerElement.removeEventListener("scroll", handleScroll)
    }
  }, [images])

  const dots = images.map((image, index) => (
    <span
      key={index}
      className={`dot ${index === activeIndex ? "active" : ""}`}
      onClick={() => {
        imageRefs.current[index].scrollIntoView({
          behavior: "smooth",
          inline: "start",
        })
      }}
    />
  ))

  return (
    <div className="horizontal-scroller" ref={containerRef}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          ref={el => (imageRefs.current[index] = el)}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      <div className="dot-navigation">{dots}</div>
    </div>
  )
}

export default ImageScroller
