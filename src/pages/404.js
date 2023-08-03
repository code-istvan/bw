import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="page-hero-container">
      <div className="row">
        <h1 className="page-hero-title">404: NEM TALÁLOM!</h1>
        <StaticImage
          className="container-fluid page-hero-image page-big-image"
          src="../images/404_desktop.jpeg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Astanga jóga Mysore"
          placeholder="blurred"
        />
        <StaticImage
          className="container-fluid page-hero-image page-mobil-image"
          src="../images/404_mobil.jpeg"
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
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
