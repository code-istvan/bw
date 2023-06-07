import * as React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../components/Buttons/Button"
import EventsRoll from "../components/EventsRoll"

export default function Tanfolyam() {
  return (
    <Layout>
      <Seo title="TANFOLYAMOK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">TANFOLYAMOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>

      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Tradicionális astanga jóga tanfolyamok</h1>
        <EventsRoll onlyFeatured={true} />
      </div>
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Egyéb programjaink</h1>
        <EventsRoll onlyFeatured={false} />
      </div>
    </Layout>
  )
}
