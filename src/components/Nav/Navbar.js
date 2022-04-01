import * as React from "react"
import NavbarMobil from "./NavbarMobil"
import NavbarTablet from "./NavbarTablet"
import NavbarDesktop from "./NavbarDesktop"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Container"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "../../sass/components/_navbar.scss"

const Navbar = () => {
  const breakpoints = useBreakpoint()
  const navRef = React.useRef()
  const [isMenuOpened, setIsMenuOpened] = React.useState(false)

  let prevScroll = 0
  const isBrowser = typeof window !== "undefined"

  React.useEffect(() => {
    if (isMenuOpened) {
      return
    }

    function scrollHandler(event) {
      if (isBrowser) {
        let scrollTop = event.target.scrollingElement.scrollTop
        navRef.current.className =
          scrollTop >= 300 && scrollTop >= prevScroll
            ? "navbar_container hide"
            : "navbar_container scrolled"
        prevScroll = scrollTop
      }
    }

    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [isMenuOpened])

  return (
    <Container fluid className="navbar_container" ref={navRef}>
      <Row>
        {breakpoints.sm ? (
          <NavbarMobil setIsMenuOpened={setIsMenuOpened} />
        ) : breakpoints.md ? (
          <NavbarTablet setIsMenuOpened={setIsMenuOpened} />
        ) : (
          <NavbarDesktop />
        )}
      </Row>
    </Container>
  )
}

export default Navbar
