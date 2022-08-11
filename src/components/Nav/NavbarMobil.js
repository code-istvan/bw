import React, { useState, useEffect } from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
// import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_navbarmobil.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"

export default function NavbarMobil() {
  const [menuOpen, setMenuOpen] = useState(false)
  const breakpoints = useBreakpoint()

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    console.log(menuOpen)
    if (menuOpen) {
      html.style.overflow = "hidden"
      body.style.height = "100%"
      body.style.margin = "0"
    } else {
      console.log("test")
      html.style.overflow = "auto"
      body.style.height = "auto"
      body.style.margin = "inital"
    }
  }, [menuOpen])

  useEffect(() => {
    console.log(breakpoints)
    if (!breakpoints.sm) {
      console.log("test1")
      setMenuOpen(false)
    }
  }, [breakpoints])

  return (
    <nav className="navbar-mobil">
      <div className="container-fluid p-0">
        <a className="navbar-logo" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        <div onClick={menuOpenHandler}>
          <Hamburger open={menuOpen} />
        </div>
      </div>
      <NavbarMenu open={menuOpen} setOpen={setMenuOpen} />
    </nav>
  )
}
