import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from "gatsby"
// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"
import "../sass/components/_navbar.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import LogoBW from "./LogoBW"

export default function Navbar() {
  return (
    <Container fluid>
      <Row>
        <Col className="navbar__style">
          <LogoBW />
        </Col>
      </Row>
    </Container>
  )
}
