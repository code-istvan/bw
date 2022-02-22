import * as React from "react"
// import NavbarDesktop from "./NavbarDesktop"
import NavbarMobil from "./NavbarMobil"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Navbar = () => {
  const breakpoints = useBreakpoint()

  return (
    <Container fluid>
      <Row>{breakpoints.md ? <NavbarMobil /> : <NavbarMobil />}</Row>
    </Container>
  )
}

export default Navbar

// when the desktop menu is ready

{
  /* <Row>{breakpoints.md ? <NavbarMobil /> : <NavbarDesktop />}</Row> */
}
