import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import EventsTypeOfRoll from "../components/Events/EventsTypeOfRoll"

export default function Tanfolyam() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">TANFOLYAMOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/tanfolyam_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/tanfolyam_mobil.jpg"
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
        <EventsTypeOfRoll typeOfEvents="Tanfolyam" />
      </div>
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Egyéb programjaink</h1>
        <EventsTypeOfRoll typeOfEvents="Konferencia" />
        <EventsTypeOfRoll typeOfEvents="SharathDzsi" />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="TANFOLYAMOK" />
