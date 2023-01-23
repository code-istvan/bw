import React, { useRef, useState, useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../Nav/Navbar"
import ProgressBar from "../ProgressBar"
import "../../sass/components/_layout.scss"
import Footer from "../Footer/Footer"
import { useScrollPosition } from "../../hooks/useScrollPosition"

const LayoutBlog = ({ children, articleProperties }) => {
  const [scroll, setScroll] = useState(0)

  useScrollPosition(
    function setScrollPosition({ currentPosition }) {
      let { y: currentYPosition } = currentPosition

      setScroll(currentYPosition)
    },
    [scroll]
  )

  return (
    <>
      <Navbar />
      <div className="container">
        <ProgressBar scroll={scroll} articleProperties={articleProperties} />
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
