import * as React from "react"
import Seo from "../components/seo"
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
  // const site = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         description
  //         siteUrl
  //       }
  //     }
  //   }
  // `)

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
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Bandha Works Jógaiskola",
    alternateName: "Bandha Works",
    description: data.site.siteMetadata.description,
    url: data.site.siteMetadata.siteUrl,
    logo: "https://mula.bandha.works/images/bw_logo.png",
  }

  return (
    <Seo
      title="Bandha Works Astanga Jógaiskola | Astanga Jóga Mysore Budapest"
      location={location}
      description="Fedezzd fel az Astanga Jógát a Bandha Works Jógaiskolában! Astanga Mysore-stílusú gyakorlás, astanga kezdő tanfolyamok, vinyásza krama jógaórák."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      schemaMarkup={schema}
    />
  )
}
