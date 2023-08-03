import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Messagesent() {
  return (
    <Layout>
      <Seo title="ÜZENET ELKÜLDVE" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">ÜZENET ELKÜLDVE</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/confirm_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/confirm_mobil.jpeg"
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
        <p>Az általad elküldött ürlap megérkezett szerverünkre!</p>
        <p>
          Amennyiben helyesen adtad meg az e-mail címed, hamarosan felvesszük
          veled a kapcsolatot.
        </p>
        <p>
          Munkanapokon általában 24-48 órán belűl válaszolunk a megkeresésekre!
        </p>
      </div>
    </Layout>
  )
}
