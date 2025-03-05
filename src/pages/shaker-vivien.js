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
          <h1 className="page-hero-title">Vivien</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/vivien_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/vivien_mobil.jpeg"
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
          Az (astanga)jógával 2016- ban ismerkedtem meg, és kisebb nagyobb
          kihagyásokkal, mára rendszeres része lett az életemnek. Gyerekként
          évekig versenyszerűen atletizáltam, később futottam, röplabdáztam, így
          nagyon kötött izomzattal és merev testtel indultam el az astanga jóga
          ösvényén. Kitartó gyakorlás eredménye, hogy mára már nem remeg a
          testem, ha meg akarom érinteni a nagylábujjamat :)!
        </p>
        <p className="mb-20px">
          A jóga nekem egy csoda, azt jelenti, “kapcsolatban lenni önmagammal”.
          Régebben sokkal hajlamosabb voltam kint keresni a biztonságot, csakis
          kint, nem önmagban. A jóga segített abban, hogy rájöjjek, a biztonság
          bennem van. A gyakorlás érzékenyít és mindent jelez a testem - jót és
          rosszat - egészségesebb lettem. Gestalt terapeutaként őszintén hiszem,
          hogy az emberek képesek kapcsolódni a testükhöz és ez bármikor
          támogatja őket.
        </p>
        <p className="mb-20px">
          Nagyon hálás vagyok, hogy a Bandhaworks támogató és szakértő kezei
          között gyakorolhatok!
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "vivien_desktop.jpeg" }) {
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
  const pageTitle = "Vivien jógaoktató | " + data.site.siteMetadata.title
  const pageDescription =
    "Vivien jógaoktató bemutatkozása. Astanga Jóga Mysore Jógaiskola."

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
