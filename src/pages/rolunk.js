import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Rolunk() {
  return (
    <Layout>
      <Seo title="RÓLUNK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">RÓLUNK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/rolunk_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/rolunk_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
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
