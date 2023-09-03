import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Istvan() {
  return (
    <Layout>
      <Seo title="Szalai István Jóga" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">István</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/istvan_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Szalai István jóga oktató"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/istvan_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Szalai István jóga oktató"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row">
        <h1>valami</h1>
      </div>
    </Layout>
  )
}
