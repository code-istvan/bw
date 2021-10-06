import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from "gatsby"
// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"
import "../sass/components/_navbar.scss"
// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import Col from "react-bootstrap/Col"
// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"
// import NavDropdown from "react-bootstrap/NavDropdown"
import LogoBW from "./LogoBW"
import LogoBWlong from "./LogoBWlong"

export default function NavbarBW() {
  return (
    <nav className="navbar fixed-top navbar-expand-xxl navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <LogoBW />
          <LogoBWlong />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FŐOLDAL
              </a>
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
                <li>
                  <a className="dropdown-item" href="#">
                    Almenü 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Almenü 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Almenü 3
                  </a>
                </li>
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
                JÓGAÓRÁK
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Almenü 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Almenü 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Almenü 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">GALÉRIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SHOP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                KAPCSOLAT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//     <Navbar.Brand href="#home">
//       <LogoBW />
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//     <Navbar.Collapse id="responsive-navbar-nav">
//       <Nav className="ml-auto">
//         <Nav.Link href="#features">Főoldal</Nav.Link>
//         <NavDropdown title="Tudnivalók" id="collasible-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Almenü 1</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Almenü 2</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Almenü 3</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Almenü 4</NavDropdown.Item>
//         </NavDropdown>
//         <NavDropdown title="Jógaórák" id="collasible-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Almenü 1</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Almenü 2</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Almenü 3</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Almenü 4</NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link href="#pricing">Galéria</Nav.Link>
//         <Nav.Link href="#pricing">BLOG</Nav.Link>
//         <Nav.Link href="#pricing">Kapcsolat</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
