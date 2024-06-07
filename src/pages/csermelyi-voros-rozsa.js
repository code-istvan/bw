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
          <h1 className="page-hero-title">Rózsa</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/rozsa_desktop.png"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/rozsa_mobil.png"
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
          Gyerekkorom óta életem szerves része a testmozgás. Versenytáncos
          múltam mellett szívesen kipróbáltam egyéb mozgásformákat is. Így
          kerültem el gimnazista koromban az első jóga órámra. Örömmel
          tapasztaltam, hogy a gyakorlás képes enyhíteni az időnként előtörő
          szorongásomon.
        </p>
        <p className="mb-20px">
          Az astanga jógáról Sugár Bertalan óráin hallottam először. Nagyon
          kíváncsivá tett, viszont egy évig halogattam, mire elmentem az első
          Mysore órára. Féltem és nem hittem magamban, nem gondoltam, hogy képes
          vagyok egy ilyen intenzív és rendszeres gyakorlást fenntartani.
        </p>
        <p className="mb-20px">
          Azonban, mivel egy nehéz időszakot éltem át és változásra vágytam, így
          végül egy hideg, februári reggelen lejöttem a Bandha Works-be. Tisztán
          emlékszem az első benyomásokra. Néztem a gyakorlókat, hallgattam az
          Ujjayi légzést és már akkor tudtam, hogy ez az amit kerestem.
        </p>
        <p className="mb-20px">
          Úgymond hamar elkapott a gépszíj, rendszeresen gyakoroltam, majd 3 év
          után azt éreztem, hogy el kell mennem Mysore-ba a forráshoz. 2022-ben
          felvételt nyertem a Sharath Yoga Centre-be. Nagyon szerencsésnek érzem
          magam, hogy lehetőségem volt 2 hónapot Paramaguru Sharath Jois
          felügyelete alatt gyakorolnom. Ezen kívül, meghatározó volt
          bepillantást nyerni az dél-indiai kultúrába és része lenni az emberek
          hétköznapjainak.
        </p>
        <p className="mb-20px">
          Rendkívül hálás vagyok a tanáraimnak és a gyakorlásnak. Sokat tanultam
          alázatról, hitről, elfogadásról és a félelmeim leküzdéséről.
          Kíváncsian várom, hogy mit tanít és merre visz tovább a gyakorlás.
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kisanna_desktop.png" }) {
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
  const pageTitle = "Rózsa jógaoktató | " + data.site.siteMetadata.title
  const pageDescription =
    "Rózsa jógaoktató bemutatkozása. Astanga Jóga Mysore Jógaiskola."

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
