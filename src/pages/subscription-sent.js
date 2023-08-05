import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { navigate } from "gatsby"
import Button from "../components/Buttons/Button"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

export default function Messagesent() {
  return (
    <Layout>
      <Seo title="FELIRATKOZTÁL HÍRLEVELÜNKRE" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">SIKERES FELIRATKOZÁS</h1>
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
              Köszönjük, hogy feliratkoztál hírlevelünkre!
            </h3>
            <p>
              Adataidat bizalmasan kezeljük, nem adjuk ki harmadik fél számára!
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
