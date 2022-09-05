import * as React from "react"
import Button from "../Button"
import Icon from "../Icons/Icon"
import { navigate } from "gatsby"
import FooterDesktopMenu from "./FooterDesktopMenu"
import Carbonbadge from "react-carbonbadge"
import { Link } from "gatsby"
import "../../sass/components/_footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer bg-shades-darkGray mt-3">
        <div className="footer-first-row">
          <div className="col">
            <div className="footer__brand">
              <div className="mr-2">
                <Link to="/">
                  <Icon.BwSymbol />
                </Link>
              </div>
              <div className="footer__icon__text">
                <p>Astanga Jógaiskola Paramaguru Sharath Jois áldásával</p>
              </div>
            </div>
            <div className="footer__navigation">
              <div className="footer__navigation__box">
                <FooterDesktopMenu />
              </div>
            </div>
          </div>
          <div className="col footer__newsletter">
            <div className="footer__newsletter__box">
              <h3 className="mb-1 mt-0">IRATKOZZ FEL HÍRLEVELÜNKRE</h3>
              <p className="mb-2 mt-0">
                Értesülj a legfrisebb eseményeinkről és egyéb jógás hírekről
                elsőkézből
              </p>
              <Button
                type="button"
                buttonStyle="btn--secondary--outline"
                onClick={() => {
                  navigate("/hirlevel")
                }}
              >
                Feliratkozás
              </Button>
            </div>
          </div>
        </div>
        <div className="row footer__bottom">
          <div className="footer__social mt-3">
            <Icon.Facebook url="https://www.facebook.com/bandhaworks" />
            <Icon.Instagram url="https://www.instagram.com/bandhaworks/" />
            <Icon.Twitter url="https://twitter.com/IstvnSzalai5/" />
            <Icon.Soundcloud url="https://soundcloud.com/bandhaworks-hu/" />
            <Icon.Messenger url="http://m.me/bandhawork" />
            <Icon.Telegram url="https://t.me/@istvan108" />
          </div>
          <p className="footer__bottom__text mb-2">
            Designed and code by{" "}
            <a href="https://omworks.hu">OmWorks Yoga Creatives</a>
          </p>
          <Carbonbadge darkMode={true} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
