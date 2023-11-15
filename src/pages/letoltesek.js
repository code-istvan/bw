import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { CustomLink } from "../components/CustomLink"

export default function Letoltesek() {
  const sequences = [
    {
      style: "Astanga vinyásza jóga",
      name: "Jóga csikitsza (első sorozat)",
      link: "https://mula.bandha.works/downloads/astanga_joga_csikitsza_elso_sorozat.pdf",
    },
    {
      style: "Astanga vinyásza jóga",
      name: "Nádi sódhana (második sorozat)",
      link: "https://mula.bandha.works/downloads/astanga_yoga_intermediate_series.pdf",
    },
    {
      style: "Astanga vinyásza jóga",
      name: "45 perces rutin",
      link: "https://mula.bandha.works/downloads/astanga_joga_45min.pdf",
    },
    {
      style: "Prána vashja jóga",
      name: "Első sorozat",
      link: "https://mula.bandha.works/downloads/prana_vashya_primary_series.pdf",
    },
    {
      style: "Prána vashja jóga",
      name: "Második sorozat",
      link: "https://mula.bandha.works/downloads/prana_vashya_second_series_asana_chart.pdf",
    },
  ]

  const posters = [
    {
      type: "Táplálkozás",
      name: "Növényi fehérje források",
      link: "https://mula.bandha.works/downloads/novenyi_feherje_plakat_a0.pdf",
    },
  ]

  const sounds = [
    {
      type: "Gurudzsi Sri. K. Pattabhi Jois",
      name: "Vezetett első sorozat (1993)",
      link: "https://mula.bandha.works/downloads/GURUJI_LED_PRIMARY_1993.mp3",
    },
  ]

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">LETÖLTÉSEK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/sorozatabrak_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga sorozatábra"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/sorozatabrak_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga sorozatábra"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="sorozatabrak-wapper tight--desktop--container">
        <div className="mt-40px mb-20px">
          <h3>Sorozatábrák</h3>
          <p>A sorozatábra nem helyettesíti a szakképzett oktató útmutatását</p>
        </div>
        <div className="row">
          <div className="col unordered-list-style">
            <ul>
              {sequences &&
                sequences.map(({ name, style, link }) => (
                  <li key={name}>
                    <p>
                      {style}:{" "}
                      <CustomLink
                        link={link}
                        title={name}
                        classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                      />{" "}
                      (.pdf)
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-40px mb-20px">
          <h3>Hang file-ok</h3>
        </div>
        <div className="row">
          <div className="col unordered-list-style">
            <ul>
              {sounds &&
                sounds.map(({ type, name, link }) => (
                  <li key={name}>
                    <p>
                      {type}:{" "}
                      <CustomLink
                        link={link}
                        title={name}
                        classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                      />{" "}
                      (.mp3)
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-40px mb-20px">
          <h3>Plakátok</h3>
        </div>
        <div className="row">
          <div className="col unordered-list-style">
            <ul>
              {posters &&
                posters.map(({ type, name, link }) => (
                  <li key={name}>
                    <p>
                      {type}:{" "}
                      <CustomLink
                        link={link}
                        title={name}
                        classNames="body link-decoration-remove clr-brand-orange schedule-teacher"
                      />{" "}
                      (.pdf)
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sorozatabrak_desktop.jpg" }) {
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
      title="Letöltések | Bandha Works Jógaiskola"
      description="Itt találod a letölthető anyagainkat."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
