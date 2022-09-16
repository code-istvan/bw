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
        <div className="row footer-first-row">
          <div className="col-12-xs col-6-md">
            <div className="footer__brand">
              <div>
                <Link to="/">
                  <Icon.BwSymbol />
                </Link>
              </div>
              <div className="footer__icon__text">
                <p>
                  Astanga Jógaiskola <br />
                  Paramaguru Sharath Jois <br />
                  áldásával
                </p>
              </div>
              <Button
                type="button"
                buttonStyle="btn--secondary--outline"
                onClick={() => {
                  navigate("/hirlevel")
                }}
              >
                Navigáció
              </Button>
            </div>
            <div className="footer__navigation">
              <div className="footer__navigation__box">
                <FooterDesktopMenu />
              </div>
            </div>
          </div>
          <div className="col-12-xs col-6-md footer__newsletter">
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
        <div className="footer__social">
          <div className="footer__social__box pt-2 pb-2">
            <div>
              <Icon.Facebook url="https://www.facebook.com/bandhaworks" />
              <Icon.Instagram url="https://www.instagram.com/bandhaworks/" />
              <Icon.Twitter url="https://twitter.com/IstvnSzalai5/" />
            </div>
            <div>
              <Icon.Soundcloud url="https://soundcloud.com/bandhaworks-hu/" />
              <Icon.Messenger url="http://m.me/bandhawork" />
              <Icon.Telegram url="https://t.me/@istvan108" />
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__box">
              <div>
                <p className="small">
                  Designed and code by
                  <a href="https://omworks.hu"> OmWorks Yoga Creatives</a>
                </p>
              </div>
              <div className="separator"></div>
              <div>
                <p className="small">
                  Copyright© 2015-{new Date().getFullYear()} BandhaWorks
                </p>
              </div>

              <div className="separator"></div>
              <div>
                <p className="small">Adatvédelmi tájékoztató</p>
              </div>
            </div>
            <div className="mb-2 mt-2">
              <Carbonbadge darkMode={true} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
