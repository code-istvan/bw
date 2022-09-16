import * as React from "react"
import Navigation from "./Navigation"
import "../../sass/components/_navbar.scss"

const Navbar = () => {
  const navRef = React.useRef()
  var prevScroll = 0

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
    <div className="navbar_container fluid" ref={navRef}>
      <Navigation />
    </div>
  )
}

export default Navbar
