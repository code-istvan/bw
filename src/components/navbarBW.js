import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import "../sass/components/_navbarbw.scss"
import LogoBW from "./LogoBW"

export default function NavbarBW() {
  return (
    <nav className="navbar fixed-top navbar-expand-xl navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <LogoBW />
          {/* <LogoBWlong /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className="offcanvas-title" id="offcanvasNavbarLabel">
              <LogoBW />
            </div>
            <button
              type="button"
              className="btn-close btn-close-white text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
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
                      className="dropdown-item"
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
                    <Link className="dropdown-item" to="/osztondij">
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
                <Link className="nav-link" to="https://bandha-payments.hu">
                  SHOP
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link className="nav-link" to="/kapcsolat">
                  KAPCSOLAT
                </Link>
              </Nav.Item>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
