import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../Nav/Navbar"
import Footer from "../Footer/Footer"
import "../../sass/components/_layoutpage.scss"

const LayoutPage = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
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

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPage
