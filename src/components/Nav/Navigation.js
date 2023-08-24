import React, { useEffect } from "react"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"
import "../../sass/components/_navigation.scss"

export default function Navigation({ isOpen = false, handleOpenMenu }) {
  useEffect(() => {
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    if (isOpen) {
      html.style.overflow = "hidden"
      // body.style.height = "100%"
      body.style.margin = "0"
    } else {
      html.style.overflow = "auto"
      body.style.height = "auto"
      body.style.margin = "initial"
    }
  }, [isOpen])

  return (
    <nav className="navigation">
      <div className="container-fluid p-0 navbar-box">
        <a className="navbar-logo ml-1" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        {/*// eslint-disable-next-line jsx-a11y/aria-role */}
        <div
          onClick={handleOpenMenu}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              handleOpenMenu()
            }
          }}
          role="button"
          tabIndex="0"
          aria-label="Hamburger menu toggle"
        >
          <Hamburger open={isOpen} />
        </div>
      </div>
      <NavbarMenu open={isOpen} setOpen={handleOpenMenu} />
    </nav>
  )
}
