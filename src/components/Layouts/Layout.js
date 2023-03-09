import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "../Nav/Navbar"
import Footer from "../Footer/Footer"
import "../../sass/components/_layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
