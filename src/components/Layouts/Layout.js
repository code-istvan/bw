import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Navbar from "../Nav/Navbar"
import Footer from "../Footer/Footer"
import "../../sass/components/_layout.scss"

const Layout = ({ children, articleProperties }) => {
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
    }, 10000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu)
  return (
    <>
      {!hasSeenMessage && <div>A FANCY MESSAGE</div>}
      <Navbar
        articleProperties={articleProperties}
        isOpen={isOpenMenu}
        handleOpenMenu={handleOpenMenu}
      />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer handleOpenMenu={handleOpenMenu} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
