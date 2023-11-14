import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import AccordionMantra from "../components/Accordions/AccordionMantra"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import mantras from "../data/mantras.json"

export default function Mantra() {
  return (
    <Layout>
      <div className="page-hero-container tight--desktop--container">
        <div className="row">
          <h1 className="page-hero-title">MANTRÁK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/mantra_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/mantra_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="mantra-wrapper tight--desktop--container">
        <div className="row mt-40px mb-20px">
          <h3 className="mb-20px">
            A <i>mantra</i> szanszkrit szó, a jelentése „túljutni az elmén”
          </h3>

          <p>
            A <i>„man”</i> jelentése elme, a <i>„tra”</i> pedig keresztül jutni,
            átkelni. A mantrák varázsigék, amelyek képesek megváltoztatni a
            valóságot, vagy legalábbis a mi felfogásunkat róla, ami valójában
            jelentheti ugyanazt, mint az előbbi. De ahhoz, hogy alkalmazni
            tudjuk ezt a varázserőt, először el kell ismernünk, hogy a mantrák
            varázsigék, és éppen ezért csak akkor hatásosak, ha tiszta
            szándékkal és helyes kiejtéssel alkalmazzuk őket. A legtöbbünknek
            nagyon sokszor el kell ismételni egy mantrát ahhoz, hogy
            jelentkezzen a hatása. Ahogy a régi korok alkimistái mondták
            bátorításul:
          </p>
          <blockquote>Az ismétlés hozza működésbe a varázslatot</blockquote>
          <p>
            Az ősi jógikus szövegek kijelentik, hogy Isten hang és a hang Isten:
            Sabda Brahman. Nincs más, csak Isten. Isten a mindenség. Isten
            valódi. Isten a valóság. Isten a hang. A valóság minden formája hang
            – vagyis zene – mivel lényegében minden rezgésekből áll. Amit mi
            anyagi létezésnek látunk, az valójában szemmel érzékelhető, füllel
            hallható és a többi érzékszervünkkel is felfogható lelassult
            hangrezgés. A hang szüli az anyagot – kezdetben volt a szó.
          </p>
        </div>
        <div className="row mb-20px">
          <h3>Mantrák amiket énekelni szoktunk</h3>
        </div>

        <div className="row">
          {mantras &&
            mantras.map(({ name, sanskrit, translation, link, chantby }) => (
              <AccordionMantra
                key={name}
                title={name}
                content={sanskrit + "<br/>---<br/>" + translation}
                audio={link}
                className="clr-shades-white accordion-matra__title"
                chantby={chantby}
              />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mantra_desktop.jpg" }) {
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
      title="Mantrák | Bandha Works Jógaiskola"
      description="A mantrák varázsigék, amelyek képesek megváltoztatni a
      valóságot, vagy legalábbis a mi felfogásunkat róla, ami valójában
      jelentheti ugyanazt, mint az előbbi."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
