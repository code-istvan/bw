import React from "react"
import "../../sass/components/_footermobil.scss"
import { Row, Col } from "react-bootstrap"
// import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button"
import Icon from "../Icons/Icon"
import { navigate } from "gatsby"

export default function FooterMobil() {
  return (
    <div className="container footer">
      <Row>
        <Col className="mt-4 mb-4">
          <Icon.Logo />
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
          <Icon.Facebook url="https://www.facebook.com/bandhaworks" />
          <Icon.Instagram url="https://www.instagram.com/bandhaworks/" />
          <Icon.Twitter url="https://twitter.com/IstvnSzalai5/" />
          <Icon.Soundcloud url="https://soundcloud.com/bandhaworks-hu/" />
          <Icon.Messenger url="http://m.me/bandhawork" />
          <Icon.Telegram url="https://t.me/@istvan108" />
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
    </div>
  )
}
