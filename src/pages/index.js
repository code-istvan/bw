import * as React from "react"
import { CustomHead } from "../components/CustomHead"
import Layout from "../components/Layouts/Layout"
import Hero from "../components/Hero"
import Icons from "../components/Icons/Icons"
import SectionRolunk from "../components/Sections/SectionRolunk"
import SectionParampara from "../components/Sections/SectionParampara"
import SectionMysoreProgram from "../components/Sections/SectionMysoreProgram"
import SectionEvents from "../components/Sections/SectionEvents"
import SectionOsztondij from "../components/Sections/SectionOsztondij"
import SectionSocialProofs from "../components/Sections/SectionSocialProofs"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/pages/_index.scss"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <div className="row index-namaste">
          <div className="col mt-20px mb-20px">
            <Icons.Namaste />
          </div>
        </div>
        <SectionRolunk />
        <SectionParampara />
        <SectionMysoreProgram />
        <SectionEvents />
        <SectionOsztondij />
        <SectionSocialProofs />
      </Layout>
    </>
  )
}

export default IndexPage

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero_desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl
  const pageTitle =
    "Bandha Works Astanga Jógaiskola | " + data.site.siteMetadata.title
  const pageDescription =
    "Fedezzd fel az Astanga Jógát a Bandha Works Jógaiskolában! Astanga Mysore-stílusú gyakorlás, astanga kezdő tanfolyamok, vinyásza krama jógaórák."

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
