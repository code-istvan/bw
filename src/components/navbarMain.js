import * as React from "react"
import "../sass/components/_navbarmain.scss"
import NavbarDesktop from "./navbarDesktop"
import NavbarMobil from "./navbarMobil"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"

const navbarMain = () => (
  <>
    <Container fluid>
      <Row>
        <NavbarDesktop className="navbar--desktop" />
        <NavbarMobil className="navbar--mobil" />
      </Row>
    </Container>
  </>
)

export default navbarMain
