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
        <div className="row tight--desktop--container">
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
      <div className="arak-wrapper tight--desktop--container">
        <div className="row mt-40px">
          <h3>Astanga Mysore Program</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th></th>
                <th>Árak</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Egy alkalom (drop in)</td>
                <td>4.500.- Ft</td>
                <td>VÁSÁRLÁS</td>
              </tr>
              <tr>
                <td>Havi bérlet</td>
                <td>34.000.- Ft</td>
                <td>VÁSÁRLÁS</td>
              </tr>
              <tr>
                <td>Éves tagság</td>
                <td>27.000.- Ft / hó</td>
                <td>INFO</td>
              </tr>
            </tbody>
          </table>
          <small className="arak-table-footer">
            Az Astanga Mysore Programban való részvételhez előzetes regisztráció
            szükséges! Részletes leírást a Mysore Program oldalán találsz.
          </small>
        </div>
        <div className="row mt-40px mb-40px">
          <h3>Vinyásza Krama Jóga</h3>
          <table className="prices mt-10px">
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
              <td>VÁSÁRLÁS</td>
            </tr>
            <tr>
              <td>Tíz alkalmas bérlet</td>
              <td>30.000.- Ft</td>
              <td>VÁSÁRLÁS</td>
            </tr>
          </table>
        </div>
        <div className="row mb-40px">
          <h3>Tanfolyamok</h3>
          <table className="prices mt-10px">
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
              <td>JELENTKEZÉS</td>
            </tr>
            <tr>
              <td>Astanga mysore kurzus</td>
              <td>30.000.- Ft</td>
              <td>JELENTKEZÉS</td>
            </tr>
          </table>
        </div>
        <div className="row mb-20px">
          <h3>Magánórák</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th></th>
                <th>Árak</th>
                <th></th>
              </tr>
            </thead>
            <tr>
              <td>Ászanás gyakorlás</td>
              <td>10.000.- Ft-tól</td>
              <td>JELENTKEZÉS</td>
            </tr>
            <tr>
              <td>Jógikus életmód tanácsadás</td>
              <td>10.000.- Ft-tól</td>
              <td>JELENTKEZÉS</td>
            </tr>
            <tr>
              <td>Kezdő astanga, négy alkalmas</td>
              <td>60.000.- Ft</td>
              <td>JELENTKEZÉS</td>
            </tr>
          </table>
        </div>
        <div className="row">
          <p>
            A bérlet, tanfolyam és napijegy árak nem visszatéríthetőek, nem
            hosszabbíthatók meg, illetve nem "fagyaszthatóak" be.
          </p>
        </div>
      </div>
    </Layout>
  )
}
