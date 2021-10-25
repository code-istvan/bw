import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbarBW"
import Container from "react-bootstrap/Container"
import "../sass/components/_layout.scss"
import Button from "./Button"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
        <Button
          type="button"
          buttonStyle="btn--mobil--primary--outline"
          buttonSize="btn--small"
        >
        Mobil GHOST
        </Button>
        <br /><br />
             <Button
          type="button"
          buttonStyle="btn--mobil--primary--solid"
          buttonSize="btn--small"
        >
        Mobil PRIMARy
        </Button>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
