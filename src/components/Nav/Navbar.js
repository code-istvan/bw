import * as React from "react"
import NavbarMobil from "./NavbarMobil"
import NavbarTablet from "./NavbarTablet"
import NavbarDesktop from "./NavbarDesktop"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Navbar = () => {
  const breakpoints = useBreakpoint()

  return (
    <Container fluid>
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
