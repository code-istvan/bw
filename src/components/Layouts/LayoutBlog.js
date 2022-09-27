import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../Nav/Navbar"
import "../../sass/components/_layout.scss"
import Footer from "../Footer/Footer"

const LayoutBlog = ({ children }) => {
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

LayoutBlog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBlog

// import * as React from "react"
// import Navbar from "./Nav/Navbar"
// import "../sass/components/_layout.scss"
// import Footer from "./Footer/Footer"

// export default function LayoutBlog({ children }) {
//   return (
//     <>
//       <Navbar />
//       <div className="container layout__container__margin">
//         <main>{children}</main>
//       </div>
//       <Footer />
//     </>
//   )
// }
