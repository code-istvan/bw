import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import "../sass/components/_navbarmobil.scss"
import LogoBW from "./LogoBW"
import LogoBWtext from "./LogoBWtext"

export default function NavbarMobil() {
  return (
    <nav className="navbar fixed-top navbar-expand-xl navbar-dark">
      <div className="container-fluid p-0">
        <a className="navbar-brand" href="/">
          <LogoBW />
          <LogoBWtext />
        </a>
        <div className="navbar-custom-toggler">
          <input
            id="navbarToggle"
            className="navbar-custom-toggler-input"
            type="checkbox"
            autoComplete="off"
          />
          <label
            for="navbarToggle"
            className="navbar-custom-toggler-icon"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-custom-toggler-line navbar-custom-toggler-line--top"></div>
            <div className="navbar-custom-toggler-line navbar-custom-toggler-line--middle"></div>
            <div className="navbar-custom-toggler-line navbar-custom-toggler-line--bottom"></div>
          </label>
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 hamburger-menu-font">
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
                <Link className="nav-link" to="/blog">
                  BLOG
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <a className="nav-link" href="https://bandha-payments.hu">
                  SHOP
                </a>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-link" to="/kapcsolat">
                  KAPCSOLAT
                </Link>
              </Nav.Item>
            </ul>
          </div>
        </div>
        <div className="offcanvas-background"></div>
      </div>
    </nav>
  )
}
