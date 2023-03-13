import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Navbar from "../Nav/Navbar"
import "../../sass/components/_layout.scss"
import Footer from "../Footer/Footer"

const LayoutBlog = ({ children, articleProperties }) => {
  const [hasSeenMessage, setHasSeenMessage] = useState(
    localStorage.getItem("hasSeenMessage") ?? false
  )
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasSeenMessage(true)
      // localStorage.setItem("hasSeenMessage", true)
    }, 100000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {!hasSeenMessage && <div>A FANCY MESSAGE</div>}
      <Navbar articleProperties={articleProperties} />
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
