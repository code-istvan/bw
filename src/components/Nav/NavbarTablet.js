import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_navbartablet.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"

export default function NavbarTablet() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar-tablet">
      <div className="container-fluid p-0">
        <a className="navbar-logo" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <Hamburger open={menuOpen} />
        </div>
      </div>
      <NavbarMenu open={menuOpen} />
    </nav>
  )
}
