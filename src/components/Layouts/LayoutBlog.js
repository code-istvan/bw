import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Navbar from "../Nav/Navbar"
import Footer from "../Footer/Footer"
import "../../sass/components/_layout.scss"

const LayoutBlog = ({ children, articleProperties }) => {
  const [hasSeenMessage, setHasSeenMessage] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("hasSeenMessage") ?? false
      : false
  )
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasSeenMessage(true)
      if (typeof window !== "undefined") {
        localStorage.setItem("hasSeenMessage", true)
      }
    }, 1000)

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
