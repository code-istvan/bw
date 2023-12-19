import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import EventsTypeOfRoll from "../components/Events/EventsTypeOfRoll"
import EventsFeaturedRoll from "../components/Events/EventsFeaturedRoll"

export default function Programok() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">PROGRAMOK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/programok_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/programok_mobil.jpeg"
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
      {/* <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Astanga konferencia</h1>
        <EventsTypeOfRoll typeOfEvents="Konferencia" />
      </div>
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Tábor</h1>
        <EventsTypeOfRoll typeOfEvents="Tábor" />
      </div> */}
      <div className="row mt-40px mb-40px">
        <h1 className="mb-20px">Egyéb eseményeink</h1>
        <EventsFeaturedRoll
          maxEventsToShow={6}
          onlyFeatured={false}
          excludeTypes={["Tanfolyam"]}
        />
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "programok_desktop.jpeg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const pageTitle = "Programok | " + data.site.siteMetadata.title
  const pageDescription = "Itt találod a Bandha Works Jógaiskola programjait"

  return (
    <CustomHead
      canonical={siteUrl + location.pathname}
      title={pageTitle}
      description={pageDescription}
      image={ogImage}
      schemaData={{
        "@type": "WebPage",
        name: pageTitle,
        description: pageDescription,
        url: `${siteUrl}${location.pathname}`,
        logo: "https://mula.bandha.works/images/bw_logo.png",
      }}
    />
  )
}
