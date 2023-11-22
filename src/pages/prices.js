import * as React from "react"
import Layout from "../components/Layouts/Layout"
import Seo from "../components/seo"
import { CustomLink } from "../components/CustomLink"
import { StaticImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/pages/_arak.scss"

export default function Prices() {
  return (
    <Layout>
      <div className="page-hero-container">
        <div className="row tight--desktop--container">
          <h1 className="page-hero-title">PRICES</h1>
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
          <h3>Ashtanga Mysore Program</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Prices</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Drop in</td>
                <td>4.500.- Ft</td>
                <td>
                  {" "}
                  <CustomLink
                    link="https://shop.bandha.works/products/drop-in-egy-alkalom-astanga-mysore-gyakorlas"
                    title="BUY"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Weekly pass</td>
                <td>20.000.- Ft</td>
                <td>
                  <CustomLink
                    link="https://shop.bandha.works/products/heti-berlet-astanga-mysore-program"
                    title="BUY"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Monthly pass</td>
                <td>34.000.- Ft</td>
                <td>
                  <CustomLink
                    link="https://shop.bandha.works/products/havi-berlet-astanga-mysore-program"
                    title="BUY"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
              <tr>
                <td>Yearly Membership</td>
                <td>320.000.- Ft</td>
                <td>
                  {" "}
                  <CustomLink
                    link="https://shop.bandha.works/products/eves-berlet-astanga-mysore-program"
                    title="BUY"
                    classNames="link-decoration-remove"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p className="arak-table-footer mt-20px">
            Pre-registration is required to participate in the astanga Mysore
            programme! Register for Mysore Programme{" "}
            <CustomLink
              link="/mysore-programme-application"
              title="here"
              classNames="link-decoration-remove"
            />
            .
          </p>
        </div>
        <div className="row mt-40px mb-40px">
          <div>
            <h3>Vinyasa Krama Yoga</h3>
            <p>
              The vinyasa krama classes are held in Hungarian. The teacher can
              give individual instructions in English to foreign practitioners.
            </p>
          </div>

          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Prices</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr>
              <td>Drop in</td>
              <td>3.500.- Ft</td>
              <td>
                <CustomLink
                  link="https://shop.bandha.works/products/egy-alkalom-vinyasza-krama-joga"
                  title="BUY"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
            <tr>
              <td>10-session pass</td>
              <td>30.000.- Ft</td>
              <td>
                {" "}
                <CustomLink
                  link="https://shop.bandha.works/products/10-alkalmas-berlet-vinyasza-krama-joga"
                  title="BUY"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="row mb-40px">
          <div>
            <h3>Courses</h3>
            <p>All courses are taught in Hungarian</p>
          </div>

          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Prices</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr>
              <td>Beginners astanga yoga course</td>
              <td>30.000.- Ft</td>
              <td>
                {" "}
                <CustomLink
                  link="https://shop.bandha.works/products/astanga-kezdo-tanfolyam"
                  title="APPLICATION"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
            <tr>
              <td>Astanga Mysore course</td>
              <td>30.000.- Ft</td>
              <td>
                {" "}
                <CustomLink
                  link="https://shop.bandha.works/products/astanga-mysore-kurzus"
                  title="APPLICATION"
                  classNames="link-decoration-remove"
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="row mb-40px">
          <h3>Private classes</h3>
          <table className="prices mt-10px">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Prices</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tr>
              <td>Asana practice</td>
              <td>15.000.- Ft / 60 minute</td>
              <td>COMING SOON</td>
            </tr>
            <tr>
              <td>Yogic lifestyle counselling</td>
              <td>15.000.- Ft / 60 minute</td>
              <td>COMING SOON</td>
            </tr>
            <tr>
              <td>Beginner astanga intro (private), 4-session</td>
              <td>80.000.- Ft</td>
              <td>COMING SOON</td>
            </tr>
          </table>
        </div>
        <div className="row">
          <p>
            Passes, courses and drop in tickets are non-refundable. Passes may
            not be extended beyond their period of validity; the use of passes
            and courses cannot be paused. There is no right to change afterwards
            the validity date of purchased drop in ticket (single-occasion
            ticket).
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "arak_desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const ogImage = getSrc(data.file.childImageSharp.gatsbyImageData)
  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Seo
      title="Prices | Bandha Works Yoga Shala"
      lang="en"
      description="Here you can find our prices."
      ogFeaturedImage={`${siteUrl}${ogImage}`}
      location={location}
    />
  )
}
