import * as React from "react"
import NavbarMobil from "./NavbarMobil"
import NavbarTablet from "./NavbarTablet"
import NavbarDesktop from "./NavbarDesktop"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../../sass/components/_navbardesktop.scss"

const Navbar = () => {
  const breakpoints = useBreakpoint()
  const navRef = React.useRef()
  var prevScroll = 0

  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    window.addEventListener("scroll", function (event) {
      let scrollTop = event.target.scrollingElement.scrollTop
      navRef.current.className =
        scrollTop >= 300 && scrollTop >= prevScroll
          ? "navbar_container hide"
          : "navbar_container scrolled"
      prevScroll = scrollTop
    })
  }

  return (
    <Container fluid className="navbar_container" ref={navRef}>
      <Row>
        {breakpoints.sm ? (
          <NavbarMobil />
        ) : breakpoints.md ? (
          <NavbarTablet />
        ) : (
          <NavbarDesktop />
        )}
      </Row>
    </Container>
  )
}

export default Navbar
