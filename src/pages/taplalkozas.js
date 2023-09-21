import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Taplalkozas() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">TÁPLÁLKOZÁS</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/taplalkozas_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/taplalkozas_mobil.jpg"
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

export const Head = ({ location }) => (
  <Seo title="TÁPLÁLKOZÁS" location={location} />
)
