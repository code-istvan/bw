import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

export default function AdatkezelesiTajekoztato() {
  return (
    <Layout>
      <Seo title="ADATKEZELÉSI TÁJÉKOZTATÓ" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">ADATKEZELÉSI TÁJÉKOZTATÓ</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/adatkezeles_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/adatkezeles_mobil.jpg"
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
