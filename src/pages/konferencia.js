import * as React from "react"
import Layout from "../components/Layouts/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

export default function Konferencia() {
  return (
    <Layout>
      <Seo title="Konferencia" />
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">KONFERENCIA</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/konferencia_desktop.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/konferencia_mobil.jpeg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="konferencia-wapper tight--desktop--container ">
        <div className="row mt-40px">
          <p className="mb-20px">
            Az astanga konferencia hagyománya a Mysore-i KPJAYI-ból (K Pattabhi
            Jois Ashtanga Yoga Institute) származik, ahol is heti
            rendszerességgel összegyűlnek az intézményben gyakorlók és a vezető
            oktató, Guruji Sharath Jois. A konferenciát általában egy adott
            aktuális téma kifejtésével kezdi SharathJi majd a diákok kérdéseket
            tehetnek fel a gyakorlással kapcsolatosan, amire a reggeli órákon
            sajnos nincs lehetőség.
          </p>
          <p className="mb-20px">
            A konferencián való részvétel ingyenes a Mysore programunk
            résztvevői számára, de örömmel fogadjuk, ha hozol magaddal egy kis
            gyümölcsöt, vegán süteményt vagy egy szép virágot Patandzsalinak.
          </p>
          <p>
            <strong>Következő esemény időpontja:</strong> Hamarosan...
          </p>
          <p>
            <strong>Téma:</strong> Hamarosan...
          </p>
          <p>
            <strong>Házigazda:</strong> Szalai István Authorized Level 1 astanga
            oktató
          </p>
        </div>
      </div>
    </Layout>
  )
}
