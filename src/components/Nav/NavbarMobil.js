import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_navbarmobil.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"

export default function NavbarMobil() {
  const [menuOpen, setMenuOpen] = useState(false)

  const html = document.querySelector("html")
  // const funk = () => {
  //   html.style.opacity = "0.6"
  // }

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
    // funk(!menuOpen)
    //props.setIsMenuOpened(!menuOpen)
  }

  useEffect(() => {
    menuOpen
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [menuOpen])

  // useEffect(() => {
  //   if (menuOpen) {
  //     html.style.color = "black"
  //   } else {
  //     html.style.color = "red"
  //   }
  // })

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
      <NavbarMenu open={menuOpen} />
    </nav>
  )
}
