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
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">HÁZIREND</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hazirend_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hazirend_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="hazirend-wrapper tight--desktop--container">
        <div className="row mt-20px mb-20px">
          <div className="col">
            <h3>
              A zavartalan gyakorlás és befelé figyelés érdekében kérünk, hogy
              olvasd el, és tartsd be a házirendben foglaltakat. Köszönjük!
            </h3>
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
        <div className="row mt-20px mb-20px">
          <div className="col">
            <p>Várunk szeretettel!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
