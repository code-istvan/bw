// import React from "react"
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import "../../sass/components/_navbarmenu.scss"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const NavbarMenu = ({ open }) => {
  const breakpoints = useBreakpoint()

  const body = document.querySelector("body")

  open ? console.log("menu nyitva") : console.log("menu zarva")

  // body.style.height = "100%"

  return (
    <div
      className={
        breakpoints.md
          ? `${open ? "mobil-menu-open" : "mobil-menu-closed"}`
          : "desktop-menu"
      }
    >
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
              <Link className="dropdown-item" to="/orarend">
                ÓRAREND
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/arak">
                ÁRAK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/mysore-program">
                MYSORE PROGRAM
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/tanfolyam">
                TANFOLYAMOK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/oktatok">
                OKTATÓK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                className="dropdown-item disabled"
                to="/vinyasza-jogairanyzatok"
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
              <Link className="dropdown-item" to="/rolunk">
                RÓLUNK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/elso-alkalom">
                ELSŐ ALKALOM
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/hazirend">
                HÁZIREND
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/mantra">
                MANTRÁK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/sorozatabrak">
                SOROZATÁBRÁK
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="dropdown-item" to="/holdnapok">
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
          <Link className="nav-link" to="/blog">
            BLOG
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link className="nav-link" to="/kapcsolat">
            KAPCSOLAT
          </Link>
        </Nav.Item>
      </ul>
    </div>
  )
}

export default NavbarMenu
