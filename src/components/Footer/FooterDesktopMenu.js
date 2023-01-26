import React from "react"
import { useState } from "react"
import Button from "../Buttons/Button"
import { navigate } from "gatsby"
// import { filterKeyEnter, accessibleOnClick } from "../Helper"
// import Icons from "../../Icons/Icons"
import { Link } from "gatsby"
import "../../sass/components/_footerdesktopmenu.scss"

const FooterDesktopMenu = () => {
  const menuItemsJogaorak = [
    { link: "/orarend", label: "Órarend" },
    { link: "/arak", label: "Árak" },
    { link: "/mysore-program", label: "Mysore program" },
    { link: "/tanfolyam", label: "Tanfolyamok" },
    { link: "/oktatok", label: "Oktatók" },
    { link: "/vinyasza-jogairanyzatok", label: "Jógairányzatok" },
    { link: "/galeria", label: "Galéria", extraClass: "" },
  ]

  const menuItemsTudnivalok = [
    { link: "/rolunk", label: "Rólunk" },
    { link: "/elso-alkalom", label: "Első alkalom" },
    { link: "/hazirend", label: "Házirend" },
    { link: "/mantra", label: "Mantrák" },
    { link: "/sorozatabrak", label: "Sorozatábrák" },
    { link: "/holdnapok", label: "Holdnapok" },
    { link: "/osztondij", label: "Ösztöndíj", extraClass: "" },
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
              <a href={link}>
                <p
                  className={`clr-shades-lightGray footer-submenu ${
                    isHoveringTudnivalok ? "menu-flash" : ""
                  }`}
                >
                  {label}
                </p>
              </a>
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
            <h4>Shop</h4>
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
                buttonStyle="btn--secondary--outline"
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
