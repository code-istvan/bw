import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../sass/components/_footermobil.scss"
import Container from "react-bootstrap/Container"
import { Row, Col } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import LogoFullBW from "../LogoFullBW"
import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon"
import MessengerIcon from "../Icons/MessengerIcon"
import TelegramIcon from "../Icons/TelegramIcon"
import SoundcloudIcon from "../Icons/SoundcloudIcon"
import TwitterIcon from "../Icons/TwitterIcon"
import Button from "../Button"

export default function FooterMobil() {
  return (
    <div className="footer">
      {/* <StaticImage
        className="footer--logo"
        src="../../images/BW_logo.png"
        width={140}
        layout="constrained"
        loading="eager"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Bandha Works Jógaiskola"
        placeholder="blurred"
      /> */}
      <LogoFullBW />
      <p>Astanga Jógaiskola Paramaguru Sharath Jois áldásával</p>
      <strong>IRATKOZZ FEL HÍRLEVELÜNKRE</strong>
      <p>
        Értesülj a legfrisebb eseményeinkről és egyéb jógás hírekről elsőkézből
      </p>
      <Button
        type="button"
        buttonStyle="btn--mobil--secondary--outline"
        buttonSize="btn--small"
      >
        Mobil GHOST
      </Button>
      <Row className="footer__social">
        <Col>
          <p>
            <strong>KÖZÖSSÉG</strong>
          </p>
          <FacebookIcon url="https://www.facebook.com/nyolcag" />
          <InstagramIcon url="https://www.instagram.com/bandhaworks/" />
          <SoundcloudIcon url="https://soundcloud.com/bandhaworks-hu/" />
          <TwitterIcon url="https://soundcloud.com/bandhaworks-hu/" />
          <MessengerIcon url="http://m.me/nyolcag" />
          <TelegramIcon url="https://t.me/@istvan108" />
        </Col>
      </Row>
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
