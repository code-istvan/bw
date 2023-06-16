import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Galeria() {
  return (
    <Layout>
      <Seo title="GALÉRIA" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">GALÉRIA</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/galeria_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/galeria_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-40px">
        <p>Fejlesztés alatt!</p>
      </div>
    </Layout>
  )
}
