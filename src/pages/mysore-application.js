import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function MysoreApplication() {
  return (
    <Layout>
      <Seo title="JELENTKEZÉS ELKÜLDVE" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">JELENTKEZÉS ELKÜLDVE</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/confirm_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/confirm_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
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
            <p>
              Adataidat bizalmasan kezeljük, és csak a jelentkezésed
              feldolgozása céljából használjuk fel.
            </p>
            <p className="mt-20px">
              Csapatunk az elkövetkező munkanapokon - általába 24-48 órán belül
              - feldolgozza jelentkezésed, hamarosan válaszolunk.
            </p>
            <p className="mt-20px">
              Ha munkanapokon 48 órán belűl nem kapsz választ, akkor lehet, hogy
              rosszul adtad meg az e-mail címed!
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
