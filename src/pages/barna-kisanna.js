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
          <h1 className="page-hero-title">Kisanna</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/img_coming_soon.jpg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/kisanna_mobil.png"
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
          Barna Kisanna vagyok, pszichológus, astanga jóga gyakorló.
        </p>
        <p className="mb-20px">
          A jógával még egyetemista koromban találkoztam először. Sokféle
          irányzatot kipróbáltam már, mígnem egy ismerősöm ajánlására
          felkerestem és lesétáltam életem első vinyásza kráma órájára a Bandha
          Works-be. Egyből éreztem, hogy jó helyen járok: lenyűgözött a shala
          autentikussága, az a szakmai elhivatottság és odaadás, amit az
          oktatókon láttam, valamint a jógaórák maguk, amiket egyre gyakrabban
          és rendszeresebben látogattam, mert éreztem, hogy jobban vagyok
          utánuk, mint nélkülük.
        </p>
        <p className="mb-20px">
          Kicsivel később – az első várandósságom második felében, keresve egy
          kiszámítható, testem (és lelkem) aktuális állapotához módosítható,
          rendszeres gyakorlást biztosító sorozatot – kezdtem el astanga
          vinyásza jógázni. Amit azóta is gyakorlok, immár a kisgyerekes családi
          lét lehetőségein belül. Ez a felállás megerősít abban a
          meggyőződésemben, hogy a jóga mindenkinek való, és hogy messze
          túlmutat az ászanák gyakorlásán.
        </p>
        <p className="mb-20px">
          2019-ben lehetőségem adódott a jóga szülőhazájába, Indiába utazni,
          ahol Vijay Kumarnál astangáztam. Négy évvel később, 2023-ban pedig
          felvételt nyertem a Sharath Yoga Centre-be, ahol Paramaguru Sharath
          Jois felügyelete alatt gyakorolhattam.
        </p>
        <p className="mb-20px">
          Számomra a jóga egy lehetőség, hogy kapcsolódhassunk önmagunkkal. A
          belső zűr-, és a külső hangzavar lecsendesítése, amikor bepillantást
          nyerhetünk abba, éppen miben vagyunk, „mivel van dolgunk”. Engem
          rendszeresen szembesít perfekcionizmusom korlátoltságával, és arra
          tanít, hogy elfogadóbb és megengedőbb legyek önmagammal, „elengedőbb”
          a külső elvárásokkal.
        </p>
        <p>
          Pszichológusként külön izgalmasnak tartom felfedezni a többezer éves
          keleti tanítások, a jóga filozófia, illetve a modern nyugati
          pszichológiai és idegtudományi elméletek közötti párhuzamokat. Ebben a
          témában indul hamarosan blogsorozatom a jógaiskola honlapján.
        </p>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "noemi_desktop.jpg" }) {
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
  const pageTitle = "Noémi jógaoktató | " + data.site.siteMetadata.title
  const pageDescription =
    "Noémi jógaoktató bemutatkozása. Astanga Jóga Mysore Jógaiskola."

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
