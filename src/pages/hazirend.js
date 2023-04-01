import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import houseRules from "../data/houseRules.json"
import "../sass/pages/_hazirend.scss"

export default function Házirend() {
  return (
    <Layout>
      <Seo title="HÁZIREND" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">HÁZIREND</h1>
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
      <div className="row">
        <div className="col">
          <ol type="1" className="body">
            {houseRules &&
              houseRules.map(({ rule }) => <li key={rule}>{rule}</li>)}
          </ol>
        </div>
      </div>
    </Layout>
  )
}
