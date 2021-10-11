import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
// import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "../sass/components/_navbarbw.scss"
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
    <nav className="navbar fixed-top navbar-expand-xxl navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <LogoBW />
          <LogoBWlong />
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvasqqq
            </h5> */}
            <LogoBW />
            <LogoBWlong />
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <Nav.Item as="li">
                <Link className="nav-link active" aria-current="page" to="/">
                  FŐOLDAL
                </Link>
              </Nav.Item>
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

// export default function NavbarBW() {
//   return (
//     <nav className="navbar fixed-top navbar-expand-xxl navbar-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <LogoBW />
//           <LogoBWlong />
//         </a>
//         <button
//           className="navbar-toggler collapsed"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="toggler-icon top-bar"></span>
//           <span className="toggler-icon middle-bar"></span>
//           <span className="toggler-icon bottom-bar"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//             <Nav.Item as="li">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 FŐOLDAL
//               </Link>
//             </Nav.Item>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 TUDNIVALÓK
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Nav.Item as="li">
//                   <Link className="dropdown-item" to="/rolunk">
//                     RÓLUNK
//                   </Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link className="dropdown-item" to="/elso-alkalom">
//                     ELSŐ ALKALOM
//                   </Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link className="dropdown-item" to="/hazirend">
//                     HÁZIREND
//                   </Link>
//                 </Nav.Item>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 JÓGAÓRÁK
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <Nav.Item as="li">
//                   <Link className="dropdown-item" to="/orarend">
//                     ÓRAREND
//                   </Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link className="dropdown-item" to="/arak">
//                     ÁRAK
//                   </Link>
//                 </Nav.Item>
//                 <Nav.Item as="li">
//                   <Link className="dropdown-item" to="/mysore-program">
//                     MYSORE PROGRAM
//                   </Link>
//                 </Nav.Item>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled">GALÉRIA</a>
//             </li>
//             <Nav.Item as="li">
//               <Link className="nav-link" to="/blog">
//                 BLOG
//               </Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//               <Link className="nav-link" to="https://bandha-payments.hu">
//                 SHOP
//               </Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//               <Link className="nav-link" to="/kapcsolat">
//                 KAPCSOLAT
//               </Link>
//             </Nav.Item>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }
