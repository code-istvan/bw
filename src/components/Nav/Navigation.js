import React, { useEffect } from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"
import NavbarMenu from "./NavbarMenu"
import Hamburger from "./Hamburger"
import "../../sass/components/_navigation.scss"

export default function Navigation({ isOpen = false, handleOpenMenu }) {
  const breakpoints = useBreakpoint()

  useEffect(() => {
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    if (isOpen) {
      html.style.overflow = "hidden"
      body.style.height = "100%"
      body.style.margin = "0"
    } else {
      html.style.overflow = "auto"
      body.style.height = "auto"
      body.style.margin = "inital"
    }
  }, [isOpen])

  useEffect(() => {
    if (!breakpoints.sm && handleOpenMenu) {
      if (isOpen) {
        handleOpenMenu()
      }
    }
  }, [breakpoints])

  return (
    <nav className="navigation">
      <div className="container-fluid p-0 navbar-box">
        <a className="navbar-logo ml-1" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        {/*// eslint-disable-next-line jsx-a11y/aria-role */}
        <div onClick={handleOpenMenu}>
          <Hamburger open={isOpen} />
        </div>
      </div>
      <NavbarMenu open={isOpen} setOpen={handleOpenMenu} />
    </nav>
  )
}
