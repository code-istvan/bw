import React, { useState } from "react"
import Navigation from "./Navigation"
import ProgressBar from "../ProgressBar"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import "../../sass/components/_navbar.scss"

const Navbar = ({ articleProperties }) => {
  const navRef = React.useRef()
  var prevScroll = 0
  const [scroll, setScroll] = useState(0)

  useScrollPosition(
    function setScrollPosition({ currentPosition }) {
      let { y: currentYPosition } = currentPosition
      setScroll(currentYPosition)
    },
    [scroll]
  )

  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    window.addEventListener("scroll", function (event) {
      let scrollTop = event.target.scrollingElement.scrollTop
      if (navRef.current != null) {
        navRef.current.className =
          scrollTop >= 2000 && scrollTop >= prevScroll
            ? "navbar_container hide"
            : scrollTop >= 10
            ? "navbar_container scrolled"
            : "navbar_container"
      }
      prevScroll = scrollTop
    })
  }

  return (
    <>
      <div className="navbar_container fluid" ref={navRef}>
        <Navigation />
      </div>
      {articleProperties && scroll < 0 && (
        <ProgressBar scroll={scroll} articleProperties={articleProperties} />
      )}
    </>
  )
}

export default Navbar
