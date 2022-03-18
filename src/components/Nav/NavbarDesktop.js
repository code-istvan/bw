import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_navbardesktop.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
// import Hamburger from "./Hamburger"

export default function NavbarDesktop() {
  return (
    <nav className="navbar-desktop">
      <a className="navbar-logo" href="/">
        <LogoBW />
        <LogoBWtext />
      </a>
      <NavbarMenu />
    </nav>
  )
}
