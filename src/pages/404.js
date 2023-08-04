import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="page-hero-container">
      <div className="row tight--desktop--container">
        <h1 className="page-hero-title">404: NEM TALÁLOM!</h1>
        <StaticImage
          className="container-fluid page-hero-image page-big-image"
          src="../images/404_desktop.jpeg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Astanga jóga Mysore"
          placeholder="blurred"
        />
        <StaticImage
          className="container-fluid page-hero-image page-mobil-image"
          src="../images/404_mobil.jpeg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Astanga jóga Mysore"
          placeholder="blurred"
        />
      </div>
    </div>

    <div className="404--wrapper tight--desktop--container"></div>
    <div className="row">
      <p className="mt-40px mb-20px">
        A keresett oldal nem létezik, vagy eltávolításra került.
      </p>
    </div>

    <div className="row">
      <Button
        type="button"
        buttonStyle="btn--small--outline"
        onClick={() => {
          navigate("/")
        }}
      >
        Vissza a főoldalra
      </Button>
    </div>
  </Layout>
)

export default NotFoundPage
