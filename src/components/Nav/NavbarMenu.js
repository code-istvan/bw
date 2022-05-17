import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import "../../sass/components/_navbarmenu.scss"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const NavbarMenu = ({ open, setOpen }) => {
  const breakpoints = useBreakpoint()

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
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/orarend"
                onClick={() => setOpen(false)}
              >
                ÓRAREND
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/arak"
                onClick={() => setOpen(false)}
              >
                ÁRAK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/mysore-program"
                onClick={() => setOpen(false)}
              >
                MYSORE PROGRAM
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/tanfolyam"
                onClick={() => setOpen(false)}
              >
                TANFOLYAMOK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/oktatok"
                onClick={() => setOpen(false)}
              >
                OKTATÓK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item disabled"
                to="/vinyasza-jogairanyzatok"
                onClick={() => setOpen(false)}
              >
                JÓGAIRÁNYZATOK
              </Link>
            </Nav.Item>
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
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/rolunk"
                onClick={() => setOpen(false)}
              >
                RÓLUNK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/elso-alkalom"
                onClick={() => setOpen(false)}
              >
                ELSŐ ALKALOM
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/hazirend"
                onClick={() => setOpen(false)}
              >
                HÁZIREND
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/mantra"
                onClick={() => setOpen(false)}
              >
                MANTRÁK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/sorozatabrak"
                onClick={() => setOpen(false)}
              >
                SOROZATÁBRÁK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item"
                to="/holdnapok"
                onClick={() => setOpen(false)}
              >
                HOLDNAPOK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item disabled" to="/osztondij">
                ÖSZTÖNDÍJ
              </Link>
            </Nav.Item>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">GALÉRIA</a>
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
