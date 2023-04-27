import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import useBreakpoint from "../components/useBreakpoint"

export default function Mantra() {
  const { breakpoint } = useBreakpoint()

  return (
    <Layout>
      <Seo title="MANTRÁK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">MANTRÁK</h1>
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
        <p>The current breakpoint is: {breakpoint}</p>
      </div>
      <div className="row">
        {breakpoint === "xs" ? (
          <p>You are on an extra small screen!</p>
        ) : (
          <p>You are on a screen bigger than extra small!</p>
        )}
      </div>

      <div className="row">
        {" "}
        {breakpoint === "xs" ? <p>pici</p> : <p>nagy</p>}
      </div>
    </Layout>
  )
}
