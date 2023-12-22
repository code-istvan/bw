import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import { CustomHead } from "../components/CustomHead"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function MysoreApplication() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">JELENTKEZÉS ELKÜLDVE</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/confirm_desktop.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/confirm_mobil.jpeg"
            layout="fullWidth"
            loading="lazy"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="message-sent--wrapper tight--desktop--container">
        <div className="row mt-40px">
          <div className="col">
            <h3 className="mb-20px">
              Köszönjük jelentkezésed Mysore-programunkba!
            </h3>
            <p>Jelentkezési lapod megérkezett szerverünkre!</p>
            <p className="mt-20px">
              Csapatunk az elkövetkező munkanapokon - általában 24-48 órán belül
              - feldolgozza jelentkezésed, hamarosan válaszolunk.
            </p>
            <p className="mt-20px">
              Ha munkanapokon 48 órán belül nem kapsz választ, akkor lehet, hogy{" "}
              <strong>
                <u>rosszul adtad meg</u>
              </strong>{" "}
              az email címed vagy a{" "}
              <strong>
                <u>SPAM fiókodban</u>
              </strong>{" "}
              landolt a válaszunk!
            </p>
            <div className="separator-horizontal mt-20px"></div>
            <h3 className="clr-brand-orange">Hol az email címünk?</h3>
            <p className="mt-20px">
              A weboldalunkon a biztonság és adatvédelem kiemelt prioritást
              élvez. Ennek érdekében, hogy elkerüljük a nem kívánt spam
              üzeneteket és az adathalászati kísérleteket, döntöttünk úgy, hogy
              nem tesszük közzé az email címünket.
            </p>
            <p className="mt-20px">
              Ez a gyakorlat a mai digitális világban iparági sztenderdnek
              számít, melynek célja, hogy a lehető legbiztonságosabb környezetet
              teremtse meg felhasználóink számára.
            </p>
            <p className="mt-20px">
              Ha továbbra is problémába ütközne a kapcsolatfelvétel irányunkban
              a honlapon keresztül, akkor kérünk írjál facebook üzenetet
              részünkre (lásd. lábléc), vagy gyere el személyesen hozzánk! Ez a
              tradicionális útja a kapcsolatfelvételnek a jóga világában.
              Köszönjük!
            </p>
          </div>
          <div className="row mt-40px">
            <Button
              type="button"
              buttonStyle="btn--small--outline"
              onClick={() => {
                navigate("/")
              }}
            >
              Vissza a főoldalra
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "confirm_desktop.jpeg" }) {
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
  const pageTitle =
    "Jelentkezés astanga Mysore-programunkba | " + data.site.siteMetadata.title
  const pageDescription =
    "Itt jelentkezhetsz a Bandha Works astanga Mysore-programunkba."

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
