// import React, { useState, useEffect } from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Link } from "gatsby"
// import Nav from "react-bootstrap/Nav"
// import "../sass/components/_navbarbw.scss"
// import LogoBW from "./LogoBW"
// import LogoBWtext from "./LogoBWtext"

// const NavbarBW = () => {
//   const [menu, showMenu] = useState(true)

//   const toggleMenu = () => {
//     let distanceFromTop = window.pageYOffset

//     return function () {
//       let newDistanceFromTop = window.pageYOffset
//       if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
//         showMenu(true)
//       } else {
//         showMenu(false)
//       }
//       distanceFromTop = newDistanceFromTop
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", toggleMenu())
//     return window.removeEventListener("scroll", toggleMenu())
//   }, [])

//   return (
//     <nav className={menu ? "nav navbar-expand-xl navbar-dark" : "navbar hide"}>
//       <a className="navbar-brand" href="/">
//         <LogoBW />
//         <LogoBWtext />
//       </a>
//       <div className="navbar-custom-toggler">
//         <input
//           id="navbarToggle"
//           className="navbar-custom-toggler-input"
//           type="checkbox"
//           autoComplete="off"
//         />
//         <label
//           for="navbarToggle"
//           className="navbar-custom-toggler-icon"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasNavbar"
//           aria-controls="offcanvasNavbar"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <div className="navbar-custom-toggler-line navbar-custom-toggler-line--top"></div>
//           <div className="navbar-custom-toggler-line navbar-custom-toggler-line--middle"></div>
//           <div className="navbar-custom-toggler-line navbar-custom-toggler-line--bottom"></div>
//         </label>
//         <div
//           className="offcanvas offcanvas-end"
//           tabIndex="-1"
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//         >
//           <div className="offcanvas-body">
//             <ul className="navbar-nav ml-auto mb-2 mb-lg-0 hamburger-menu-font">
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   J??GA??R??K
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/orarend">
//                       ??RAREND
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/arak">
//                       ??RAK
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/mysore-program">
//                       MYSORE PROGRAM
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/tanfolyam">
//                       TANFOLYAMOK
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/oktatok">
//                       OKTAT??K
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link
//                       className="dropdown-item disabled"
//                       to="/vinyasza-jogairanyzatok"
//                     >
//                       J??GAIR??NYZATOK
//                     </Link>
//                   </Nav.Item>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   TUDNIVAL??K
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/rolunk">
//                       R??LUNK
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/elso-alkalom">
//                       ELS?? ALKALOM
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/hazirend">
//                       H??ZIREND
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/mantra">
//                       MANTR??K
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/sorozatabrak">
//                       SOROZAT??BR??K
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item" to="/holdnapok">
//                       HOLDNAPOK
//                     </Link>
//                   </Nav.Item>
//                   <Nav.Item as="li">
//                     <Link className="dropdown-item disabled" to="/osztondij">
//                       ??SZT??ND??J
//                     </Link>
//                   </Nav.Item>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled">GAL??RIA</a>
//               </li>
//               <Nav.Item as="li">
//                 <Link className="nav-link" to="/blog">
//                   BLOG
//                 </Link>
//               </Nav.Item>
//               <Nav.Item as="li">
//                 <a className="nav-link" href="https://bandha-payments.hu">
//                   SHOP
//                 </a>
//               </Nav.Item>
//               <Nav.Item as="li">
//                 <Link className="nav-link" to="/kapcsolat">
//                   KAPCSOLAT
//                 </Link>
//               </Nav.Item>
//             </ul>
//           </div>
//         </div>
//         <div className="offcanvas-background"></div>
//       </div>
//     </nav>
//   )
// }

// export default NavbarBW
