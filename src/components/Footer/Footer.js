import * as React from "react"
import Button from "../Button"
import Icon from "../Icons/Icon"
import { navigate } from "gatsby"
import Carbonbadge from "react-carbonbadge"
import "../../sass/components/_footer.scss"

const Footer = () => {
  return (
    <div className="container footer bg-shades-darkGray mt-3">
      <div className="row">
        <div className="col">
          <div className="footer__brand">
            <div className="col">
              <Icon.BwSymbol />
            </div>
            <div className="col">
              <p>Astanga Jógaiskola Paramaguru Sharath Jois áldásával</p>
            </div>
          </div>
          <div className="footer__navigation">NAVIGATION</div>
        </div>

        <div className="col">
          <div className="footer__newsletter">
            <h3>IRATKOZZ FEL HÍRLEVELÜNKRE</h3>
            <p>
              Értesülj a legfrisebb eseményeinkről és egyéb jógás hírekről
              elsőkézből
            </p>
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
          </div>
        </div>
      </div>
      <div className="footer__social">
        <Icon.Facebook url="https://www.facebook.com/bandhaworks" />
        <Icon.Instagram url="https://www.instagram.com/bandhaworks/" />
        <Icon.Twitter url="https://twitter.com/IstvnSzalai5/" />
        <Icon.Soundcloud url="https://soundcloud.com/bandhaworks-hu/" />
        <Icon.Messenger url="http://m.me/bandhawork" />
        <Icon.Telegram url="https://t.me/@istvan108" />
      </div>

      <p className="footer--designedby">
        Designed by <br />
        <a href="https://omworks.hu">OMWORKS YOGA CREATIVES</a>
      </p>
      <div className="row">
        <div className="col">
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
        </div>
      </div>
      <div id="wcb" className="carbonbadge wcb-d"></div>

      <p className="footer--designedby">
        Designed by <br />
        <a href="https://omworks.hu">OMWORKS YOGA CREATIVES</a>
      </p>

      <Carbonbadge darkMode={true} />
    </div>
  )
}

export default Footer
