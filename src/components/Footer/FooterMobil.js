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
import { Link } from "gatsby"
import { navigate } from "gatsby"

export default function FooterMobil() {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <LogoFullBW />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Astanga Jógaiskola Paramaguru Sharath Jois áldásával</p>
          <strong>IRATKOZZ FEL HÍRLEVELÜNKRE</strong>
          <p>
            Értesülj a legfrisebb eseményeinkről és egyéb jógás hírekről
            elsőkézből
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            type="button"
            buttonStyle="btn--mobil--secondary--outline"
            buttonSize="btn--small"
            onClick={() => {
              navigate("/hirlevel")
            }}
          >
            FELIRATKOZÁS
          </Button>
        </Col>
      </Row>
      <Row className="footer__social">
        <Col>
          <p>
            <strong>KÖZÖSSÉG</strong>
          </p>
          <FacebookIcon url="https://www.facebook.com/nyolcag" />
          <InstagramIcon url="https://www.instagram.com/bandhaworks/" />
          <SoundcloudIcon url="https://soundcloud.com/bandhaworks-hu/" />
          <TwitterIcon url="https://twitter.com/IstvnSzalai5/" />
          <MessengerIcon url="http://m.me/bandhawork" />
          <TelegramIcon url="https://t.me/@istvan108" />
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>

      <p className="footer--designedby">
        Designed by <br />
        <a href="https://omworks.hu">OMWORKS YOGA CREATIVES</a>
      </p>
    </Container>
  )
}
