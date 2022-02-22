import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_footermobil.scss"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import LogoBW from "../Nav/LogoBW"
import LogoBWtext from "../Nav/LogoBWtext"

export default function FooterMobil() {
  return (
    <Container fluid className="footer">
      <LogoBW /> <LogoBWtext />
    </Container>

    // <div className="container-fluid p-0 footer--color">

    // </div>
  )
}
