import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { CustomLink } from "../components/CustomLink"
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
            src="../images/arak_desktop.jpg"
            layout="fullWidth"
            loading="eager"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Astanga jóga Mysore"
            placeholder="blurred"
          />
          <StaticImage
            className="container-fluid page-hero-image page-mobil-image"
            src="../images/arak_mobil.jpg"
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
          <h3>Astanga Mysore-Program</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Árak</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Egy alkalom (drop in)</td>
                <td>4.500.- Ft</td>
                <td>
                  {" "}
                  <CustomLink
                    link="https://shop.bandha.works/products/drop-in-egy-alkalom-astanga-mysore-gyakorlas"
                    title="VÁSÁRLÁS"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Heti bérlet</td>
                <td>20.000.- Ft</td>
                <td>
                  <CustomLink
                    link="https://shop.bandha.works/products/heti-berlet-astanga-mysore-program"
                    title="VÁSÁRLÁS"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Havi bérlet</td>
                <td>34.000.- Ft</td>
                <td>
                  <CustomLink
                    link="https://shop.bandha.works/products/havi-berlet-astanga-mysore-program"
                    title="VÁSÁRLÁS"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Éves bérlet</td>
                <td>320.000.- Ft</td>
                <td>
                  {" "}
                  <CustomLink
                    link="https://shop.bandha.works/products/eves-berlet-astanga-mysore-program"
                    title="VÁSÁRLÁS"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Éves tagság</td>
                <td>27.000.- Ft / hó</td>
                <td>HAMAROSAN</td>
              </tr>
            </tbody>
          </table>
          <p className="arak-table-footer mt-20px">
            Az astanga Mysore-programban való részvételhez előzetes regisztráció
            szükséges! Részletes leírást a{" "}
            <CustomLink
              link="/mysore-program"
              title="Mysore-program "
              classNames="link-decoration-remove"
            />
            oldalán találsz.
          </p>
        </div>
        <div className="row mt-40px mb-40px">
          <h3>Vinyásza Krama Jóga</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Árak</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr>
              <td>Egy alkalom (drop in)</td>
              <td>3.500.- Ft</td>
              <td>
                <CustomLink
                  link="https://shop.bandha.works/products/egy-alkalom-vinyasza-krama-joga"
                  title="VÁSÁRLÁS"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
            <tr>
              <td>Tíz alkalmas bérlet</td>
              <td>30.000.- Ft</td>
              <td>
                {" "}
                <CustomLink
                  link="https://shop.bandha.works/products/10-alkalmas-berlet-vinyasza-krama-joga"
                  title="VÁSÁRLÁS"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="row mb-40px">
          <h3>Tanfolyamok</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Árak</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr>
              <td>Kezdő astanga jóga tanfolyam</td>
              <td>30.000.- Ft</td>
              <td>
                {" "}
                <CustomLink
                  link="https://shop.bandha.works/products/astanga-kezdo-tanfolyam"
                  title="JELENTKEZÉS"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
            <tr>
              <td>Astanga Mysore-kurzus</td>
              <td>30.000.- Ft</td>
              <td>
                {" "}
                <CustomLink
                  link="https://shop.bandha.works/products/astanga-mysore-kurzus"
                  title="JELENTKEZÉS"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="row mb-40px">
          <h3>Magánórák</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Árak</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr>
              <td>Ászanás gyakorlás</td>
              <td>15.000.- Ft / 60 perc</td>
              <td>HAMAROSAN</td>
            </tr>
            <tr>
              <td>Jógikus életmód tanácsadás</td>
              <td>15.000.- Ft / 60 perc</td>
              <td>HAMAROSAN</td>
            </tr>
            <tr>
              <td>Kezdő astanga, négy alkalmas</td>
              <td>80.000.- Ft</td>
              <td>HAMAROSAN</td>
            </tr>
          </table>
        </div>
        <div className="row">
          <p>
            A bérletek, tanfolyamok és az egy alkalmas jegyek árai nem
            visszatéríthetőek. A bérletek az érvényességi időn túl nem
            hosszabbíthatók meg; a bérletek felhasználása, illetőleg a
            tanfolyamok nem szüneteltethetők. A megvásárolt egy alkalmas (egy
            alkalomra szóló) jegyek időpontjának utólagos módosítására nincsen
            lehetőség.
          </p>
        </div>
      </div>
    </Layout>
  )
}
