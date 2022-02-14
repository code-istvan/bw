import * as React from "react"
// import NavbarDesktop from "./NavbarDesktop"
import NavbarMobil from "./NavbarMobil"
import NavbarDesktop from "./NavbarMobil"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const NavbarBandha = () => {
  const breakpoints = useBreakpoint()

  return (
    <Container fluid>
      <Row>{breakpoints.md ? <NavbarMobil /> : <NavbarDesktop />}</Row>
    </Container>
  )
}

export default NavbarBandha

// when the desktop menu is ready

{
  /* <Row>{breakpoints.md ? <NavbarMobil /> : <NavbarDesktop />}</Row> */
}
