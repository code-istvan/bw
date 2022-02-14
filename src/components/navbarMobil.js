import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/components/_navbarmobil.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarLinks from "./NavbarLinks"
import Hamburger from "./Hamburger"

export default function NavbarMobil() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      setMenuOpen()
    }
  }

  return (
    <>
      <nav className="navbar-mobil">
        <div className="container-fluid p-0">
          <a className="navbar-logo" href="/">
            <LogoBW />
            <LogoBWtext />
          </a>
          <div
            role={"button"}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={() => setMenuOpen(menuOpen => !menuOpen)}
          >
            <Hamburger />
          </div>
        </div>
        <div>{menuOpen && <NavbarLinks />}</div>
      </nav>
    </>
  )
}
