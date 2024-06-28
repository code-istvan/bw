import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Noemi() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">Andris</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/andris_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/andris_mobil.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="row mt-40px">
        <p className="mb-20px">
          Egy barátomtól kölcsön kapott könyvben olvastam először a jóga
          filozófiáról és az ászanák áldásos élettani hatásairól.
        </p>
        <p className="mb-20px">
          Ezután Budapesten különböző jóga iskolákban, különböző délutáni jóga
          órákat próbáltam ki.
        </p>
        <p className="mb-20px">
          2015. januárjában kezdtem el a reggeli tradicionális mysore stílusú
          astanga jóga gyakorlást a Bandha Works jóga iskolában, amit azóta is
          fenntartok.
        </p>
        <p className="mb-20px">
          2017. márciusában utaztam először Mysore városába, hogy tanulhassak R.
          Sharath Jois-tól az akkori KPJAYI intézmény vezetőjétől. A negyedik
          Indiai látogatásom során, 2023. októberében felhatalmazást kaptam tőle
          az astanga jóga első sorozat tanítására.
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "andris_desktop.jpeg" }) {
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
  const pageTitle = "Andris jógaoktató | " + data.site.siteMetadata.title
  const pageDescription =
    "Andris jógaoktató bemutatkozása. Astanga Jóga Mysore Jógaiskola."

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
