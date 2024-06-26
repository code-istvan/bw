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
          <h1 className="page-hero-title">Janka</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/janka_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/janka_mobil.jpeg"
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
          12 éves koromban láttam egy nőt pózolni egy magazin borítóján. Olyan
          erősnek és egészségesnek tűnt, hogy olyan akartam lenni, mint ő!
          Olvastam, hogy a titka a jóga és elkezdtem iskola előtt néhány
          testtartást gyakorolni. Ettől kezdve minden vonzott a jógával
          kapcsolatban és élveztem a titkos gyakorlásomat reggelenként.
        </p>
        <p className="mb-20px">
          Pár évvel később elmentem Indiába, hogy egy tanártól tanuljak. Addigra
          a fő gyakorlásom egy vinyásza sorozat volt, de a képzésemben a
          vinyásza mellett az astanga is szerepelt. Az ott töltött idő után
          boldog voltam, hogy több tudással térhettem vissza, de nem értettem,
          miért olyan népszerű az astanga. Az első naptól fogva nem tetszett
          hogy mindig ugyanazt kell csinálni.
        </p>
        <p className="mb-20px">
          Akkoriban Párizsban tanultam és szerettem volna ott is egy tanárt
          találni. Adtam még egy esélyt az astangának mert pont az első napon
          érkeztem, amikor Gibran Gonzales elindította a Jivamukti stúdióban a
          mysore programot. Hagyományos szigorú tanítási stílusa rögtön
          megtetszett. Az első gyakorlás után éreztem, amit addig még nem
          tapasztaltam és kíváncsian követtem ezt az új utat.
        </p>
        <p className="mb-20px">
          A jin része lett a gyakorlásomnak, nagyon szeretem a csendet és a
          lelassulást, egyben segíti az astanga kihívásaimat.
        </p>
        <p className="mb-20px">
          Visszatértem Budapestre gyógytornát tanulni és annak ellenére, hogy
          leginkább a magányban való gyakorlást választom, István mindig
          szívesen fogad és olyan odaadással és tudással tanít, ami napjainkban
          ritka.
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "janka_desktop.jpeg" }) {
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
  const pageTitle = "Janka jógaoktató | " + data.site.siteMetadata.title
  const pageDescription =
    "Janka jógaoktató bemutatkozása. Astanga Jóga Mysore Jógaiskola."

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
