import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_footermobil.scss"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

export default function FooterMobil() {
  return (
    <div className="footer">
      <StaticImage
        className="footer--logo"
        src="../../images/BW_logo.png"
        width={140}
        layout="constrained"
        loading="eager"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Bandha Works Jógaiskola"
        placeholder="blurred"
      />
      <p>Astanga Jógaiskola Paramaguru Sharath Jois áldásával</p>
      <strong>IRATKOZZ FEL HÍRLEVELÜNKRE</strong>
      <p>
        Értesülj a legfrisebb eseményeinkről és egyéb jógás hírekről elsőkézből
      </p>
      <strong>KÖZÖSSÉG</strong>
      <br />
      <br />
      <strong>KAPCSOLAT</strong>
      <br />
      <strong>ADATÉDELEM</strong>
      <br />
      <strong>SHOP</strong>
      <br />
      <strong>TÁPLÁLKOZÁS</strong>
      <br />
      <strong>AJÁNLOTT OLVASMÁNYOK</strong>
      <br /> <br />
      <p className="footer--designedby">
        Designed by <br />
        <a href="https://omworks.hu">OMWORKS YOGA CREATIVES</a>
      </p>
    </div>

    // <Container fluid className="footer">
    //   <Row className="footer--first-row">
    //     <Col>
    //       <LogoBW /> <LogoBWtext />
    //     </Col>
    //   </Row>
    // </Container>

    // <div className="container-fluid p-0 footer--color">

    // </div>
  )
}
