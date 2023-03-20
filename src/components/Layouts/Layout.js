import React, { useState } from "react"
import PropTypes from "prop-types"
import Navbar from "../Nav/Navbar"
import Footer from "../Footer/Footer"
import "../../sass/components/_layout.scss"

const Layout = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu)
  console.log(handleOpenMenu)
  return (
    <>
      <Navbar isOpen={isOpenMenu} />
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
