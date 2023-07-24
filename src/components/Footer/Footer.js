import * as React from "react"
import Button from "../Buttons/Button"
import SocialIcons from "../Icons/SocialIcons"
import Icons from "../Icons/Icons"
import { navigate } from "gatsby"
import FooterDesktopMenu from "./FooterDesktopMenu"
import { Link } from "gatsby"
import { CustomLink } from "../CustomLink"
import "../../sass/components/_footer.scss"

const Footer = ({ handleOpenMenu }) => {
  return (
    <footer>
      <div className="container-fluid footer bg-shades-darkGray mt-3">
        <div className="row footer-first-row">
          <div className="col-12-xs col-6-md">
            <div className="footer__brand">
              <div>
                <Link to="/">
                  <Icons.BwSymbol color="lightGray" />
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
                  handleOpenMenu()
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
                Értesülj a legfrissebb eseményeinkről és egyéb jógás hírekről
                elsőkézből
              </p>
              <Button
                type="button"
                buttonStyle="btn--small--outline"
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
          <div className="pt-2 pb-2">
            <SocialIcons position="socialIcons-center" />
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__box mt-2 mb-2">
            <div>
              <p className="small">
                Designed and code by <br className="footer-br" />
                <CustomLink
                  link="https://omworks.hu/"
                  title=" OmWorks Yoga Creatives"
                  classNames="link-color-orange"
                />
              </p>
            </div>
            <div className="separator"></div>
            <div>
              <p className="small">
                Copyright© 2013-{new Date().getFullYear()} BandhaWorks
              </p>
            </div>
            <div className="separator"></div>
            <div>
              <CustomLink
                link="/adatvedelmi-tajekoztato"
                title="Adatvédelmi tájékoztató"
                classNames="small custom-link-style-white "
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
