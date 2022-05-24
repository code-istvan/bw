import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import "../../sass/components/_navbarmenu.scss"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const NavbarMenu = ({ open, setOpen }) => {
  const breakpoints = useBreakpoint()

  const menuItemsJogaorak = [
    { link: "/orarend", label: "ÓRAREND" },
    { link: "/arak", label: "ÁRAK" },
    { link: "/mysore-program", label: "MYSORE PROGRAM" },
    { link: "/tanfolyam", label: "TANFOLYAMOK" },
    { link: "/oktatok", label: "OKTATÓK" },
    { link: "/vinyasza-jogairanyzatok", label: "JÓGAIRÁNYZATOK" },
    { link: "/galeria", label: "GALÉRIA", extraClass: "disabled" },
  ]

  const menuItemsTudnivalok = [
    { link: "/rolunk", label: "RÓLUNK" },
    { link: "/elso-alkalom", label: "ELSŐ ALKALOM" },
    { link: "/hazirend", label: "HÁZIREND" },
    { link: "/mantra", label: "MANTRÁK" },
    { link: "/sorozatabrak", label: "SOROZATÁBRÁK" },
    { link: "/holdnapok", label: "HOLDNAPOK" },
    { link: "/osztondij", label: "ÖSZTÖNDÍJ", extraClass: "disabled" },
  ]

  return (
    <div className={`${open ? "mobil-menu-open" : "mobil-menu-closed"}`}>
      <ul className="nav-links">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            JÓGAÓRÁK
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {menuItemsJogaorak.map(({ link, label, extraClass }) => (
              <Nav.Item as="li">
                <Link
                  className={`dropdown-item ${extraClass}`}
                  to={link}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </Nav.Item>
            ))}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TUDNIVALÓK
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {menuItemsTudnivalok.map(({ link, label, extraClass }) => (
              <Nav.Item as="li">
                <Link
                  className={`dropdown-item ${extraClass}`}
                  to={link}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </Nav.Item>
            ))}
          </ul>
        </li>
        <Nav.Item as="li">
          <a className="nav-link" href="https://bandha-payments.hu">
            SHOP
          </a>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/blog" onClick={() => setOpen(false)}>
            BLOG
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            className="nav-link"
            to="/kapcsolat"
            onClick={() => setOpen(false)}
          >
            KAPCSOLAT
          </Link>
        </Nav.Item>
      </ul>
    </div>
  )
}

export default NavbarMenu
