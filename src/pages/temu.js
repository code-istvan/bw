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
          <h1 className="page-hero-title">Temu</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/temu_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/temu_mobil.jpeg"
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
          A mozgás mindig is szerves része volt az életemnek, gyerekkoromtól
          kezdve versenyszerűen sportoltam. Akkor még nem tudtam, de ezek a
          tapasztalatok később a jógagyakorlásom során is segítségemre váltak.
          Sokat tanultam az alázatról, kitartásról, odaadásról, és mindig is
          tisztelettel voltam tanítóim irányába.
        </p>
        <p className="mb-20px">
          Egyetemista koromban találkoztam a jógával, amikor nővéremet kísértem
          el egy Bikram órára. Szeretem a kihívásokat és az újdonságokat, így
          kíváncsisággal és élvezettel töltött el az első óra. Azután
          kipróbáltam különböző irányzatokat, kísérleteztem, és éreztem, hogy
          valami megfogott a jógában.
        </p>
        <p className="mb-20px">
          Szép lassan a jóga az életem részévé vált, elkezdtem rendszeresen
          gyakorolni. Az évek során kiváló tanárokkal találkoztam, sokat
          tanultam Sugár Bertalantól és Téklesz Diánától, hálás vagyok nekik.
        </p>
        <p className="mb-20px">
          Még kezdő gyakorló koromban Berci ajánlotta a Bandha Works
          jógaiskolát, ahova végül 2023 januárjában mentem el egy vinyasa krama
          órára. István és Noémi órái után rögtön éreztem, hogy megtaláltam a
          helyemet, ahol tovább szeretnék fejlődni és tanulni. A tanárok tudása,
          a gyakorlótársak és a hely varázsa mind hozzájárulnak ahhoz, hogy
          napról napra közelebb kerüljek önmagamhoz és ezáltal segíteni tudjak a
          körülöttem lévőknek is.
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "temu_desktop.jpeg" }) {
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
  const pageTitle = "Temu jógaoktató | " + data.site.siteMetadata.title
  const pageDescription =
    "Temu jógaoktató bemutatkozása. Astanga Jóga Mysore Jógaiskola."

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
