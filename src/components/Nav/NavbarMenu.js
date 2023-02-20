import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import NavbarDesktopFeatured from "./NavbarDesktopFeatured"
import NavbarMenuMobilHeader from "./NavbarMenuMobilHeader"
import NavbarMenuMobilFeatured from "./NavbarMenuMobilFeatured"
import "../../sass/components/_navbarmenu.scss"

const NavbarMenu = ({ open, setOpen }) => {
  const breakpoints = useBreakpoint()

  const menuItemsJogaorak = [
    { link: "/orarend", label: "ÓRAREND" },
    { link: "/arak", label: "ÁRAK" },
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
    { link: "/oktatok", label: "OKTATÓK" },
    { link: "/vinyasza-jogairanyzatok", label: "JÓGAIRÁNYZATOK" },
    { link: "/sorozatabrak", label: "SOROZATÁBRÁK" },
    { link: "/galeria", label: "GALÉRIA", extraClass: "" },
  ]

  const menuItemsTudnivalok = [
    { link: "/rolunk", label: "RÓLUNK" },
    { link: "/elso-alkalom", label: "ELSŐ ALKALOM" },
    { link: "/hazirend", label: "HÁZIREND" },
    { link: "/mantra", label: "MANTRÁK" },
    { link: "/holdnapok", label: "HOLDNAPOK" },
    { link: "/osztondij", label: "ÖSZTÖNDÍJ", extraClass: "" },
    { link: "/taplalkozas", label: "TÁPLÁLKOZÁS" },
    { link: "/ajanlottolvasmanyok", label: "AJÁNLOTT OLVASMÁNYOK" },
  ]

  const menuGroupsFomenu = [
    { title: "JÓGAÓRÁK", items: menuItemsJogaorak },
    { title: "TUDNIVALÓK", items: menuItemsTudnivalok },
  ]

  const menuItemsFomenu = [
    { link: "/blog", label: "BLOG" },
    { link: "https://bandha-payments.hu", label: "SHOP", isExtenal: true },
    { link: "/kapcsolat", label: "KAPCSOLAT" },
  ]

  // The submenu flashes for a moment when I move the mouse to the main menu. Only in the desktop view.
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className={`${open ? "mobil-menu-open" : "mobil-menu-closed"}`}>
      {breakpoints.md ? <NavbarMenuMobilHeader /> : null}
      <ul className="nav-links mt-20px">
        {menuGroupsFomenu.map(({ title, items }) => (
          <li className="nav-item dropdown" key={title}>
            <a
              className="nav-link dropdown-toggle clr-shades-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {title}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {items.map(({ link, label }) => (
                <li className="nav-item" as="li" key={label}>
                  <Link
                    className={`dropdown-item clr-shades-white ${
                      isHovering ? "menu-flash" : ""
                    }`}
                    to={link}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        {menuItemsFomenu.map(({ link, label, isExternal }) => (
          <li className="nav-item" as="li" key={label}>
            {isExternal ? (
              <a
                className="nav-link"
                href={link}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                className="nav-link clr-shades-white"
                to={link}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {/* <li className="nav-item">
        {breakpoints.md ? null : <NavbarDesktopFeatured />}
      </li> */}
      {breakpoints.md ? <NavbarMenuMobilFeatured /> : null}
    </div>
  )
}

export default NavbarMenu
