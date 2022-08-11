import * as React from "react"
import Navbar from "./Nav/Navbar"
import "../sass/components/_layout.scss"
import Footer from "./Footer/Footer"

export default function LayoutBlog({ children }) {
  return (
    <>
      <Navbar />
      <div className="container layout__container__margin">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
