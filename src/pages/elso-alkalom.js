import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Elsoalkalom() {
  const needed = [
    {
      needed:
        "kényelmes sportruházat, rövidnadrág (hogy lássuk a térded), rövidujjú póló",
    },
    {
      needed:
        "egy nagyobb törülköző (matracra teríteni) és egy kisebb törülköző (az igazításokhoz)",
    },
    {
      needed: "matracot tudunk biztosítani de ha van sajátod hozd bátran",
    },
  ]
  const moreInfos = [
    {
      moreInfo:
        "a jógaórák előtt 3-4 órával már ne egyél és fél órával ne igyál",
    },
    {
      moreInfo:
        "a cipődet hagyd a bejárat mellett a kijelölt helyen, ha szeretnél, hozz magaddal papucsot",
    },
    {
      moreInfo:
        "értékeidet zárd be az öltözőszekrénybe, a törölközőkön kívül mást ne hozz be a terembe",
    },
    {
      moreInfo:
        "mindig jelezd óra előtt, ha bármilyen sérülésed vagy betegséged van",
    },
    {
      moreInfo:
        "kérünk, vizet és egyéb folyadékot ne hozz be a gyakorlóterembe",
    },
    {
      moreInfo:
        "kérjük, ne beszélgess a teremben, és a terem előtt is csendben készülődj, ha bent óra van",
    },
    { moreInfo: "óra előtt és/vagy után lehetőség van zuhanyozni" },

    {
      moreInfo:
        "ászanagyakorlás után mindenképpen hagyj magadnak fél vagy egy órát, mielőtt étkeznél",
    },
  ]

  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">ELSŐ ALKALOM</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/elsoalkalom_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/elsoalkalom_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="elsoalkalom-wrapper tight--desktop--container">
        <div className="row mt-40px mb-20px">
          <p>
            Ha először jársz nálunk, érkezz legalább 15 perccel órakezdés előtt,
            hogy legyen elég idő a regisztrációra (tanfolyami részvétel esetén
            nincs szükség regisztrációra). A regisztrációs űrlap kitöltése után
            rövid elbeszélgetés következik az oktatóval (egyelőre csak a
            Mysore-programosokkal) a hatékony együttműködés érdekében. Ekkor
            mindenképp jelezd, ha bármilyen különös odafigyelést igénylő
            állapotban vagy (például: sérülés, betegség, terhesség).
          </p>
        </div>
        <div className="row mb-20px">
          <p>Amire szükséged lesz:</p>
        </div>
        <div className="row unordered-list-style mb-40px">
          <ul>
            {needed &&
              needed.map(({ needed }) => (
                <li key={needed}>
                  <p>{needed}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="row mb-20px">
          <p>Egyéb tudnivalók:</p>
        </div>
        <div className="row unordered-list-style mb-40px">
          <ul>
            {moreInfos &&
              moreInfos.map(({ moreInfo }) => (
                <li key={moreInfo}>
                  <p>{moreInfo}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="row mb-20px">
          <p>Várunk szeretettel!</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "elsoalkalom_desktop.jpg" }) {
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
  const pageTitle = "Első alklalom | " + data.site.siteMetadata.title
  const pageDescription =
    "Fontos tudnivalók, ha elöször jársz a Bandha Works Astanga jógaikolákban"

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
