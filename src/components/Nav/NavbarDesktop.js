import React, { useState } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"
import "../../sass/components/_navbardesktop.scss"

export default function NavbarDesktop() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar-desktop">
      <div className="container-fluid p-0">
        <a className="navbar-logo" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        <div onClick={menuOpenHandler}>
          <Hamburger open={menuOpen} />
        </div>
      </div>
      <NavbarMenu open={menuOpen} />
    </nav>
  )
}
