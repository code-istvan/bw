import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { CustomLink } from "../components/CustomLink"

export default function Sorozatabrak() {
  const sequences = [
    {
      style: "Astanga vinyásza jóga",
      name: "Jóga csikitsza (első sorozat)",
      link: "https://bandhaworks.hu/Files/Astanga_joga_csikitsza_elso_sorozat.pdf",
    },
    {
      style: "Astanga vinyásza jóga",
      name: "Nádi sódhana (második sorozat)",
      link: "https://www.bandhaworks.hu/Files/astanga_2nd.pdf",
    },
    {
      style: "Astanga vinyásza jóga",
      name: "45 perces rutin",
      link: "https://www.bandhaworks.hu/Files/AstangaVinyasza45min.pdf",
    },
    {
      style: "Prána vashja jóga",
      name: "Első sorozat",
      link: "https://bandhaworks.hu/Files/PVY_poster_primary_series.pdf",
    },
    {
      style: "Prána vashja jóga",
      name: "Második sorozat",
      link: "https://bandhaworks.hu/Files/Prana-Vashya-Second-Series-Asana-Chart.pdf",
    },
  ]

  return (
    <Layout>
      <Seo title="SOROZATÁBRÁK" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">SOROZATÁBRÁK</h1>
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
      <div className="sorozatabrak-wapper tight--desktop--container">
        <div className="row mt-40px mb-20px">
          <h3>
            A sorozatábra nem helyettesíti a szakképzett oktató útmutatásait.
          </h3>
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
      </div>
    </Layout>
  )
}
