import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="page-hero-container">
      <div className="row tight--desktop--container">
        <h1 className="page-hero-title">404: NEM TALÁLOM!</h1>
        <StaticImage
          className="container-fluid page-hero-image page-big-image"
          src="../images/404_desktop.jpeg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Bandha Works Jógaiskola 404-es oldal"
          placeholder="blurred"
        />
        <StaticImage
          className="container-fluid page-hero-image page-mobil-image"
          src="../images/404_mobil.jpeg"
          layout="fullWidth"
          loading="eager"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Bandha Works Jógaiskola 404-es oldal"
          placeholder="blurred"
        />
      </div>
    </div>

    <div className="404--wrapper tight--desktop--container">
      <div className="row">
        <p className="mt-40px mb-20px">
          A keresett oldal nem létezik, vagy eltávolításra került.
        </p>
      </div>

      <div className="row">
        <Button
          type="button"
          buttonStyle="btn--small--outline"
          onClick={() => {
            navigate("/")
          }}
        >
          Vissza a főoldalra
        </Button>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "404_desktop.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Seo
      title="404: Nem találom | Bandha Works Jógaiskola"
      description="A keresett oldal nem létezik, vagy eltávolításra került."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
