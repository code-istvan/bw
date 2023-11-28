import React from "react"
import { useState } from "react"
import Button from "../Buttons/Button"
import { CustomLink } from "../CustomLink"
import { navigate } from "gatsby"
import { Link } from "gatsby"
import "../../sass/components/_footerdesktopmenu.scss"

const FooterDesktopMenu = () => {
  const menuItemsJogaorak = [
    { link: "/orarend", label: "Órarend" },
    { link: "/arak", label: "Árak" },
    { link: "/astanga-mysore-program", label: "Mysore-program" },
    { link: "/tanfolyam", label: "Tanfolyamok" },
    { link: "/csapatunk", label: "Csapatunk" },
    { link: "/vinyasza-jogairanyzatok", label: "Jógairányzatok" },
    { link: "/letoltesek", label: "Letöltések" },
    // { link: "/galeria", label: "Galéria", extraClass: "" },
  ]

  const menuItemsTudnivalok = [
    { link: "/rolunk", label: "Rólunk" },
    { link: "/elso-alkalom", label: "Első alkalom" },
    { link: "/hazirend", label: "Házirend" },
    { link: "/mantra", label: "Mantrák" },
    { link: "/holdnapok", label: "Holdnapok" },
    { link: "/osztondij", label: "Ösztöndíj", extraClass: "" },
    // { link: "/taplalkozas", label: "Táplálkozás" },
    { link: "/ajanlottolvasmanyok", label: "Olvasmányok" },
  ]

  // The submenu flashes for a moment when I move the mouse to the main menu. Only in the desktop view.
  const [isHoveringJogaorak, setIsHoveringJogaorak] = useState(false)
  const [isHoveringTudnivalok, setIsHoveringTudnivalok] = useState(false)

  return (
    <div className="row footer-desktop-menu-lists">
      <div className="col-6-md">
        <ul>
          <li>
            <button
              className="fake-button clr-shades-lightGray heading heading--4 mb-20px"
              onMouseEnter={() => setIsHoveringJogaorak(true)}
              onMouseLeave={() => setIsHoveringJogaorak(false)}
            >
              Jógaórák
            </button>
          </li>

          {menuItemsJogaorak.map(({ link, label, extraClass }) => (
            <li key={label}>
              <Link to={link}>
                <p
                  className={`clr-shades-lightGray footer-submenu ${
                    isHoveringJogaorak ? "menu-flash" : ""
                  }`}
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6-md">
        <ul>
          <li>
            <button
              className="fake-button clr-shades-lightGray heading heading--4 mb-20px"
              onMouseEnter={() => setIsHoveringTudnivalok(true)}
              onMouseLeave={() => setIsHoveringTudnivalok(false)}
            >
              Tudnivalók
            </button>
          </li>
          {menuItemsTudnivalok.map(({ link, label, extraClass }) => (
            <li key={label}>
              <Link to={link}>
                <p
                  className={`clr-shades-lightGray footer-submenu ${
                    isHoveringTudnivalok ? "menu-flash" : ""
                  }`}
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col footer--thirdCol">
        <ul>
          <li>
            {" "}
            <Link to="/blog">
              <h4 className="clr-shades-lightGray footer-menuitem mt-0">
                Blog
              </h4>
            </Link>
          </li>
          <li>
            <CustomLink
              link="https://shop.bandha.works"
              classNames="clr-shades-lightGray footer-menuitem heading heading--4"
              title="SHOP"
            />

            {/* <h4 className="clr-shades-lightGray footer-menuitem">Shop</h4> */}
          </li>
          <li>
            <Link to="/kapcsolat">
              <h4 className="clr-shades-lightGray footer-menuitem">
                Kapcsolat
              </h4>
            </Link>
          </li>
          <li>
            {" "}
            <div className="separator"></div>
          </li>
          <li>
            {" "}
            <div className="footer__english">
              <Button
                type="button"
                buttonStyle="btn--small--outline"
                onClick={() => {
                  navigate("/english")
                }}
              >
                English
              </Button>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterDesktopMenu
