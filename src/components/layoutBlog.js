import * as React from "react"
import Navbar from "./Nav/Navbar"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/components/_layout.scss"
import Footer from "./Footer/Footer"

export default function LayoutBlog({ children }) {
  return (
    <>
      <Navbar />
      <Container className="layout__container__margin">
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
