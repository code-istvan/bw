import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import "../sass/pages/_arak.scss"

export default function Arak() {
  return (
    <Layout>
      <Seo title="ÁRAK" />
      <div className="page-hero-container">
        <div className="row">
          <h1 className="page-hero-title">ÁRAK</h1>
          <StaticImage
            className="container-fluid page-hero-image page-big-image"
            src="../images/hirlevel.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/hirlevel_mobil.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className="arak-wrapper">
        <div className="row mt-40px mb-20px">
          <h3>Astanga Mysore Program</h3>
          <table className="prices">
            <thead>
              <tr>
                <th></th>
                <th>Árak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Egy alkalom (drop in)</td>
                <td>4.500.- Ft</td>
                <td className="buy-ticket">VÁSÁRLÁS</td>
              </tr>
              <tr>
                <td>Havi bérlet</td>
                <td>34.000.- Ft</td>
                <td className="buy-ticket">VÁSÁRLÁS</td>
              </tr>
              <tr>
                <td>Éves tagság*</td>
                <td>27.000.- Ft / hónap</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <small className="footnote">
            *Az éves tagság feltételei iránt érdeklődj a Mysore program
            vezetőjénél
          </small>
        </div>
        <br />
        <div className="row mb-20px">
          <h3>Vinyásza Krama Jóga</h3>
          <table className="prices">
            <thead>
              <tr>
                <th></th>
                <th>Árak</th>
                <th></th>
              </tr>
            </thead>
            <tr>
              <td>Egy alkalom (drop in)</td>
              <td>3.500.- Ft</td>
              <th className="buy-ticket">VÁSÁRLÁS</th>
            </tr>
            <tr>
              <td>Tíz alkalmas bérlet</td>
              <td>30.000.- Ft</td>
              <th className="buy-ticket">VÁSÁRLÁS</th>
            </tr>
          </table>
        </div>
        <div className="row mb-20px">
          <h3>Tanfolyamok</h3>
          <table className="prices">
            <thead>
              <tr>
                <th></th>
                <th>Árak</th>
                <th></th>
              </tr>
            </thead>
            <tr>
              <td>Kezdő astanga jóga tanfolyam</td>
              <td>30.000.- Ft</td>
              <th className="buy-ticket">VÁSÁRLÁS</th>
            </tr>
            <tr>
              <td>Astanga mysore kurzus</td>
              <td>30.000.- Ft</td>
              <th className="buy-ticket">VÁSÁRLÁS</th>
            </tr>
          </table>
        </div>
        <div className="row">
          <p>
            A bérlet és napijegy árak <strong>nem</strong> visszatéríthetőek,{" "}
            <strong>nem</strong> hosszabbíthatók meg, illetve{" "}
            <strong>nem</strong> "fagyaszthatóak" be.
          </p>
        </div>
      </div>
    </Layout>
  )
}
