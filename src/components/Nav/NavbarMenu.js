import * as React from "react"
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
    { link: "/mysore-program", label: "MYSORE-PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
    { link: "/csapatunk", label: "CSAPATUNK" },
    { link: "/vinyasza-jogairanyzatok", label: "JÓGAIRÁNYZATOK" },
    { link: "/letoltesek", label: "LETÖLTÉSEK" },
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
    { link: "/ajanlottolvasmanyok", label: "OLVASMÁNYOK" },
  ]

  const menuGroupsFomenu = [
    { title: "JÓGAÓRÁK", items: menuItemsJogaorak },
    { title: "TUDNIVALÓK", items: menuItemsTudnivalok },
  ]

  const menuItemsFomenu = [
    { link: "/blog", label: "BLOG" },
    { link: "https://shop.bandha.works", label: "SHOP", isExternal: true },
    { link: "/kapcsolat", label: "KAPCSOLAT" },
  ]

  return (
    <div className={`${open ? "mobil-menu" : "mobil-menu mobil-menu--closed"}`}>
      {breakpoints.lg ? <NavbarMenuMobilHeader /> : null}
      <ul className="nav-links">
        {menuGroupsFomenu.map(({ title, items }) => (
          <li className="nav-item dropdown" key={title}>
            <div
              className="nav-link dropdown-toggle clr-shades-white"
              // href="#"
              id="navbarDropdown"
              // role="button"
              data-bs-toggle="dropdown"
              // aria-expanded="false"
            >
              {title}
            </div>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {items.map(({ link, label }) => (
                <li className="nav-item" as="li" key={label}>
                  <Link
                    className="dropdown-item clr-shades-white"
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
                target="_blank"
                href={link}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                className="nav-link clr-shades-white menuItemsFomenu"
                to={link}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )}
          </li>
        ))}
        <li className="nav-item">
          {breakpoints.lg ? null : <NavbarDesktopFeatured />}
        </li>
      </ul>
      {breakpoints.lg ? <NavbarMenuMobilFeatured /> : null}
    </div>
  )
}

export default NavbarMenu
